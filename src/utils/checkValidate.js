export function checkValidate(formState) {
  const { date, item, amount, description } = formState;
  const isValidForm = date && item && amount > 0 && description;
  return isValidForm ? true : false;
}

export function validateNickname(nickname) {
  let isValid = true;
  if (!nickname || nickname.trim().length < 2) {
    isValid = false;
  }
  return isValid;
}
