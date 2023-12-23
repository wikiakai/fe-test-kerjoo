import React from "react";
import NavbarApp from "../../components/Navbar";
import { Container } from "bootstrap-4-react";
const TestGrid = () => {
    return (
        <div>
            <NavbarApp />

            <Container>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box bg">
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TestGrid;
