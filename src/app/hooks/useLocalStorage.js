"use client";

import React, { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isLoad, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Ensure localStorage is accessed only after the component mounts
  }, []);

  useEffect(() => {
    if (isLoad) {
      const storedValue = localStorage.getItem(key); // Retrieve the value from localStorage
      if (storedValue && storedValue !== null && storedValue !== "undefined") {
        try {
          setValue(JSON.parse(storedValue));
        } catch (error) {
          console.error('Error parsing localStorage value:', error);
          setValue(initialValue);
        }
      }
    }
  }, [isLoad, key]);

  const setLocalStorageValue = (newValue) => {
    setValue(newValue); // Update state immediately
    if (isLoad) {
      localStorage.setItem(key, JSON.stringify(newValue)); // Update localStorage
    }
  };

  return [value, setLocalStorageValue];
};

export default useLocalStorage;
