import React from "react";
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import logo from "../header/IADS.png";

const drawerWidth = 240;
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#27FB6B',
        },
    },
});

const NavBar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const container = window !== undefined ? () => window().document.body : undefined;
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ my: 2 }}>
                <div className="divNavBar">
                    <img src={logo} className="logoNavBar" alt="Logo de IADS" />
                    <h1 className="h1NavBar">I A D S</h1>
                </div>
            </Typography>
            <Divider />
            <List>
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" textColor="secondary" indicatorColor="secondary">
                    <Tab label="Home" className="linkTabNavBar" onClick={() => navigate('/')} />
                    <Tab label="Mision" className="linkTabNavBar" onClick={() => navigate('/mision')} />
                    <Tab label="Testimonios" className="linkTabNavBar" onClick={() => navigate('/testimonios')} />
                    <Tab label="Aliados" className="linkTabNavBar" onClick={() => navigate('/aliados')} />
                    <Tab label="Voluntarios" className="linkTabNavBar" onClick={() => navigate('/voluntarios')} />
                    <Tab label="Consejos Verdes" className="linkTabNavBar" onClick={() => navigate('/consejosverdes')} />
                    <Tab label="Donaciones" className="linkTabNavBar" onClick={() => navigate('/donaciones')} />
                    <Tab label="FAQ" className="linkTabNavBar" onClick={() => navigate('/faq')} />
                    <Tab label="Contactanos" className="linkTabNavBar" onClick={() => navigate('/contactanos')} />
                </Tabs>

            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <AppBar component="nav" position="sticky" color="primary">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h1" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                            <div className="divNavBar">
                                <img src={logo} className="logoNavBar" alt="Logo de IADS" />
                                <h1 className="h1NavBar">I A D S</h1>
                            </div>
                        </Typography>
                        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" textColor="secondary" indicatorColor="secondary">
                            <Tab label="Home" className="linkTabNavBar" onClick={() => navigate('/')} />
                            <Tab label="Mision" className="linkTabNavBar" onClick={() => navigate('/mision')} />
                            <Tab label="Testimonios" className="linkTabNavBar" onClick={() => navigate('/testimonios')} />
                            <Tab label="Aliados" className="linkTabNavBar" onClick={() => navigate('/aliados')} />
                            <Tab label="Voluntarios" className="linkTabNavBar" onClick={() => navigate('/voluntarios')} />
                            <Tab label="Consejos Verdes" className="linkTabNavBar" onClick={() => navigate('/consejosverdes')} />
                            <Tab label="Donaciones" className="linkTabNavBar" onClick={() => navigate('/donaciones')} />
                            <Tab label="FAQ" className="linkTabNavBar" onClick={() => navigate('/faq')} />
                            <Tab label="Contactanos" className="linkTabNavBar" onClick={() => navigate('/contactanos')} />
                        </Tabs>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }} sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, }, }}>
                        {drawer}
                    </Drawer>
                </Box>
            </ThemeProvider>
        </Box >
    );
};

export default NavBar;