import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
//create your first component
const Home = () => {
	const datos = [
		{
			titulo: "Mercedez Benz GTR",
			descripcion: "Bestia Naranja: el Mercedes-AMG GT R más potente",
			img:"https://elcomercio.pe/resizer/ekGoG_2dKEuUSIsezhz-THLoKDY=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BEPBIZOM6VBPVOP5HEG625DQKE.jpg",
		},
		{
			titulo: "Porsche 911 Turbo s",
			descripcion: "Elegancia, estilo y potencia: 911 Turbo S",
			img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLnJJ1E59y2QHusv7z4LWYw6ealKVYxeRXA&usqp=CAU",
		},
		{
			titulo: "RAM 1500 TRX",
			descripcion: "RAM 1500 TRX 2021 con motor Hellcat amenaza sin miedo a la F150 Raptor",
			img: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_a26ac35d349b47b587bdb9bb07704023.jpg",
		}
	]
	return (
		<div className="container-fluid bg-secondary">
			<Navbar/>
			<div className="container my-5">
				<Jumbotron/>

				<div className="row my-5">
					{datos.map((objeto,posicion)=>{
						return <Card titulo={objeto.titulo} descripcion={objeto.descripcion} img={objeto.img}/>

					})}
				</div>

			</div>

			

		</div>
	);
};

export default Home;
