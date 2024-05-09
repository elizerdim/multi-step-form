import FormWrapper from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export default function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        autoFocus
        required
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        required
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        min={1}
        id="age"
        required
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
}
