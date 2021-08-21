import React from 'react'
import "./style/Topbar.css"
import {Turn as Hamburger} from 'hamburger-react'

const Topbar = ({sideNavOpen, setSideNavOpen}) => {
    return (
      <>
        <div className="HeaderContainer">
          <div className="HeaderWrapper">
            {/* Search Box*/}
            <div className="">
              <div className="">
                <input className="" />
                <button className="">Search</button>
              </div>
            </div>

            <div className="HeaderRight">
              <div>
                {/* User's Image */}
                <img
                  style={{
                    height: "35px",
                    width: "35px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  className="shadow-md  rounded-full "
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
              </div>
              {/* User's Name */}
              <div className="" style={{ margin: "0 40px 0 10px" }}>
                Sakata Gintoki
              </div>
              <div
                style={{ margin: "0 40px 0 10px" }}
                className="HeaderHamburger"
              >
                <Hamburger
                  toggled={sideNavOpen}
                  toggle={setSideNavOpen}
                  color="#000"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Topbar
