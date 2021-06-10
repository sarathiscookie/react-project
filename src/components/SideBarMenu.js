import React from 'react';

function SideBarMenu() {
  return (
    <div>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="test">
                <span data-feather="home"></span>
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="test">
                <span data-feather="file"></span>
                Orders
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default SideBarMenu;