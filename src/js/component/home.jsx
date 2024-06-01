import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	const cardList = [
		{ id: 1, texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu dignissim lectus. Nulla finibus magna purus, id ullamcorper enim feugiat." },
		{ id: 2, texto: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." },
		{ id: 3, texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu dignissim lectus. Nulla finibus magna purus, id ullamcorper enim feugiat." },
		{ id: 4, texto: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." }
	]
	return (<>
		<Navbar />
		<div className="container-fluid">
			<Jumbotron />
			<div className="row">
				{cardList.map((item) => (
					<div className="col-12 col-md-6 col-lg-3" key={item.id}>
						<Card description={item.texto} />
					</div>
				))}
			</div>
		</div>

		<Footer />
	</>

	);
};

export default Home;
