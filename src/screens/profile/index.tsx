import { Container, Typography, Box, Button } from "@mui/material";
import { Link, Routes, Route } from "react-router-dom";
import ProfileOverview from "./ProfileOverview";
import ProfileSettings from "./ProfileSettings";

const Profile = () => (
  <Container>
    <Typography variant="h3">Profile Page</Typography>
    <Box sx={{ marginBottom: 2 }}>
      <Button
        component={Link}
        to="overview"
        variant="contained"
        sx={{ marginRight: 1 }}
      >
        Overview
      </Button>
      <Button component={Link} to="settings" variant="contained">
        Settings
      </Button>
    </Box>
    <Routes>
      <Route path="overview" element={<ProfileOverview />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Routes>
  </Container>
);
export default Profile;
