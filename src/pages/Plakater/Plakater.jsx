import React, { useState, useEffect } from 'react';
import {Toast} from '../../components/Toast/Toast'; // Importer Toast
import {UseToast} from '../../components/Toast/UseToast'; // Importer UseToast
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"


export const Plakater = () => {
    const { showToast, closeToast, toast } = UseToast(); // Brug showToast og closeToast fra useToast-hooket
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        showToast('Du er på plakat-siden', 'info');
      }, 10000);
  
      return () => clearTimeout(timeout);
    }, [showToast]);

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast} // Brug closeToast-funktionen som onClose-prop
        />
      )}
      <ContentWrapper title="Plakater">
        indhold
        </ContentWrapper>


    </>
  );
};
