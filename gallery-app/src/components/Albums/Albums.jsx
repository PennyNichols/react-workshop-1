import { useEffect, useState } from "react";
import { Card, CardBody, CardImg, Spinner } from "reactstrap";

const Gallery = () => {
	const [albums, setAlbums] = useState([]);
	useEffect(() => {
		fetch(`https://cwbarry.pythonanywhere.com/image/`)
			.then((data) => data.json())
			.then((data) => setAlbums(data));
	}, []);
	const { images } = albums;
	return (
		<div className="d-flex flex-wrap justify-content-center card-wrapper">
			{images ? (
				images.map(({ photographer, src }, i) => {
					return (
						<Card className="shadow border-0" key={i}>
							<CardImg className="img" src={src.large} alt={photographer} />
							<CardBody className="name">{photographer}</CardBody>
						</Card>
					);
				})
			) : (
				<Spinner color="light" type="grow" />
			)}
		</div>
	);
};

export default Gallery;
