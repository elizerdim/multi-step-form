import FormWrapper from "./FormWrapper";

export default function UserForm() {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" autoFocus required />
      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" required />
      <label htmlFor="age">Age</label>
      <input type="number" min={1} id="age" required />
    </FormWrapper>
  );
}
