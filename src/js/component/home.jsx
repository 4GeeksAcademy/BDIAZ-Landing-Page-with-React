import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./Navbar.jsx"

import Jumbotron from "./jumbotron.jsx"

import Card from "./card.jsx"



const Home = () => {
	let games = [
		{
			titulo: "The Legend of Zelda: Breath of the Wild",
			descripcion: "Un juego de aventura y exploración en un mundo abierto, aclamado por su libertad para explorar y resolver acertijos."
		},
		{
			titulo: "Super Mario Odyssey",
			descripcion: "Un juego de plataformas en 3D donde Mario explora varios mundos en busca de lunas y usa a su sombrero mágico, Cappy, para poseer enemigos y objetos."
		},
		{
			titulo: "Animal Crossing: New Horizons",
			descripcion: "Un simulador de vida en una isla donde los jugadores pueden construir su hogar, interactuar con aldeanos y personalizar el entorno a su gusto."
		},
		{
			titulo: "Mario Kart 8 Deluxe",
			descripcion: "UUn juego de carreras en el que los personajes de Mario compiten en pistas llenas de objetos y desafíos, tanto en solitario como en multijugador."
		}
	];
	return (
		<>
			<Navbar/>
			<Jumbotron/>
			<div>
				{games.map((item, index) => {
					<Card key={index} titulo={item.titulo} descripcion={item.descripcion}/>
					{console.log(item)}
				})}
			</div>
		</>

	);
};

export default Home;
