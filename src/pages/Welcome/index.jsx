import React from "react";
import NavbarApp from "../../components/Navbar";
import { Container } from "bootstrap-4-react/lib/components/layout";

const Welcome = () => {
    return (
        <div>
            <NavbarApp />
            <Container>
                <h3>Welcome</h3>
                <p>Please Select Menu</p>
            </Container>
        </div>
    );
};

export default Welcome;
