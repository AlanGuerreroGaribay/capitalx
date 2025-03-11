interface PersonRegistrerFields {
  value:
    | "nombre"
    | "apellidos"
    | "fechaNacimiento"
    | "nombreComercial"
    | "fechaConstitucion"
    | "giro"
    | "rfc"
    | "type";
  label: string;
  type: string;
}

export const individualPersonFields: PersonRegistrerFields[] = [
  { value: "nombre", label: "Nombre", type: "text" },
  { value: "apellidos", label: "Apellidos", type: "text" },
  { value: "fechaNacimiento", label: "Fecha de Nacimiento", type: "date" },
];

export const legalEntitiesFields: PersonRegistrerFields[] = [
  { value: "nombreComercial", label: "Nombre Comercial", type: "text" },
  { value: "fechaConstitucion", label: "Fecha de Constitución", type: "date" },
  { value: "giro", label: "Giro", type: "text" },
];
