import { Person } from "@/@types/person.type";
import { z } from "zod";

export type PersonregisterSchemaType = z.infer<typeof personregisterSchema>;

const validarRFC = (rfc: string, data: Person): boolean => {
  if (rfc.length === 13 && data.type === "Física") {
    if (!data.nombre || !data.apellidos || !data.fechaNacimiento) return false;

    const [apellidoPaterno, apellidoMaterno] = data.apellidos.split(" ");
    const iniciales =
      apellidoPaterno?.slice(0, 2).toUpperCase() +
      (apellidoMaterno ? apellidoMaterno[0].toUpperCase() : "") +
      data.nombre[0].toUpperCase();

    const fecha = data.fechaNacimiento.replace(/-/g, "").slice(2, 8);

    return rfc.startsWith(`${iniciales}${fecha}`);
  }

  if (rfc.length === 12 && data.type === "Moral") {
    if (!data.nombreComercial || !data.fechaConstitucion) return false;

    const iniciales = data.nombreComercial
      .split(" ")
      .map((word: any) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 3);

    const fecha = data.fechaConstitucion.replace(/-/g, "").slice(2, 8);

    return rfc.startsWith(`${iniciales}${fecha}`);
  }

  return false;
};

export const personregisterSchema = z
  .object({
    rfc: z
      .string()
      .min(12, "El RFC debe tener al menos 12 caracteres")
      .max(13, "El RFC no puede tener más de 13 caracteres"),
    type: z.enum(["Física", "Moral"]),
    nombre: z
      .string()
      .optional(),
    apellidos: z
      .string()
      .optional(),
    fechaNacimiento: z.string().optional(),
    nombreComercial: z.string().optional(),
    fechaConstitucion: z.string().optional(),
    giro: z.string().optional(),
  })
  .refine(
    (data) => {
      return validarRFC(data.rfc, data);
    },
    {
      message: "El RFC ingresado no coincide con los del formulario.",
      path: ["rfc"],
    }
  )
  .superRefine((data, ctx) => {
    if (data.type === "Física") {
      if (!data.nombre || !data.apellidos || !data.fechaNacimiento) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Nombre, apellidos y fecha de nacimiento son obligatorios para personas físicas",
          path: ["nombre"],
        });
      }
    }

    if (data.type === "Moral") {
      if (!data.nombreComercial || !data.fechaConstitucion) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Nombre comercial y fecha de constitución son obligatorios para personas morales",
          path: ["nombreComercial"],
        });
      }
    }
  });
