import { useState } from "react";

const useAuthToken = () => {
  // Use state to store the authentication token
  const [authToken, setAuthToken] = useState(null);

  // Use useEffect to persist the token in local storage

  const getItem = () => {
    const token = localStorage.getItem("authToken");
    const getDetail = localStorage.getItem("userDetails");
    const getUserDetail = JSON.parse(getDetail);
    const getQuestions = localStorage.getItem("savedQuestions");
    const getSavedQuestions = JSON.parse(getQuestions);
    const getTemplateId = localStorage.getItem("templateId");
    return { token, getUserDetail, getSavedQuestions, getTemplateId };
  };
  const removeItem = () => {
    localStorage.removeItem("savedQuestions");
    localStorage.removeItem("templateId");
  };
  // Function to update the authentication token
  const updateAuthToken = (newToken) => {
    // Update the token in the state
    setAuthToken(newToken);

    // Store the token in local storage for persistence
    localStorage.setItem("authToken", newToken);
  };

  const clearAuthToken = () => {
    // Clear the token from the state
    setAuthToken(null);

    // Remove the token from local storage
    localStorage.removeItem("authToken");
  };

  // Return the token and functions to update and clear it
  return { updateAuthToken, clearAuthToken, getItem, removeItem };
};

export default useAuthToken;
