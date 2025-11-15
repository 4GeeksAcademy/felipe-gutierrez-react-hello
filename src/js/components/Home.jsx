import React from "react"

//include images into your bundle
import { Card } from "./Card.jsx"
import { Navbar } from "./Navbar.jsx";
import { Body } from "./Body.jsx";
import { Footer } from "./Footer.jsx";


//create your first component

const Home = (props) => {

	let Futbolistas = [
		{
			nombre: "Cristiano ", info: "El mejor jugador de futbol de la historia de POR", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/250px-Cristiano_Ronaldo_2018.jpg", href: "https://es.wikipedia.org/wiki/Cristiano_Ronaldo"
		},
		{
			nombre: "Lionel Messi", info: "El mejor jugador de futbol de la historia de ARG", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/250px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg", href: "https://es.wikipedia.org/wiki/Lionel_Messi"
		},
		{
			nombre: "Arturo Vidal", info: "El mejor jugador de futbol de la historia de CHI", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Chile_VS._Australia_%2813%29_2017-6-25_Arturo_Vidal.jpg/250px-Chile_VS._Australia_%2813%29_2017-6-25_Arturo_Vidal.jpg", href: "https://es.wikipedia.org/wiki/Arturo_Vidal"
		},
		{
			nombre: "Ronaldinho", info: "El mejor jugador de futbol de la historia de BRA", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ronaldinho_in_2019.jpg/250px-Ronaldinho_in_2019.jpg", href: "https://es.wikipedia.org/wiki/Ronaldinho"
		}

	]
	return (
		<div className="landing container-fluid">
			<Navbar />
			<div className="row">
				<Body />
				{Futbolistas.map((item, index) => (
					<div className="col-lg-3 col-md-6 col-md-12">
						<Card key={index} nombre={item.nombre} info={item.info} imagenUrl={item.imagenUrl} href={item.href} />

					</div>
				))}
				<Footer />
			</div>

		</div>
	);
};

export default Home;