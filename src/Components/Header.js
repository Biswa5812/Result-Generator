import React from "react";
import {
    Nav,
    NavItem,
    NavbarBrand,
    Navbar
} from "reactstrap";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
  } from "react-router-dom";
import Admin from "./Admin";

const Header = () =>
{
    return(
        // <Router>
            <div>       
                <Navbar color="light">
                    <NavbarBrand href="https://chennaiclri.kvs.ac.in/">Kendriya Vidyalaya CLRI</NavbarBrand>
                    <Nav>
                        {/* <NavItem className="hom">
                            <Link to="/admin">Admin</Link>
                        </NavItem>
                        <NavItem className="hom">
                            <Link to="/faculty">Faculty</Link>
                        </NavItem> */}
                    </Nav>
                </Navbar>
            </div>
        // </Router>
    );
};
export default Header;