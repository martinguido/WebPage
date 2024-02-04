import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "./IADS.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, login } from "../redux/auth";

const SuccessAlert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ErrorAlert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const style = {
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const drawerWidth = 240;
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#27FB6B",
    },
  },
});

function DrawerAppBar(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [showManagerBoard, setShowManagerBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isMailValid, setIsMailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [hasLogin, setHasLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(0);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  };
  const handleOpenSuccess = () => {
    setOpenSuccess(true);
  };
  const handleOpenError = () => {
    setOpenError(true);
  };
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };
  const submitForm = async (event) => {
    if (isMailValid && isPasswordValid) {
      const userData = {
        email: mail,
        password: password,
      };
      try {
        const loginData = await dispatch(login(userData));
        if (loginData.type === "auth/login/fulfilled") {
          handleOpenSuccess();
          setTimeout(() => {
            setShowModal(false);
          }, 4000);
          setShowAdminBoard(true);
          setHasLogin(true);
        } else {
          handleOpenError();
        }
      } catch {
        console.log("error");
        handleOpenError();
      }
    }
  };

  const blurHandlerMail = (event) => {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (emailRegex.test(event.target.value)) {
      setIsMailValid(true);
    } else {
      setIsMailValid(false);
    }
  };

  const blurHandlerPassword = (event) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    if (passwordRegex.test(event.target.value)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      setShowManagerBoard(currentUser.role === "MANAGER");
      setShowAdminBoard(currentUser.role === "ADMIN");
    } else {
      setShowManagerBoard(false);
      setShowAdminBoard(false);
    }
  }, [currentUser, hasLogin]);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      color="primary"
    >
      <ThemeProvider theme={darkTheme}>
        <img src={logo} style={{ width: "50%" }} alt="Logo de IADS" />
        <Divider />
        <List
          className="responsiveDrawTab"
          style={{
            // height: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <ListItem key={"item"} disablePadding className="responsiveDrawTab">
            <Tab
              label="Home"
              className="linkTabNavBar"
              onClick={() => navigate("/")}
            />
          </ListItem>
          <ListItem key={"item2"} disablePadding className="responsiveDrawTab">
            <Tab
              label="Mision"
              className="linkTabNavBar"
              onClick={() => navigate("/mision")}
            />
          </ListItem>
          <ListItem key={"item20"} disablePadding className="responsiveDrawTab">
            <Tab
              label="Conocenos"
              className="linkTabNavBar"
              onClick={() => navigate("/conocenos")}
            />
          </ListItem>
          <ListItem key={"item3"} disablePadding className="responsiveDrawTab">
            <Tab
              label="Programas"
              className="linkTabNavBar"
              onClick={() => navigate("/programas")}
            />
          </ListItem>
          <ListItem key={"item4"} disablePadding className="responsiveDrawTab">
            <Tab
              label="Aliados"
              className="linkTabNavBar"
              onClick={() => navigate("/aliados")}
            />
          </ListItem>
          <ListItem key={"item5"} disablePadding className="responsiveDrawTab">
            <Tab
              label="Consejos Verdes"
              className="linkTabNavBar"
              onClick={() => navigate("/consejosverdes")}
            />
          </ListItem>
          <ListItem key={"item6"} disablePadding className="responsiveDrawTab">
            <Tab
              label="Donaciones"
              className="linkTabNavBar"
              onClick={() => navigate("/donaciones")}
            />
          </ListItem>
          <ListItem key={"item7"} disablePadding className="responsiveDrawTab">
            <Tab
              label="FAQ"
              className="linkTabNavBar"
              onClick={() => navigate("/faq")}
            />
          </ListItem>
          <ListItem key={"item8"} disablePadding className="responsiveDrawTab">
            <Tab
              label="Contactanos"
              className="linkTabNavBar"
              onClick={() => navigate("/contactanos")}
            />
          </ListItem>
          {(showManagerBoard || showAdminBoard) && (
            <ListItem
              key={"item9"}
              disablePadding
              className="responsiveDrawTab"
            >
              <Tab
                label="Subscriptores"
                className="linkTabNavBar"
                onClick={() => navigate("/Subscriptores")}
              />
            </ListItem>
          )}

          {(showManagerBoard || showAdminBoard) && (
            <ListItem
              key={"item10"}
              disablePadding
              className="responsiveDrawTab"
            >
              <Tab
                label="Consultas"
                className="linkTabNavBar"
                onClick={() => navigate("/Consultas")}
              />
            </ListItem>
          )}

          {(showManagerBoard || showAdminBoard) && (
            <ListItem
              key={"item11"}
              disablePadding
              className="responsiveDrawTab"
            >
              <Tab
                label="Salir"
                className="linkTabNavBar"
                onClick={() => {
                  handleSignOut();
                }}
              />
            </ListItem>
          )}
          {!showManagerBoard && !showAdminBoard && (
            <ListItem
              key={"item12"}
              disablePadding
              className="responsiveDrawTab"
            >
              {/* <Tab
              label="Ingresa"
              className="linkTabNavBar"
              onClick={openModal}
            /> */}

              <Tab
                label="Ingresa"
                className="linkTabNavBar"
                onClick={openModal}
              />
            </ListItem>
          )}
        </List>
        {/* </Tabs> */}
      </ThemeProvider>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBar component="nav" position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <img src={logo} style={{ height: "3rem" }} alt="Logo de IADS" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab
                  label="Home"
                  className="linkTabNavBar"
                  onClick={() => navigate("/")}
                />
                <Tab
                  label="Mision"
                  className="linkTabNavBar"
                  onClick={() => navigate("/mision")}
                />

                <Tab
                  label="Conocenos"
                  className="linkTabNavBar"
                  onClick={() => navigate("/conocenos")}
                />

                <Tab
                  label="Programas"
                  className="linkTabNavBar"
                  onClick={() => navigate("/programas")}
                />
                <Tab
                  label="Aliados"
                  className="linkTabNavBar"
                  onClick={() => navigate("/aliados")}
                />
                <Tab
                  label="Consejos Verdes"
                  className="linkTabNavBar"
                  onClick={() => navigate("/consejosverdes")}
                />
                <Tab
                  label="Donaciones"
                  className="linkTabNavBar"
                  onClick={() => navigate("/donaciones")}
                />
                <Tab
                  label="FAQ"
                  className="linkTabNavBar"
                  onClick={() => navigate("/faq")}
                />
                <Tab
                  label="Contactanos"
                  className="linkTabNavBar"
                  onClick={() => navigate("/contactanos")}
                />
                {(showManagerBoard || showAdminBoard) && (
                  <Tab
                    label="Subscriptores"
                    className="linkTabNavBar"
                    onClick={() => navigate("/subscriptores")}
                  />
                )}
                {(showManagerBoard || showAdminBoard) && (
                  <Tab
                    label="Consultas"
                    className="linkTabNavBar"
                    onClick={() => navigate("/consultas")}
                  />
                )}
                {(showManagerBoard || showAdminBoard) && (
                  <Tab
                    label="Salir"
                    className="linkTabNavBar"
                    onClick={() => {
                      handleSignOut();
                    }}
                  />
                )}
                {!showManagerBoard && !showAdminBoard && (
                  <Tab
                    label="Ingresa"
                    className="linkTabNavBar"
                    onClick={openModal}
                  />
                )}
              </Tabs>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <nav>
        <ThemeProvider theme={darkTheme}>
          <Drawer
            container={container}
            color="primary"
            // enableColorOnDark
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </ThemeProvider>
      </nav>
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSuccess}
      >
        <SuccessAlert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          Ingresaste correctamente!
        </SuccessAlert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <ErrorAlert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          Hubo un error! Reintenta en unos minutos!
        </ErrorAlert>
      </Snackbar>
      {showModal && (
        <Modal
          open={showModal}
          onClose={closeModal}
          className="modalIngresa"
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ display: "flex" }}
        >
          <Box sx={style} className="boxIngresa">
            <div className="navBarModal">
              <h1 className="navBarTitle">Ingresar a IADS</h1>
              <TextField
                required
                id="filled-required"
                label="Email"
                placeholder="Ingrese su email..."
                variant="filled"
                className="ingresaInput"
                onChange={(event) => setMail(event.target.value)}
                onBlur={blurHandlerMail}
              />
              <span className="inputValidation" style={{ marginTop: "1.5%" }}>
                {isMailValid ? " " : "El mail no es valido"}
              </span>
              <TextField
                required
                className="ingresaInput"
                id="filled-password-input"
                label="Contraseña"
                type="password"
                autoComplete="current-password"
                placeholder="Ingrese su contraseña..."
                variant="filled"
                onChange={(event) => setPassword(event.target.value)}
                onBlur={blurHandlerPassword}
              />
              <span className="inputValidation" style={{ marginTop: "1.5%" }}>
                {isPasswordValid
                  ? " "
                  : "La contraseña necesita por lo menos: 8 caracteres de longitud, 1 letra y 1 numero"}
              </span>
              <Button
                variant="contained"
                onClick={submitForm}
                className="buttonIngresa"
              // style={{ marginTop: "2.5%", height: "6vh", width: "15vw" }}
              >
                Ingresar
              </Button>
            </div>
          </Box>
        </Modal>
      )}
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
