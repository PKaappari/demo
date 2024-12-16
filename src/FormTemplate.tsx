import { ChangeEvent } from "react";
import { useFormContext } from "./FormProvider";

const FormTemplate = () => {
  const { formData, onChange } = useFormContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { id, value } = event.target;
    onChange(id, value);
  };

  const items = new Array(5).fill(0).map((_, i) => {
    return (
      <input
        key={i}
        id={`random[${i}].username`}
        onChange={handleChange}
        value={formData?.random?.[i]?.username ?? ""}
      />
    );
  });

  return (
    <form>
      {items} {JSON.stringify(formData)}
    </form>
  );
};

export default FormTemplate;
