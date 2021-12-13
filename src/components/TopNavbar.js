import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand to="">Inara</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </Nav>
              <Nav>
                <Link className="nav-link" to={"/cart-items"}>
                  Cart Items
                </Link>

                {props.isLoggedIn ? (
                  <Link className="nav-link" to="#" onClick={logout}>
                    LOGOUT
                  </Link>
                ) : (
                  <div>
                    <Link className="nav-link" to={"/login"}>
                      Login
                    </Link>
                  </div>
                )}

                  {/* <Link className="nav-link" to="#" onClick={logout}>
                    LOGOUT
                  </Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div></div>
    </>
  );
};

export default TopNavbar;
