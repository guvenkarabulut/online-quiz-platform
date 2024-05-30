
import Cookies from "js-cookie";
import React from "react";
import { getUserIdFromToken, getUserTypeFromToken } from "../utils/jwt";

const DefaultLayout = ({ children, props }) => {
  props = props || {};

  const handleLogOut = () => {
    Cookies.remove("token");
    console.log("Token removed:", !Cookies.get("token")); // Debugging line
    window.location.href = "/login";
  };

  const [usertype, setUsertype] = React.useState(
    getUserTypeFromToken(Cookies.get("token"))
  );


  return (
    <>
      <div className="loader-bg">
        <div className="loader-track">
          <div className="loader-fill"></div>
        </div>
      </div>
      <nav className="pcoded-navbar">
        <div className="navbar-wrapper">
          <div className="navbar-content scroll-div ">
            <div className="">
              <div className="main-menu-header">
                <img
                  className="img-radius"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=33d04f55b0bf26e64047ed6b5ca6df23349dd66208bf52173d39e1ef14ffa278&ipo=images"
                  alt="User-Profile-Image"
                />
                <div className="user-details">
                  <span>Kullancı Adı</span>
                  <div id="more-details">
                    {props.name ? props.name : "Ogretmen"}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-between" style={{ height: "85vh" }}>
              <ul className="nav pcoded-inner-navbar ">
                <li className="nav-item pcoded-menu-caption">
                  <label>Navigasyon</label>
                </li>
                {
                  usertype == "Admin" &&
                  <>
                    <li className="nav-item">
                      <a href="/admin-lessons" className="nav-link ">
                        <span className="pcoded-micon">
                          <i className="feather icon-box"></i>
                        </span>
                        <span className="pcoded-mtext">Dersler</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/admin-teachers" className="nav-link ">
                        <span className="pcoded-micon">
                          <i className="feather icon-file-text"></i>
                        </span>
                        <span className="pcoded-mtext">Ogretmenler</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/admin-students" className="nav-link ">
                        <span className="pcoded-micon">
                          <i className="feather icon-settings"></i>
                        </span>
                        <span className="pcoded-mtext">Ogrenciler</span>
                      </a>
                    </li>
                  </>
                }


                {
                  usertype == "Student" &&
                  <>
                    <li className="nav-item">
                      <a href="/student-lessons" className="nav-link ">
                        <span className="pcoded-micon">
                          <i className="feather icon-box"></i>
                        </span>
                        <span className="pcoded-mtext">Dersler</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/student-quizs" className="nav-link ">
                        <span className="pcoded-micon">
                          <i className="feather icon-file-text"></i>
                        </span>
                        <span className="pcoded-mtext">Quizler</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/student-codes" className="nav-link ">
                        <span className="pcoded-micon">
                          <i className="feather icon-settings"></i>
                        </span>
                        <span className="pcoded-mtext">Kod Sorulari</span>
                      </a>
                    </li>
                  </>
                }


                {
                  usertype == "Teacher" &&
                  <>
                    <li className="nav-item">
                      <a href="/teacher-lessons" className="nav-link ">
                        <span className="pcoded-micon">
                          <i className="feather icon-box"></i>
                        </span>
                        <span className="pcoded-mtext">Dersler</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/teacher-quizs" className="nav-link ">
                        <span className="pcoded-micon">
                          <i className="feather icon-file-text"></i>
                        </span>
                        <span className="pcoded-mtext">Quizler</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/teacher-students" className="nav-link ">
                        <span className="pcoded-micon">
                          <i className="feather icon-file-text"></i>
                        </span>
                        <span className="pcoded-mtext">Ogrenciler</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/teacher-codes" className="nav-link ">
                        <span className="pcoded-micon">
                          <i className="feather icon-settings"></i>
                        </span>
                        <span className="pcoded-mtext">Kod Sorulari</span>
                      </a>
                    </li>
                  </>
                }
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <header className="navbar pcoded-header navbar-expand-lg navbar-light header-dark d-flex justify-content-between">
        <button className="btn btn-danger" onClick={
          () => {
            handleLogOut();
          }
        }>
          <span className="pcoded-mtext">Cikis Yap</span>
        </button>
      </header>
      {children}
    </>
  );
};

export default DefaultLayout;

