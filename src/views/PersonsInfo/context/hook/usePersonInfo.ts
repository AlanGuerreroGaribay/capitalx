import { useContext } from "react";
import { PersonsContextInfo } from "../PersonsInfoContext";

export const usePersonInfo = () => {
  const context = useContext(PersonsContextInfo);
  if (!context) {
    throw new Error("El contexto debe usarse dentro del provider");
  }

  return context;
};
