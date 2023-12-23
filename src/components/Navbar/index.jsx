import React from "react";
import { Navbar, Nav, Collapse } from "bootstrap-4-react";

function NavbarApp() {
    return (
        <Navbar expand="lg" light bg="light">
            <Navbar.Brand href="/">Kerjoo</Navbar.Brand>
            <Navbar.Toggler target="#navbarSupportedContent" />
            <Collapse navbar id="navbarSupportedContent">
                <Navbar.Nav mr="auto">
                    <Nav.Item active>
                        <Nav.Link href="/test-grid">Test Grid</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/test-flex">Test Flex</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Test Flex</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Test Flex</Nav.Link>
                    </Nav.Item>
                </Navbar.Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavbarApp;
