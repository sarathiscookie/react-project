import React from 'react';

import "./Dashboard.css";

import HeaderList from "./HeaderList";

import SideBarMenu from "./SideBarMenu";

import Product from "./products/Product";

function Dashboard() {
  return (
    <div>
      <HeaderList />

      <div className="container-fluid">
        <div className="row">
          <SideBarMenu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>

            <Product />
            
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
