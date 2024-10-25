import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./Navbar.jsx"

import Jumbotron from "./jumbotron.jsx"

import Card from "./card.jsx"
import Footer from "./footer.jsx"



const Home = () => {
	let games = [
		{
			titulo: "The Legend of Zelda: Breath of the Wild",
			descripcion: "Un juego de aventura y exploración en un mundo abierto, aclamado por su libertad para explorar y resolver acertijos.",
			imagen: "https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58"
		},
		{
			titulo: "Super Mario Odyssey",
			descripcion: "Un juego de plataformas en 3D donde Mario explora varios mundos en busca de lunas y usa a su sombrero mágico, Cappy, para poseer enemigos y objetos.",
			imagen: "https://sm.ign.com/ign_latam/screenshot/default/mario_d4q6.jpg"
		},
		{
			titulo: "Animal Crossing: New Horizons",
			descripcion: "Un simulador de vida en una isla donde los jugadores pueden construir su hogar, interactuar con aldeanos y personalizar el entorno a su gusto.",
			imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/03/animal-crossing-new-horizons-principal-1887457.jpg?tf=3840x"
		},
		{
			titulo: "Mario Kart 8 Deluxe",
			descripcion: "UUn juego de carreras en el que los personajes de Mario compiten en pistas llenas de objetos y desafíos, tanto en solitario como en multijugador.",
			imagen: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000153/de697f487a36d802dd9a5ff0341f717c8486221f2f1219b675af37aca63bc453"
		}
	];
	return (
		<>
			<Navbar/>
			<div className="container">
				<Jumbotron/>
				<div className="row">
					{games.map((item, index)=>(
						<Card key={index} titulo={item.titulo} descripcion={item.descripcion}  imagen={item.imagen}/>
					))}
				</div>
			</div>
			<Footer />
		</>

	);
};

export default Home;
