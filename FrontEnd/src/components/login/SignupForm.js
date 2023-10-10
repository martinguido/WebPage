import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import signupvalidation from "./SignupValidation";
import { register } from "../../redux/auth";
import { clearMessage } from "../../redux/message";

const defaultTheme = createTheme();

const SignUpForm = (setLogin) => {
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
    dispatch(clearMessage());
  }, [dispatch]);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  useEffect(() => {
    const validationErrors = signupvalidation(signupvalues);
    setSignUpErrors(validationErrors);
    setIsSignUpValid(Object.keys(validationErrors).length === 0);
  }, [signupvalues]);

  const handleRegister = (userData) => {
    const username = userData.username;
    const email = userData.email;
    const password = userData.password;

    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        navigate("/homepage");
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

  const handleLoginClick = () => {
    setLogin(true);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-name"
              name="userName"
              required
              fullWidth
              id="userName"
              label="Username"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2" onClick={handleLoginClick}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default SignUpForm;
