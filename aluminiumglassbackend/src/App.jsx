import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/login";
//import MainLayout from "./components/layouts/MainLayout";
//import Overview from "./components/Device Management/Overview";
//import AllPhonesMainArea from "./components/Device Management/AllPhonesMainArea";
//import OverviewMainArea from "./components/Device Management/OverviewMainArea";
//import PaymentsMainArea from "./components/Device Management/paymentsMainArea";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route index element={<Login />} />

       
      </Routes>
    </Router>
  );
}
