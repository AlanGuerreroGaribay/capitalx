import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

export interface Column<T> {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T]) => React.ReactNode;
}

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

const DataTable = <T,>({ data, columns }: DataTableProps<T>) => {
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

export default DataTable;
