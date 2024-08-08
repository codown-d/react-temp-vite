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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile/*" element={<Profile />} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
