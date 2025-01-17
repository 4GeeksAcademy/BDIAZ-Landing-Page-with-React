import React from "react";

const Card = (props) => {
	return (
        <div className="col-lg-3 col-sm-12">
        <div className="card text-center ">
            <img src={props.imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
                <a href="#" className="btn btn-primary">Ver más</a>
            </div>
        </div>
        </div>
    );
};

export default Card;
