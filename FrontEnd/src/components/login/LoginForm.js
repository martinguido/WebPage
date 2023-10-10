import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import signinvalidation from "./LoginValidation";
import { login, register } from "../../redux/auth";
import { clearMessage } from "../../redux/message";
const defaultTheme = createTheme();

const LoginForm = (setLogin) => {
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
    const validationErrors = signinvalidation(signinvalues);
    setSignInErrors(validationErrors);
    setIsSignInValid(Object.keys(validationErrors).length === 0);
  }, [signinvalues]);

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

  return (
    <ThemeProvider theme={defaultTheme}>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default LoginForm;
