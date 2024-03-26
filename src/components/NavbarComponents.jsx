import { menu } from "../data/main";
// import logo from '../assets/logo.svg'
import "./css/navbarcomponents.css";
const NavbarComponents = () => {
  return (
    <header>
      <div className="navbar">
        <div className="navbar-logo">
          <h1>RundWeb<span>.</span></h1>
        </div>
        <ul className="nav-list">
          {menu.map((menus) => {
            return (
              <li className="nav-link" key={menus.id}>
                <a href="#">{menus.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default NavbarComponents;
