import React, { createContext, useState, useEffect, useContext } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(null); // Start med at sætte loginData som null

  useEffect(() => {
    const storedToken = sessionStorage.getItem('access_token');
    if (storedToken) {
      setLoginData(JSON.parse(storedToken));
    } else {
      setLoginData(); // Sørg for, at loginData altid starter som tomt objekt, hvis der ikke er gemt adgangsnøgle
    }
  }, [children]);

  return (
    <LoginContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </LoginContext.Provider>
  );
};


export const useLogin = () => useContext(LoginContext);


//denne skal importeres rigtig højt i hierakiet, i main.jsx... og alt der så ligger indenfor LoginProvideren, bliver dermed til children og i de children-komponenter er mine logindata så tilgængelige.