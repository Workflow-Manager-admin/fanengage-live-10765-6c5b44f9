import React from "react";

/**
 * PUBLIC_INTERFACE
 * Top navigation bar component.
 */
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span style={{ color: "#FFB703", fontWeight: 800, fontSize: 22 }}>⚽️</span>{" "}
        <span style={{ marginLeft: 5, fontWeight: 700, fontSize: 18, color: "#144272"}}>
          FanEngage Live
        </span>
      </div>
      <div className="navbar-spacer" />
    </nav>
  );
}

export default NavBar;
