import { Person } from "@/@types/person.type";
import { Column } from "@/components/shared/DataTable";
import { Button } from "@/components/ui";
import { usePersonStore } from "@/store/personStore";

export const columnsIndivdualPerson: Column<Person>[] = [
  {
    key: "rfc",
    label: "RFC",
    render: (row) => {
      return <div>{row}</div>;
    },
  },
  {
    key: "nombre",
    label: "Nombre",
    render: (row) => {
      return <div>{row}</div>;
    },
  },
  {
    key: "apellidos",
    label: "Apellidos",
    render: (row) => {
      return <div>{row}</div>;
    },
  },
  {
    key: "fechaNacimiento",
    label: "Fecha de nacimiento",
    render: (row) => {
      return <div>{row}</div>;
    },
  },
  {
    key: "rfc",
    label: "Opciones",
    render: (row) => {
      const { deleteUser } = usePersonStore();
      return (
        <div>
          <Button
            onClick={() => {
              deleteUser(row || "");
            }}
          >
            Eliminar
          </Button>
        </div>
      );
    },
  },
];

export const columnsLegalEntity: Column<Person>[] = [
  {
    key: "rfc",
    label: "RFC",
    render: (row) => {
      console.log(row);
      return <div>{row}</div>;
    },
  },
  {
    key: "nombreComercial",
    label: "Nombre comercial",
    render: (row) => <div>{row}</div>,
  },
  {
    key: "fechaConstitucion",
    label: "Fecha de constitución",
    render: (row) => <div>{row}</div>,
  },
  {
    key: "giro",
    label: "Giro",
    render: (row) => <div>{row}</div>,
  },
  {
    key: "rfc",
    label: "Opciones",
    render: (row) => {
      const { deleteUser } = usePersonStore();
      return (
        <div>
          <Button
            onClick={() => {
              deleteUser(row || "");
            }}
          >
            Eliminar
          </Button>
        </div>
      );
    },
  },
];
