import "./App.css";
import Login from "./components/RegisterationPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IdiaFrom from "./page/Service Section/IdiaFrom";
import ServicePage from "./page/Service Section/ServicePage";
import RequirementForm from "./page/Service Section/RequirementForm";
import FullForm from "./page/Service Section/FullForm";
import Home from "./page/Home Page/Home";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { AdminProvider } from "./Context/AdminContex";
import AdminRoute from "./Routes/AdminRoute";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Login />} />
          <Route path="/idiaSubmit" element={<IdiaFrom />} />
          <Route
            path="/services"
            element={
              <ProtectedRoute to="admin">
                <ServicePage />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/services" element={<ServicePage />} /> */}
          <Route path="/requirementForm" element={<RequirementForm />} />
          <Route path="/fullform" element={<FullForm />} />

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <AdminProvider>
                <AdminRoute />
              </AdminProvider>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
