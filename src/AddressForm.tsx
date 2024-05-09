import FormWrapper from "./FormWrapper";

export default function AddressForm() {
  return (
    <FormWrapper title="Address">
      <label htmlFor="street">Street</label>
      <input type="text" id="street" autoFocus required />
      <label htmlFor="city">City</label>
      <input type="text" id="city" required />
      <label htmlFor="zip">Zip</label>
      <input type="text" id="zip" required />
    </FormWrapper>
  );
}
