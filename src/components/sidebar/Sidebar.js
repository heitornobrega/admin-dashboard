import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Calcário <br /> Razzera </h1>
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
        <h2>Centros de custos</h2>
        <div className="sidebar__link">
          <i className="fa fa-diamond"></i>
          <a href="#">Extração</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-bolt"></i>
          <a href="#">Energia</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#">Oficina</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-shopping-cart"></i>
          <a href="#">Compras</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-industry"></i>
          <a href="#">Fábrica</a>
              </div>
        <div className="sidebar__link">
          <i className="fa fa-tachometer"></i>
          <a href="#">Combustível</a>
              </div>
              <div className="sidebar__link">
          <i className="fa fa-truck"></i>
          <a href="#">Máquinas</a>
              </div>
              <div className="sidebar__link">
          <i className="fa fa-users"></i>
          <a href="#">Funcionários</a>
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
