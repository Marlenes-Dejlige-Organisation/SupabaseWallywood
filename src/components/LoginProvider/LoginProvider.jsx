import React, { createContext, useState, useEffect, useContext } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  // Dependency array:
  const [loginData, setLoginData] = useState({});

  useEffect(() => {
    // Hvis den findes, er det den vi henter ud med getItem, og dermed bliver det gjort tilgængeligt for alle indlejrede komponenter (children) i provideren:
    if (sessionStorage.getItem('access_token')) {
      // sessionStorage er strings, der kan ikke vises noget javascript. Derfor skal vi bruge JSON til at konvertere:
      setLoginData(JSON.parse(sessionStorage.getItem('access_token')));
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