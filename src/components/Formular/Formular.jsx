import React, { useState } from "react";
import styles from "./Formular.module.scss";

export const Formular = () => {
  const [formState, setFormState] = useState({
    navn: "",
    email: "",
    besked: "",
  });

  const [formErrors, setFormErrors] = useState({
    navn: false,
    email: false,
    besked: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
  };

  const validateForm = () => {
    const errors = {};

    if (!formState.navn.trim()) {
      errors.navn = true;
    }

    if (!formState.email.trim() || !/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = true;
    }

    if (!formState.besked.trim()) {
      errors.besked = true;
    }

    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Tak for din besked");
      // Implementer yderligere logik for formularindsendelse her
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Send</button>
      </form>
    </div>
  );
};


