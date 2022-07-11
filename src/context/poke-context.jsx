import { createContext, useState, useEffect } from "react";
import UseFetch from "../hooks/useFetch";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  // called a api endpoint then destructured the data from a return value in a custom hook
  const { isLoading, apiData, error } = UseFetch(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  // cast as an object and passed to value prop in a context-provider
  const providerValue = {
    isLoading,
    apiData,
    error,
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {children}
    </PokemonContext.Provider>
  );
};
