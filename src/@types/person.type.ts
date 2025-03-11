export interface Person {
  rfc: string;
  nombre?: string;
  apellidos?: string;
  fechaNacimiento?: string;
  nombreComercial?: string;
  fechaConstitucion?: string;
  giro?: string;
  type: "Física" | "Moral" | "";
}
