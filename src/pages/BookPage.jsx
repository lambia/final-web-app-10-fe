import { Link } from "react-router-dom"

function BookPage() {
	return <>
		<Link to="/books">Torna alla lista libri</Link>
		<h1>Pagina dettaglio del libro</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, alias.</p>
	</>
}

export default BookPage