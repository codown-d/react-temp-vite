import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ThemeProvider,
  createTheme,
  Box,
  Container,
  IconButton,
  Paper,
  Drawer,
} from "@mui/material";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import Profile from "./screens/profile";
import theme from "./screens/components/theme";
import React from "react";
import PageMenuList from "./screens/components/PageMenuList";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
function App() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position={"fixed"}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My App
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/profile">
              Profile
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}></IconButton>
          </Toolbar>
          <PageMenuList />
        </Drawer>
        <Container
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile/*" element={<Profile />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
