import { useState, useEffect } from "react";

const useAuthToken = () => {
  // Use state to store the authentication token
  const [authToken, setAuthToken] = useState(null);

  // Use useEffect to persist the token in local storage
  useEffect(() => {
    // Retrieve the token from local storage
    const storedToken = localStorage.getItem("authToken");

    // If a token is found in local storage, set it in the state
    if (storedToken) {
      setAuthToken(storedToken);
    }
  }, []);
  const getItem = () => {
    const token = localStorage.getItem("authToken");
    return token;
  };
  // Function to update the authentication token
  const updateAuthToken = (newToken) => {
    // Update the token in the state
    setAuthToken(newToken);

    // Store the token in local storage for persistence
    localStorage.setItem("authToken", newToken);
  };

  // Function to clear the authentication token
  const clearAuthToken = () => {
    // Clear the token from the state
    setAuthToken(null);

    // Remove the token from local storage
    localStorage.removeItem("authToken");
  };

  // Return the token and functions to update and clear it
  return { authToken, updateAuthToken, clearAuthToken, getItem };
};

export default useAuthToken;
