import React, { useState } from "react";
import styles from "./Formular.module.scss";

// Definerer Formular-komponenten
export const Formular = () => {
  // State til at håndtere værdierne af formular-inputfelterne
  const [formState, setFormState] = useState({
    navn: "",
    email: "",
    besked: "",
  });

  // State til at håndtere valideringsfejl i formular-inputfelterne
  const [formErrors, setFormErrors] = useState({
    navn: false,
    email: false,
    besked: false,
  });

  // Funktion til at håndtere ændringer i inputfelterne og opdatere formState og formErrors
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
  };

  // Funktion til at validere hele formular
  const validateForm = () => {
    const errors = {};

    // Tjek om 'navn' er tomt
    if (!formState.navn.trim()) {
      errors.navn = true;
    }

    // Tjek om 'email' er tomt eller har en ugyldig format
    if (!formState.email.trim() || !/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = true;
    }

    // Tjek om 'besked' er tomt
    if (!formState.besked.trim()) {
      errors.besked = true;
    }

    // Opdater formErrors med valideringsresultaterne
    setFormErrors(errors);

    // Returner true, hvis der ikke er nogen fejl, og false ellers
    return Object.values(errors).every((error) => !error);
  };

  // Funktion til at håndtere formularindsendelse
  const handleSubmit = (e) => {
    e.preventDefault();

    // Hvis formular er gyldig, vis en besked og implementer eventuelt yderligere logik
    if (validateForm()) {
      alert("Tak for din besked");
      // Implementer yderligere logik for formularindsendelse her
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>

        {/* Navn-inputfelt */}
        <label htmlFor="navn">
          Navn:{formErrors.navn && <span className={styles.error}>*</span>}
        </label>
        <input
          type="text"
          id="navn"
          name="navn"
          value={formState.navn}
          onChange={handleInputChange}
          className={formErrors.navn ? styles.inputError : ""}
        />
        {formErrors.navn && (
          <span className={styles.errorMessage}>Navn skal udfyldes</span>
        )}

        {/* Email-inputfelt */}
        <label htmlFor="email">
          Email:{formErrors.email && <span className={styles.error}>*</span>}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          className={formErrors.email ? styles.inputError : ""}
        />
        {formErrors.email && (
          <span className={styles.errorMessage}>Ugyldig email</span>
        )}

        {/* Besked-inputfelt */}
        <label htmlFor="besked">
          Besked:{formErrors.besked && <span className={styles.error}>*</span>}
        </label>
        <textarea
          id="besked"
          name="besked"
          value={formState.besked}
          onChange={handleInputChange}
          rows={8}
          className={formErrors.besked ? styles.inputError : ""}
        />
        {formErrors.besked && (
          <span className={styles.errorMessage}>Besked skal udfyldes</span>
        )}

        {/* Send-knap */}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
