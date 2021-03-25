import React from "react";
import {
    Nav,
    NavbarBrand,
    Navbar
} from "reactstrap";

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