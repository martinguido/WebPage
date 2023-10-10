function SignInValidation(values) {
  let error = {};
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    error.email = "";
  } else if (!emailRegex.test(values.email)) {
    error.email = "Invalid email address";
  }

  if (values.password === "") {
    error.password = "";
  } else if (!passwordRegex.test(values.password)) {
    error.password =
      "Password must contain at least 8 characters, 1 uppercase and 1 number";
  }

  return error;
}

export default SignInValidation;
