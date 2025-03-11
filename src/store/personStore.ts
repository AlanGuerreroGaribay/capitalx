import { Person } from "@/@types/person.type";
import { create } from "zustand";

interface PersonStore {
  persons: Person[];
  addPerson: (person: Person) => void;
}

export const usePersonStore = create<PersonStore>((set) => ({
  persons: [],
  addPerson: (person) =>
    set((state) => ({ persons: [...state.persons, person] })),
}));
