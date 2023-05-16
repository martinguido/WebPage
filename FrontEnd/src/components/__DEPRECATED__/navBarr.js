import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import logo from "../header/IADS.png";

const drawerWidth = 240;
const navItems = ['Home', 'Conocenos', 'Actividades', 'Donaciones', 'Contactanos'];
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            // main: '#27FB6B',
            main: '#000000',
        },
        secondary: {
            main: '#27FB6B',
        },
    },
});
function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                // event.preventDefault();
            }}
            {...props}
        />
    );
}

const NavBar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);
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
                {/* <img
                src={logo}
                id="logoNavBar"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            /> */}
                {/* <h1 className="brandH1">I A D S</h1> */}
                MUIADS
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
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
                        <Typography variant="h1" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} >
                            <div className="divNavBar">
                                <img src={logo} className="logoNavBar" alt="Logo de IADS" />
                                <h1 className="h1NavBar">I A D S</h1>
                            </div>
                        </Typography>
                        {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}> */}

                        <Box>
                            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" textColor="secondary" indicatorColor="secondary">
                                <LinkTab label="Home" href="/" className="linkTabNavBar" />
                                <LinkTab label="Mision" href="/Mision" className="linkTabNavBar" />
                                <LinkTab label="Testimonios" href="/Testimonios" className="linkTabNavBar" />
                                <LinkTab label="Aliados" href="/Aliados" className="linkTabNavBar" />
                                <LinkTab label="Voluntarios" href="/Voluntarios" className="linkTabNavBar" />
                                <LinkTab label="Consejos Verdes" href="/ConsejosVerdes" className="linkTabNavBar" />
                                <LinkTab label="Donaciones" href="/Donaciones" className="linkTabNavBar" />
                                <LinkTab label="FAQ" href="/FAQ" className="linkTabNavBar" />
                                <LinkTab label="Contactanos" href="/Contactanos" className="linkTabNavBar" />
                            </Tabs>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true, }} sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, }}>
                        {drawer}
                    </Drawer>
                </Box>
            </ThemeProvider>
        </Box>
    );
};

export default NavBar;