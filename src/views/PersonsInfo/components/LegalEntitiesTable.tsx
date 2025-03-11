import DataTable from "@/components/shared/DataTable";
import { Card } from "@/components/ui";
import { columnsLegalEntity } from "../constants/tableColumns.constant";
import { usePersonInfo } from "../context/hook/usePersonInfo";

const LegalEntitiesTable = () => {
  const { persons } = usePersonInfo();

  const legalEntities = persons.filter(
    (individual) => individual.type === "Moral"
  );

  return (
    <Card className="w-full">
      <h2 className="mx-4">Personas Morales</h2>
      <DataTable data={legalEntities} columns={columnsLegalEntity} />
    </Card>
  );
};

export default LegalEntitiesTable;
