import FormWrapper from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export default function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        autoFocus
        required
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        required
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        required
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label htmlFor="zip">Zip</label>
      <input
        type="text"
        id="zip"
        required
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
}
