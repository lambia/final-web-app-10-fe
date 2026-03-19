import BookCard from "../components/BookCard"

function BooksPage() {

	//Un oggetto che rappresenta un finto libro, con la stessa struttura con cui mi verrebbe restituito dalla webapi
	const fakeBook = {
		id: 999,
		title: "Guida Galattica",
		author: "Nessuno",
		abstract: "Lorem ipsum ecc...",
		image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
	};

	const books = [
		fakeBook,
		fakeBook
	];

	return <>
		<h1>Elenco dei libri</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, alias.</p>

		<div className="cards-container">
			{books.map(libro => <BookCard book={libro} />)}
		</div>

	</>
}

export default BooksPage