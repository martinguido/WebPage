import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import logo from "../header/IADS.png";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { logout, login } from "../redux/auth";

const SuccessAlert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ErrorAlert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const drawerWidth = 240;
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
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

const NavBar = (props) => {
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
    const { window } = props;
    const [showModal, setShowModal] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleSignOut = () => {
        dispatch(logout());
        navigate("/");
    };
    const container =
        window !== undefined ? () => window().document.body : undefined;
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ my: 2 }}>
                <div className="divNavBar">
                    <img src={logo} className="logoNavBar" alt="Logo de IADS" />
                    {/* <h1 className="h1NavBar">I A D S</h1> */}
                </div>
            </Typography>
            <Divider />
            <List>
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
                        label="Testimonios"
                        className="linkTabNavBar"
                        onClick={() => navigate("/testimonios")}
                    />
                    <Tab
                        label="Aliados"
                        className="linkTabNavBar"
                        onClick={() => navigate("/aliados")}
                    />
                    {/* <Tab
                        label="Voluntarios"
                        className="linkTabNavBar"
                        onClick={() => navigate("/voluntarios")}
                    /> */}
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
                            onClick={() => navigate("/Subscriptores")}
                        />
                    )}
                    {(showManagerBoard || showAdminBoard) && (
                        <Tab
                            label="Consultas"
                            className="linkTabNavBar"
                            onClick={() => navigate("/Consulta")}
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
                    <Tab label="Ingresa" className="linkTabNavBar" onClick={openModal} />
                </Tabs>
            </List>
        </Box>
    );

    const handleOpenSuccess = () => {
        setOpenSuccess(true);
    };
    const handleCloseSuccess = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSuccess(false);
    };
    const handleOpenError = () => {
        setOpenError(true);
    };
    const handleCloseError = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenError(false);
    };
    const submitForm = async (event) => {
        // event.preventDefault();
        if (isMailValid && isPasswordValid) {
            const userData = {
                email: mail,
                password: password,
            };
            try {
                const loginData = await dispatch(login(userData));
                console.log(loginData);
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
        console.log("HAS LOGIN:", hasLogin);
        if (currentUser) {
            setShowManagerBoard(currentUser.role === "MANAGER");
            setShowAdminBoard(currentUser.role === "ADMIN");
        } else {
            setShowManagerBoard(false);
            setShowAdminBoard(false);
        }
    }, [currentUser, hasLogin]);
    return (
        <Box sx={{ display: "flex" }}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <AppBar component="nav" position="sticky" color="primary">
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
                            variant="h1"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                        >
                            <div className="divNavBar">
                                <img src={logo} className="logoNavBar" alt="Logo de IADS" />
                                {/* <h1 className="h1NavBar">I A D S</h1> */}
                            </div>
                        </Typography>
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
                                label="Testimonios"
                                className="linkTabNavBar"
                                onClick={() => navigate("/testimonios")}
                            />
                            <Tab
                                label="Aliados"
                                className="linkTabNavBar"
                                onClick={() => navigate("/aliados")}
                            />
                            {/* <Tab
                                label="Voluntarios"
                                className="linkTabNavBar"
                                onClick={() => navigate("/voluntarios")}
                            /> */}
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
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{ keepMounted: true }}
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
                </Box>
            </ThemeProvider>
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
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{ display: "flex" }}
                >
                    <Box sx={style} style={{ width: "50vw", height: "55vh" }}>
                        <div className="navBarModal" >
                            <h1 className="navBarTitle">
                                Ingresar a IADS
                            </h1>
                            <TextField
                                required
                                id="filled-required"
                                label="Email"
                                placeholder="Ingrese su email..."
                                variant="filled"
                                style={{ width: "25vw" }}
                                onChange={(event) => setMail(event.target.value)}
                                onBlur={blurHandlerMail}
                            />
                            <span className="inputValidation" style={{ marginTop: "1.5%" }}>
                                {isMailValid ? " " : "El mail no es valido"}
                            </span>
                            <TextField
                                required
                                id="filled-password-input"
                                label="Contraseña"
                                type="password"
                                autoComplete="current-password"
                                style={{ width: "25vw" }}
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
                                style={{ marginTop: "2.5%", height: "6vh", width: "15vw" }}
                            >
                                Ingresar
                            </Button>
                        </div>
                    </Box>
                </Modal>
            )
            }
        </Box >
    );
};

export default NavBar;
