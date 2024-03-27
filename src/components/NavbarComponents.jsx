import { useEffect, useState } from "react";
import { menu } from "../data/main";
// import logo from '../assets/logo.svg'
import "./css/navbarcomponents.css";
const NavbarComponents = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const scrollBottom = () => {
    if (window.scrollY > 10) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    scrollBottom();

    window.addEventListener("scroll", scrollBottom);
  });

  const [mobileOpen, setMobileOpen] = useState("bx bx-menu");
  const [listOpen, setListOpen] = useState("nav-list");
  const [borderOpen, setBorderOpen] = useState("navbar");

  const openThisMenu = () => {
    mobileOpen === "bx bx-menu"
      ? setMobileOpen("bx bx-x")
      : setMobileOpen("bx bx-menu");

    listOpen === "nav-list"
      ? setListOpen("nav-list active")
      : setListOpen("nav-list");

    borderOpen === "navbar"
      ? setBorderOpen("navbar active")
      : setBorderOpen("navbar");
  };

  return (
    <header className={scrollNav ? "ok" : ""}>
      <div className={borderOpen}>
        <div className="navbar-logo" data-aos="fade-right">
          <h1>
            RundWeb<span>.</span>
          </h1>
        </div>
        <ul className={listOpen} data-aos="fade-left">
          {menu.map((menus) => {
            return (
              <li className="nav-link" key={menus.id}>
                <a href="#">{menus.text}</a>
              </li>
            );
          })}
        </ul>

        <div data-aos="fade-left" className="nav-toggle" onClick={openThisMenu}>
          <i className={mobileOpen}></i>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponents;
