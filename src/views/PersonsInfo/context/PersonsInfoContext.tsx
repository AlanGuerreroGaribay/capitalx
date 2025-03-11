import { Person } from "@/@types/person.type";
import { usePersonStore } from "@/store/personStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import {
  personregisterSchema,
  type PersonregisterSchemaType,
} from "../validations/personsForm.validations";

interface PersonsContextInfoTypes {
  persons: Person[];
  isOpen: boolean;
  success: boolean;
  handleModalOpen: () => void;
  handleRegisterPerson: (person: Person, isLegalEntity: boolean) => void;
  handleSuccessRegistration: () => void;
  personregisterForm: UseFormReturn<PersonregisterSchemaType>;
}

export const PersonsContextInfo = createContext<
  PersonsContextInfoTypes | undefined
>(undefined);

export const PersonsInfoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const persons = usePersonStore((state) => state.persons);
  const addPerson = usePersonStore((state) => state.addPerson);

  const personregisterForm = useForm<PersonregisterSchemaType>({
    resolver: zodResolver(personregisterSchema),
    defaultValues: {
      rfc: "",
      nombre: "",
      apellidos: "",
      fechaNacimiento: "",
      type: "Física",
      nombreComercial: "",
      fechaConstitucion: "",
      giro: "",
    },
  });

  const handleModalOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleRegisterPerson = (data: Person, isLegalEntity: boolean) => {
    addPerson({ ...data, type: isLegalEntity ? "Moral" : "Física" });
    setSuccess(!success);
    personregisterForm.clearErrors();
    personregisterForm.reset();
  };

  const handleSuccessRegistration = () => {
    personregisterForm.reset();
    setSuccess(!success);
    setIsOpen(!isOpen);
  };

  return (
    <PersonsContextInfo.Provider
      value={{
        isOpen,
        success,
        persons,
        personregisterForm,
        handleModalOpen,
        handleRegisterPerson,
        handleSuccessRegistration,
      }}
    >
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center gap-6">
        {children}
      </div>
    </PersonsContextInfo.Provider>
  );
};
