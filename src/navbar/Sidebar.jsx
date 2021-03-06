import {NavLink} from "react-router-dom";
import {useState} from "react";
import "./style/Sidebar.css"
import { FaBeer } from "react-icons/fa";

const Sidebar = ({sideNavOpen}) => {
    const [customersOpen, setCustomersOpen] = useState(false);
    const [reportsOpen, setReportsOpen] = useState(false);
    const [flashOpen, setFlashOpen] = useState(false);

    const profileRoutes = [
      {
        name: "Dashboard",
        route: "/",
        icon: <FaBeer />,
      },
      {
        name: "Customers",
        route: null,
        icon: <FaBeer />,
        dropdown: [
          {
            name: "Customers",
            route: "/",
            icon: <FaBeer />,
          },
          {
            name: "Orders",
            route: "/",
            icon: <FaBeer />,
          },
        ],
        dropdownHook: [customersOpen, setCustomersOpen],
      },
      {
        name: "History",
        route: "/",
        icon: <FaBeer />,
      },
      {
        name: "Reports",
        route: null,
        icon: <FaBeer />,
        dropdown: [
          {
            name: "Sale",
            route: "/",
            icon: <FaBeer />,
          },
          {
            name: "Seller Sale",
            route: "/",
            icon: <FaBeer />,
          },
          {
            name: "Stock",
            route: "/",
            icon: <FaBeer />,
          },
          {
            name: "Wishlist",
            route: "/",
            icon: <FaBeer />,
          },
          {
            name: "Shipment",
            route: "/",
            icon: <FaBeer />,
          },
        ],
        dropdownHook: [reportsOpen, setReportsOpen],
      },

      {
        name: "Deal",
        route: null,
        icon: <FaBeer />,
        dropdown: [
          {
            name: "Flash Deal",
            route: "/",
            icon: <FaBeer />,
          },
          {
            name: "Promo Deal",
            route: "/",
            icon: <FaBeer />,
          },
        ],
        dropdownHook: [flashOpen, setFlashOpen],
      },
      {
        name: "conversations",
        route: "/",
        icon: <FaBeer />,
      },
      {
        name: "Manage",
        route: "/",
        icon: <FaBeer />,
      },
      { name: "Log Out", route: null, icon: <FaBeer /> },
    ];


    return (
      <div
        className={`
            Sidebar transform transition-all duration-300
            ${sideNavOpen ? "translateForSidebar" : "translateForSidebarNeg"}
            `}
      >
        <div className="SidebarWrapper">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "50px 0 0 0",
            }}
          >
            <img
              className=""
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <h3>Mr. Sakata Gintoki</h3>
          </div>
          <ul className="ulListForRoutes">
            {profileRoutes.map(
              ({ name, route, icon, dropdown, dropdownHook }, index) => (
                <li key={`navlink-${index}`} style={{ padding: "8px 0" }}>
                  {/* Only for links items not dropdown list */}
                  {route && (
                    <NavLink
                      className="NavLinksOfSidebar"
                      activeClassName="text-yellowGB"
                      to={route}
                    >
                      <span className="mx-2 ">{icon}</span>
                      <span>{name}</span>
                    </NavLink>
                  )}
                  {/* Only for dropdown list items headers */}
                  {!route && dropdown && (
                    <>
                      <span
                        onClick={() => dropdownHook[1](!dropdownHook[0])}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        className="transform"
                      >
                        <div>
                          <span className="mx-2">{icon}</span>
                          <span> {name}</span>
                        </div>
                        <span>{dropdownHook[0] ? "Up" : "Down"}</span>
                      </span>
                      <div
                        className={`Dropdown transition-all duration-500 ${
                          dropdownHook[0] ? "ListBarOpen" : "ListBarClosed"
                        }`}
                      >
                        <div className="px-2 py-2">
                          {/* Only for dropdown list items */}
                          {dropdown.map(({ name, route, icon }, index) => (
                            <NavLink
                              key={`${name}-${index}`}
                              to={route}
                              activeClassName=""
                              className="NavLinksOfSidebar"
                              href="#"
                            >
                              <div style={{ border: "2px solid #000" }}>
                                <span className="mx-2 ">{icon}</span>
                                <span>{name}</span>
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  {/* No dropdown & No Routes */}
                  {!route && !dropdown && (
                    <span className="">
                      <span className="">{icon}</span>
                      <span> {name}</span>
                    </span>
                  )}
                </li>
              )
            )}
          </ul>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "50px 0 0 0",
              marginBottom: "50px",
            }}
          >
            <h3>Sold Amount</h3>
            <p>your sold amount this month</p>
            <button>$0.00</button>
            <p className="">
              total sold: <span className="">$90.00</span>
            </p>
            <p>
              sold last month: <span>$90.00</span>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Sidebar;
