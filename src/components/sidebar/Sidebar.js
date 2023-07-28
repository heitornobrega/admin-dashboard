import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Mining corp.</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-minus-square"></i>
          <a href="#">Home</a>
        </div>
        <h2>Cost Centers</h2>
        <div className="sidebar__link">
          <i className="fa fa-diamond"></i>
          <a href="#">Extraction</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-bolt"></i>
          <a href="#">Energy</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#">Workshop</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-shopping-cart"></i>
          <a href="#">Purchases</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-industry"></i>
          <a href="#">Factory</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-tachometer"></i>
          <a href="#">Fuel</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-truck"></i>
          <a href="#">Machinery</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-users"></i>
          <a href="#">Employees</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
