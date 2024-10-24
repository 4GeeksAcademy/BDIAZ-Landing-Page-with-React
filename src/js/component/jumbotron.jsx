import React from "react";

const Jumbotron = () => {
	return (
        <>
        <div className="card text-bg-dark">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/2560px-Nintendo.svg.png" className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <h5 className="card-title h1">!Bienvenido!</h5>
                <p className="card-text h2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a href="#" class="btn btn-primary btn-lg">Go somewhere</a>
            </div>
        </div>
        </>
    );
};

export default Jumbotron;
