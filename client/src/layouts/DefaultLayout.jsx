import React from "react";

const DefaultLayout = ({ children, props }) => {
  props = props || {};
  return (
    <div>
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
                <img className="img-radius"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=33d04f55b0bf26e64047ed6b5ca6df23349dd66208bf52173d39e1ef14ffa278&ipo=images"
                  alt="User-Profile-Image" />
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

                <li className="nav-item">
                  <a href="/teacher-lessons" className="nav-link "><span className="pcoded-micon"><i
                    className="feather icon-box"></i></span><span className="pcoded-mtext">Dersler</span></a>
                </li>
                <li className="nav-item">
                  <a href="/teacher-quizs" className="nav-link "><span className="pcoded-micon"><i
                    className="feather icon-file-text"></i></span><span
                      className="pcoded-mtext">Quizler</span></a>
                </li>
                <li className="nav-item">
                  <a href="/teacher-quizs" className="nav-link "><span className="pcoded-micon"><i
                    className="feather icon-settings"></i></span><span
                      className="pcoded-mtext">Kod Sorulari</span></a>
                </li>
              </ul>

              <ul className="nav pcoded-inner-navbar ">
                <li className="nav-item">
                  <a href="/teacher-students" className="nav-link "><span className="pcoded-micon"><i
                    className="feather icon-user"></i></span><span
                      className="pcoded-mtext">Kullanici Profil</span></a>
                </li>
                <li className="nav-item">
                  <a href="/teacher-lessons" className="nav-link "><span className="pcoded-micon"><i
                    className="feather icon-settings"></i></span><span className="pcoded-mtext">Ayarlar</span></a>
                </li>
                <li className="nav-item">
                  <a href="/teacher-quizs" className="nav-link "><span className="pcoded-micon"><i
                    className="feather icon-log-out"></i></span><span
                      className="pcoded-mtext">Cikis Yap</span></a>
                </li>
              </ul>

            </div>
          </div>
        </div >
      </nav >
      <header className="navbar pcoded-header navbar-expand-lg navbar-light header-dark">
        <div className="m-header">
          <a className="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
          <a href="#!" className="b-brand">
          </a>
          <a href="#!" className="mob-toggler">
            <i className="feather icon-more-vertical"></i>
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#!" className="pop-search"><i className="feather icon-search"></i></a>
              <div className="search-bar">
                <input type="text" className="form-control border-0 shadow-none" placeholder="Search hear" />
                <button type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </header>
      {children}
    </div>
  );
};

export default DefaultLayout;
