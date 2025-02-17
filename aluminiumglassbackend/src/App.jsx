import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/login";
import MainLayout from "./components/layouts/MainLayout";
import Overview from "./components/Device Management/Overview";
import AllPhonesMainArea from "./components/Device Management/AllPhonesMainArea";
import OverviewMainArea from "./components/Device Management/OverviewMainArea";
import PaymentsMainArea from "./components/Device Management/paymentsMainArea";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route index element={<Login />} />

        {/* Main Layout with Nested Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Overview />} />
          <Route path="/overview" element={<OverviewMainArea />} />
          <Route path="/all-phones" element={<AllPhonesMainArea />} />
          <Route path="/payments" element={<PaymentsMainArea />} />
        </Route>
      </Routes>
    </Router>
  );
}
