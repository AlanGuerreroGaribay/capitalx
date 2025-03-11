import { PersonsInfoProvider } from "./context/PersonsInfoContext";
import LegalEntitiesTable from "./components/LegalEntitiesTable";
import IndividualsTable from "./components/IndividualsTable";
import RegistrationDialog from "./components/RegistrationDialog";

const PersonsInfo = () => {
  return (
    <PersonsInfoProvider>
      <h1>Registro de personas fiscales</h1>
      <LegalEntitiesTable />
      <IndividualsTable />
      <RegistrationDialog />
    </PersonsInfoProvider>
  );
};

export default PersonsInfo;
