import { Button } from "@/components/ui";
import { usePersonInfo } from "../context/hook/usePersonInfo";
import { FaCheckCircle } from "react-icons/fa";

const SuccessView = () => {
  const { success, handleSuccessRegistration } = usePersonInfo();

  return (
    <>
      {success && (
        <div className="w-full flex flex-col justify-center items-center text-center transition-transform duration-300 ease-in-out transform scale-95 hover:scale-100">
          <h2 className="my-6">Registro hecho con éxito!</h2>
          <FaCheckCircle size={40} />
          <p className="my-6">
            Registro realizado! Verifica que se encuentre en la tabla
            correspondiente
          </p>
          <Button onClick={handleSuccessRegistration}>Continuar</Button>
        </div>
      )}
    </>
  );
};

export default SuccessView;
