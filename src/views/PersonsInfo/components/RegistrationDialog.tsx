import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { usePersonInfo } from "../context/hook/usePersonInfo";
import RegistrationForm from "./RegistrationForm";
import SuccessView from "./SuccessView";

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

export default RegistrationDialog;
