import { createContext, PropsWithChildren, useContext, useState } from "react";
import { cloneDeep, set } from "lodash-es";

const formContext = createContext<{
  onChange: (key: string, value: string) => void;
  formData: any;
} | null>(null);

const Provider = formContext.Provider;

type FormContextProviderProps = {} & PropsWithChildren;

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [formData, setFormData] = useState<any>({
    something: "random",
    random: [],
  });

  const onChange = (key: string, value: string) => {
    if (!formData) {
      setFormData(set({}, key, value));
    }

    const clone = cloneDeep(formData);
    set(clone, key, value);
    setFormData(clone);
  };

  return <Provider value={{ onChange, formData }}>{children}</Provider>;
};

export const useFormContext = () => {
  const ctx = useContext(formContext);

  if (ctx === null) {
    throw Error("Context must be used inside provider");
  }

  return ctx;
};
