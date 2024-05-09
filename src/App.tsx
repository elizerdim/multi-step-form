import { FormEvent, useState } from "react";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import UserForm from "./UserForm";
import { useMultistepForm } from "./useMultistepForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

export default function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const { currentStepIndex, step, steps, isFirstStep, isLastStep, next, back } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function updateFields(fields: Partial<FormData>) {
    setData((prevData) => {
      return { ...prevData, ...fields };
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) {
      next();
      return;
    }
    alert("Successful Account Creation");
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem auto",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}
