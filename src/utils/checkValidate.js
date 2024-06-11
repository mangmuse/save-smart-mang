export function checkValidate(formState) {
  const { date, item, amount, description } = formState;
  const isValidForm = date && item && amount > 0 && description;
  return isValidForm ? true : false;
}
