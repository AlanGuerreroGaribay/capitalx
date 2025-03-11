import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from "@/components/ui";
import { usePersonInfo } from "../context/hook/usePersonInfo";
import {
  individualPersonFields,
  legalEntitiesFields,
} from "../constants/formfields.constant";
import { Person } from "@/@types/person.type";
import { useEffect } from "react";

const RegistrationForm = () => {
  const { success, personregisterForm, handleRegisterPerson } = usePersonInfo();

  const rfcObserver = personregisterForm.watch("rfc", "");

  const isIndividual = rfcObserver.length === 13;
  const isLegalEntity = rfcObserver.length === 12;

  const onSubmit = (person: Person) => {
    handleRegisterPerson(person, isLegalEntity);
  };

  useEffect(() => {
    if (rfcObserver.length === 12) {
      personregisterForm.setValue("type", "Moral");
    } else if (rfcObserver.length === 13) {
      personregisterForm.setValue("type", "Física");
    }
  }, [rfcObserver, personregisterForm]);

  return (
    <>
      {!success && (
        <Form {...personregisterForm}>
          <form
            className="flex flex-col gap-6"
            onSubmit={personregisterForm.handleSubmit(onSubmit)}
          >
            <FormField
              name="rfc"
              control={personregisterForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>RFC:</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  {personregisterForm.formState.errors.rfc && (
                    <FormDescription className="text-red-500">
                      {personregisterForm.formState.errors.rfc.message}
                    </FormDescription>
                  )}
                </FormItem>
              )}
            />
            <FormField
              name="type"
              control={personregisterForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Regímen fiscal:</FormLabel>
                  <FormControl>
                    <Input disabled {...field} />
                  </FormControl>
                  {personregisterForm.formState.errors.rfc && (
                    <FormDescription className="text-red-500">
                      {personregisterForm.formState.errors.rfc.message}
                    </FormDescription>
                  )}
                </FormItem>
              )}
            />
            {isIndividual &&
              individualPersonFields.map((individual) => (
                <FormField
                  key={individual.label}
                  name={individual.value}
                  control={personregisterForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{individual.label}</FormLabel>
                      <FormControl>
                        <Input type={individual.type} {...field} />
                      </FormControl>
                      {personregisterForm.formState.errors[
                        individual.value
                      ] && (
                        <FormDescription className="text-red-500">
                          {
                            personregisterForm?.formState?.errors[
                              individual?.value
                            ]?.message
                          }
                        </FormDescription>
                      )}
                    </FormItem>
                  )}
                />
              ))}
            {isLegalEntity &&
              legalEntitiesFields.map((legalEntity) => (
                <FormField
                  key={legalEntity.label}
                  name={legalEntity.value}
                  control={personregisterForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{legalEntity.label}</FormLabel>
                      <FormControl>
                        <Input type={legalEntity.type} {...field} />
                      </FormControl>
                      {personregisterForm.formState.errors[
                        legalEntity.value
                      ] && (
                        <FormDescription className="text-red-500">
                          {
                            personregisterForm?.formState?.errors[
                              legalEntity?.value
                            ]?.message
                          }
                        </FormDescription>
                      )}
                    </FormItem>
                  )}
                />
              ))}
            <Button type="submit">Enviar</Button>
          </form>
        </Form>
      )}
    </>
  );
};

export default RegistrationForm;
