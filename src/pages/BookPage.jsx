import { Link } from "react-router-dom"
import ReviewCard from "../components/ReviewCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function BookPage() {

	// const params = useParams();
	// const id = params.id;

	const { id } = useParams();

	//Un oggetto che rappresenta un finto libro, con la stessa struttura con cui mi verrebbe restituito dalla webapi
	const [book, setBook] = useState({});

	useEffect(() => {

		console.log("Siamo sulla pagina per bookId: ", id);

		axios.get(`http://localhost:3000/api/books/${id}`).then(response => {
			console.log(response.data);
			setBook(response.data);
		}).catch(err => console.error("Ops...", err.message));

	}, [id]);

	return <>
		<Link to="/books">Torna alla lista libri</Link>
		<h1>{book.title}</h1>
		<div>Media recensioni: {book.average_review}</div>
		<p>{book.abstract}</p>

		<div className="cards-container">
			{book.reviews?.map((recensione, i) => <ReviewCard key={i} review={recensione} />)}
		</div>

		<Link to="/books/1">Vai al mio libro preferito</Link>
	</>
}

export default BookPage