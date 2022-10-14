import React from "react";
import Layout from "../../components/layout/layout";
import AdminNav from "../../components/nav/AdminNav";

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <p className="mb-3">Panel Admina</p>
        <AdminNav />
      </div>
    </Layout>
  );
};

export default AdminDashboard;
