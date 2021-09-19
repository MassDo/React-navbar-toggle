import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const linksContainer = useRef(null);
  const linksList = useRef(null);
  // toggle te menu
  useEffect(() => {
    if (show) {
      const listHeight = linksList.current.offsetHeight.toString();
      console.log(listHeight);
      linksContainer.current.style.height = listHeight + "px";
    } else {
      linksContainer.current.style.height = "0px";
    }
  }, [show]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => {
              setShow(!show);
            }}
          >
            <FaBars />
          </button>
        </div>

        <div ref={linksContainer} className="links-container">
          <ul ref={linksList} className="links">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((socialItem) => {
            return (
              <li key={socialItem.id}>
                <a href={socialItem.url}>{socialItem.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
