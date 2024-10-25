import React from "react";

const Jumbotron = () => {
	return (
        <>
        <div className="card text-bg-dark">
            <img src="https://wallpapers.com/images/hd/video-game-zoom-background-13gurqi9gfhmu3s7.jpg" className="img-fluid" alt="..."/>
            <div className="card-img-overlay text-black">
                <h5 className="card-title h1 text-bg-dark bg-opacity-50">!Bienvenido!</h5>
                <p className="card-text h3 text-bg-dark bg-opacity-50 mb-5">Este es el mundo nintendo!</p>
                <a href="#" class="btn btn-primary btn-lg mt-auto">ir al nintendo</a>
            </div>
        </div>
        </>
    );
};

export default Jumbotron;
