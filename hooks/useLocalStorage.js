"use client";

import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const storedValue = localStorage.getItem(key);
      if (storedValue && storedValue !== null && storedValue !== "undefined") {
        setValue(JSON.parse(storedValue));
      }
    }
  }, [isLoaded, key]);

  const setLocalStorageValue = (newValue) => {
    setValue(newValue);
    if (isLoaded) {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  return [value, setLocalStorageValue];
};

export default useLocalStorage;
