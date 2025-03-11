# XCAPITALPROJ

Breve descripción de tu aplicación.

## Tecnologías Usadas

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)
- [ShadCN](https://ui.shadcn.com/docs/installation)
- [ReactHookForm](https://react-hook-form.com/)

## Estructura del proyecto

```
XCAPITALPROJ
├── 📂 node_modules # Dependencias del proyecto (autogenerado)
├── 📂 public # Archivos estáticos públicos
├── 📂 src # Código fuente principal
│ ├── 📂 @types # Definiciones de tipos TypeScript
│ ├── 📂 assets # Recursos (imágenes, fuentes, etc.)
│ ├── 📂 components # Componentes reutilizables
│ ├── 📂 lib # Lógica y utilidades compartidas
│ ├── 📂 store # Estado global con Zustand
│ ├── 📂 views # Vistas o páginas de la aplicación
│ ├── App.tsx # Componente raíz de la aplicación
│ ├── index.css # Estilos globales
│ ├── main.tsx # Punto de entrada principal
│ ├── vite-env.d.ts # Definiciones de entorno de Vite
├── 📜 .gitignore # Archivos y carpetas a ignorar en Git
├── 📜 components.json # Posible configuración de componentes
├── 📜 eslint.config.js # Configuración de ESLint
├── 📜 index.html # Archivo HTML principal
├── 📜 package-lock.json # Control de versiones de dependencias (npm)
├── 📜 package.json # Archivo de configuración del proyecto
├── 📜 README.md # Documentación del proyecto
├── 📜 tsconfig.app.json # Configuración específica de TypeScript para la app
├── 📜 tsconfig.json # Configuración global de TypeScript
├── 📜 tsconfig.node.json # Configuración TypeScript para Node.js
└── 📜 vite.config.ts # Configuración de Vite
```

## Instalación

```
npm install

```

## Ejecución

```
npm run dev

```

## Resúmen del proyecto

El proyecto consiste en dos tablas con registros de personas y ciertos
datos fiscales. Las tablas se encuentran en IndividualsTable.tsx para
personas físicas y, LegalEntitiesTable.tsx para personas morales.

```typescript
//Componente para crear tablas.
const DataTable = <T>({ data, columns }: DataTableProps<T>) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="grid grid-cols-4">
          {columns.map((head) => (
            <TableHead className="text-center" key={head.key as string}>
              {head.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={`row-${rowIndex}-${row}`} className="grid grid-cols-4">
            {columns.map((col) => (
              <TableCell
                key={`row-${col.key as string}`}
                className="text-center"
              >
                {col.render
                  ? col.render(row[col.key])
                  : (row[col.key] as React.ReactNode)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
```

Estos registros se realizan, dando click en el boton
de "añadir usuario". Así se muestra un modal con un
formulario que nos pide ingresar un RFC. Esto se enc-
entra en el archivo RegistrationDialog.tsx

```typescript
const RegistrationDialog = () => {
  const { isOpen, handleModalOpen } = usePersonInfo();

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleModalOpen}>
        <DialogClose />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Registrar persona fiscal</DialogTitle>
          </DialogHeader>
          <RegistrationForm />
          <SuccessView />
        </DialogContent>
      </Dialog>
      <Button onClick={handleModalOpen}>Add Person</Button>
    </>
  );
};
```

El formulario identifica y registra a las personas fisicas
y morales según las validaciones que contiene. Las validaciones
fueron hechas con zod.
