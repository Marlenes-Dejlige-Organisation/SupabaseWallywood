import React, { useState, useEffect } from 'react';
import { FavoriteColor } from "../../components/FavColor/FavColor";
import { ClickCounter } from '../../components/ClickCounter/ClickCounter';
import { GreetingComponent } from "../../components/Greeting/Greeting";
import { CustomHook } from '../../components/CustomHook/CustomHook';
import {Toast} from '../../components/Toast/Toast'; // Importer Toast
import {UseToast} from '../../components/Toast/UseToast'; // Importer UseToast

export const Hooks = () => {
    const { showToast, closeToast, toast } = UseToast(); // Brug showToast og closeToast fra useToast-hooket
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        showToast('Du er på Hooks-siden', 'info');
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
      <h2>Button:</h2>
      <FavoriteColor />
      <div>
        <h2>Counter:</h2>
        <ClickCounter />
        <h2>Greeting:</h2>
        <GreetingComponent />
        <h2>CustomHook:</h2>
        <CustomHook />
      </div>


    </>
  );
};
