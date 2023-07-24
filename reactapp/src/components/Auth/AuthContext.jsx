import React, { createContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthContext Provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle successful sign-in or registration
  const handleAuthenticationSuccess = () => {
    setIsAuthenticated(true);
    // Additional logic for handling successful authentication if needed
  };

  // Function to handle sign-out
  const handleSignOut = () => {
    
    localStorage.removeItem('lastClickedButton');
    setIsAuthenticated(false);
    // Additional logic for handling sign-out if needed
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleAuthenticationSuccess,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
