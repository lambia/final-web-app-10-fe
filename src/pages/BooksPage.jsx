import { useEffect, useState } from "react";
import BookCard from "../components/BookCard"

import axios from 'axios';

function BooksPage() {

	const [books, setBooks] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3000/api/books").then(response => {
			console.log(response.data);
			setBooks(response.data);
		}).catch(err => console.error("Ops...", err.message));
	}, []);

	return <>
		<h1>Elenco dei libri</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, alias.</p>

		<div className="cards-container">
			{books.map((libro, i) => <BookCard key={i} book={libro} />)}
		</div>

	</>
}

export default BooksPage