import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import IdeaForms from "../page/Admin page/IdeaForms";
import RequirementForm from "../page/Admin page/RequirementForm";
import FullForms from "../page/Admin page/FullForms";
import Users from "../page/Admin page/Users";
function AdminRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<IdeaForms />} />
        <Route path="/requirementForms" element={<RequirementForm />} />
        <Route path="/FullForms" element={<FullForms />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default AdminRoute;
