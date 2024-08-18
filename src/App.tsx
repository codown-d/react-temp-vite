import "./App.css";
import {
  ThemeProvider,
} from "@mui/material";
import { HashRouter as Router,  Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Permission from "./screens/no-permission";
import theme from "./screens/components/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            
            <Route path="/error" element={<Permission />} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
