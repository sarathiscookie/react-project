import React from 'react';

import "./Dashboard.css";

import HeaderList from "./HeaderList";

import SideBarMenu from "./SideBarMenu";

import Cards from "./cards/Cards";

import NewProduct from "./products/NewProduct";

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

            <NewProduct />
            <div></div>

            <Cards name = "Apple" description = "Some quick example text to build on the card title and make up the bulk of the card's content." price = "1250" quantity = "25"/>
            <Cards name = "Samsung" description = "Some quick example text to build on the card title and make up the bulk of the card's content." price = '1050' quantity = "30"/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
