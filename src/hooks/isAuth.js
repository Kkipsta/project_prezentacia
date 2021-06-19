export const checkIfUserExists = (email, password) => {
  let condition;
  if (email && email.length > 0 && password && password.length > 0) {
    condition = true;
  } else {
    condition = false;
  }

  return condition;
};
