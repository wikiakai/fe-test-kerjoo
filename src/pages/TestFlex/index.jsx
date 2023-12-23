import React from "react";
import NavbarApp from "../../components/Navbar";
import { Container } from "bootstrap-4-react";

function TestFlex() {
    return (
        <div>
            <NavbarApp />
            <Container>
                <div className="container mt-3 d-flex flex-wrap justify-content-center gap-5">
                    {/* Column 1 */}
                    {/* <div className=""> */}
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <button className="btn btn-primary mb-2">Tambah</button>
                        <button className="btn btn-primary mb-2">Import</button>
                        <button className="btn btn-primary mb-2">Export</button>
                    </div>
                    {/* </div> */}
                    <div className="d-flex flex-md-row flex-xl-row flex-lg-row justify-content-center align-items-center gap-5 flex-column">
                        {/* Column 2 */}
                        <div className="">
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Search"
                            />
                        </div>

                        {/* Column 3 */}
                        <div className="">
                            <select className="form-select mb-3">
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default TestFlex;
