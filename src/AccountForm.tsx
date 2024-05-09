import FormWrapper from "./FormWrapper"

export default function AccountForm() {
  return (
    <FormWrapper title="Account Creation">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" autoFocus required/>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" required/>
    </FormWrapper>
  )
}