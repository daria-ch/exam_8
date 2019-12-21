import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={RouterNavLink} to='/'>Quotes Central</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to='/quotes'>Quotes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to='/add-quote'>Submit new quote</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;