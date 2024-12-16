import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FormContextProvider } from "./FormProvider";
import FormTemplate from "./FormTemplate";

function App() {
  return (
    <FormContextProvider>
      <FormTemplate></FormTemplate>
    </FormContextProvider>
  );
}

export default App;
