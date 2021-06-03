import "./Dashboard.css";

import HeaderList from "./HeaderList";

import SideBarMenu from "./SideBarMenu";

import CustomerList from "./CustomerList";

import Cards from "./Cards";

function Dashboard() {
  return (
    <div>
      <HeaderList />

      <div class="container-fluid">
        <div class="row">
          <SideBarMenu />

          <Cards>
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <CustomerList />
          </main>
          </Cards>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;
