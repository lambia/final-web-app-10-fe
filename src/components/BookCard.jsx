import { Link } from "react-router-dom"

function BookCard({ book }) {

	//Stesse proprietà con cui mi verrebbe restituito dalla webapi
	const { id, title, author, abstract, image } = book;

	return <div className="card">
		<img src={image} alt={title} />
		<h2>{title}</h2>
		<h3>{author}</h3>
		<p>{abstract}</p>
		<Link to={`/books/${id}`}>Vai ai dettagli</Link>
	</div>
}

export default BookCard;