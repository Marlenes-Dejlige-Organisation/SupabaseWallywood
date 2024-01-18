// useToast.js
import { useState, useEffect } from 'react';

export const UseToast = () => {
    const [toast, setToast] = useState(null);

    const showToast = (message, type = 'info') => {
      setToast({ message, type });
    };
  
    const closeToast = () => {
      setToast(null);
    };
  
    useEffect(() => {
      let timeout;
  
      if (toast) {
        timeout = setTimeout(() => {
          closeToast();
        }, 10000); // Vis notifikation i 5 sekunder
      }
  
      return () => {
        clearTimeout(timeout);
      };
    }, [toast]);
  
    return { showToast, closeToast, toast };
  };


