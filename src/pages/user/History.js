import React from "react";
import UserNav from "../../components/nav/UserNav";
import Layout from "../../components/layout/layout";

const History = () => (
  <Layout>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col">user history page</div>
      </div>
    </div>
  </Layout>
);

export default History;
