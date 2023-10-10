import React from "react";

const LogIn = () => {
  const [isSignInValid, setIsSignInValid] = useState(false);
  const [signinvalues, setSignInValues] = useState({
    email: "",
    password: "",
  });
  const [signinerrors, setSignInErrors] = useState({});
  const [SignInPopUp, setSignInPopUp] = useState(false);

  const [isSignUpValid, setIsSignUpValid] = useState(false);
  const [signupvalues, setSignUpValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signuperrors, setSignUpErrors] = useState({});
  const [SignUpPopUp, setSignUpPopUp] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const validationErrors = signinvalidation(signinvalues);
    setSignInErrors(validationErrors);
    setIsSignInValid(Object.keys(validationErrors).length === 0);
  }, [signinvalues]);

  useEffect(() => {
    const validationErrors = signupvalidation(signupvalues);
    setSignUpErrors(validationErrors);
    setIsSignUpValid(Object.keys(validationErrors).length === 0);
  }, [signupvalues]);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const handleLogin = (userData) => {
    const email = userData.email;
    const password = userData.password;

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/Home");
        window.location.reload();
      })
      .catch(() => {
        setSignInPopUp(true);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/Home" />;
  }

  const handleSignInInput = (e) => {
    setSignInErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
    setSignInValues({ ...signinvalues, [e.target.name]: e.target.value });
  };

  function handleSignInValidation() {
    const validationErrors = signinvalidation(signinvalues);
    setSignInErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSignInValid(true);
    } else {
      setIsSignInValid(false);
    }
  }

  const handleRegister = (userData) => {
    const username = userData.username;
    const email = userData.email;
    const password = userData.password;

    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        navigate("/Home");
        window.location.reload();
      })
      .catch(() => {
        setSignUpPopUp(true);
      });
  };

  const handleSignUpInput = (e) => {
    setSignUpErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
    setSignUpValues({ ...signupvalues, [e.target.name]: e.target.value });
  };

  function handleSignUpValidation() {
    const validationErrors = signupvalidation(signupvalues);
    setSignUpErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSignUpValid(true);
    } else {
      setIsSignUpValid(false);
    }
  }

  return (
    <BackgroundBox clicked={click}>
      <Box1 clicked={click}>
        <Form className="signin" show={!click}>
          <Title>Sign In</Title>
          <Input
            type="email"
            name="email"
            id="emailSiId"
            placeholder="Email"
            onChange={handleSignInInput}
          />
          {signinerrors.email && (
            <ErrorMessage>{signinerrors.email}</ErrorMessage>
          )}
          <Input
            type="password"
            name="password"
            id="passwordSiId"
            placeholder="Password"
            onChange={handleSignInInput}
          />
          {signinerrors.password && (
            <ErrorMessage>{signinerrors.password}</ErrorMessage>
          )}
          <ForgotLink href="#">Forgot your Password?</ForgotLink>

          <NavLink
            onClick={() => {
              handleSignInValidation();
              if (isSignInValid) {
                const userData = {
                  email: signinvalues.email,
                  password: signinvalues.password,
                };
                handleLogin(userData);
              }
            }}
            style={{ textDecoration: "none" }}
            disabled={Object.keys(signinerrors).length > 0 || !isSignInValid}
          >
            Sign In
          </NavLink>
        </Form>

        <Form className="signup" show={click}>
          <Title>Sign Up</Title>
          <Input
            type="text"
            name="username"
            id="usernameId"
            placeholder="Username"
            onChange={handleSignUpInput}
          />
          {signuperrors.username && (
            <ErrorMessage>{signuperrors.username}</ErrorMessage>
          )}

          <Input
            type="email"
            name="email"
            id="emailSuId"
            placeholder="Email"
            onChange={handleSignUpInput}
          />
          {signuperrors.email && (
            <ErrorMessage>{signuperrors.email}</ErrorMessage>
          )}

          <Input
            type="password"
            name="password"
            id="passwordSuId"
            placeholder="Password"
            onChange={handleSignUpInput}
          />
          {signuperrors.password && (
            <ErrorMessage>{signuperrors.password}</ErrorMessage>
          )}

          <NavLink
            onClick={() => {
              handleSignUpValidation();
              if (isSignUpValid) {
                const userData = {
                  username: signupvalues.username,
                  email: signupvalues.email,
                  password: signupvalues.password,
                };
                handleRegister(userData);
              }
            }}
            style={{ textDecoration: "none" }}
            disabled={Object.keys(signuperrors).length > 0 || !isSignUpValid}
          >
            Sign Up
          </NavLink>
        </Form>
      </Box1>

      <Box2 clicked={click}>
        <Text className="signintext" show={!click}>
          <h1>Welcome Back</h1>
          Don't have an account yet?
          <br />
          <ButtonAnimate clicked={click} onClick={handleClick}></ButtonAnimate>
        </Text>
        <Text className="signuptext" show={click}>
          <h1>Hi There</h1>
          Already have an account?
          <br />
          <ButtonAnimate clicked={click} onClick={handleClick}></ButtonAnimate>
        </Text>
      </Box2>

      {SignInPopUp && <SInPopUp setSignInPopUp={setSignInPopUp} />}
      {SignUpPopUp && <SUpPopUp setSignUpPopUp={setSignUpPopUp} />}

      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </BackgroundBox>
  );
};

export default LogIn;
