import React from "react";


//create your first component
const Navbar = () => {
	return (
        <>
            <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold text-white" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
