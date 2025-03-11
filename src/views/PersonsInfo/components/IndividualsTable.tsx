import DataTable from "@/components/shared/DataTable";
import { Card } from "@/components/ui";
import { columnsIndivdualPerson } from "../constants/tableColumns.constant";
import { usePersonInfo } from "../context/hook/usePersonInfo";

const IndividualsTable = () => {
  const { persons } = usePersonInfo();

  const individuals = persons.filter(
    (individual) => individual.type === "Física"
  );

  return (
    <Card className="w-full">
      <h2 className="mx-4">Personas Físicas</h2>
      <DataTable classNameRow="grid grid-cols-5" data={individuals} columns={columnsIndivdualPerson} />
    </Card>
  );
};

export default IndividualsTable;
