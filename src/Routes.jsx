import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicesPage from "./pages/Servicespg";
import AboutUsPage from "./pages/AboutUs";
import HomePage from "./pages/HomePage.jsx";



export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
