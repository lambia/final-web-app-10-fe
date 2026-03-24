import { Link } from "react-router-dom"
import ReviewCard from "../components/ReviewCard";

function BookPage() {

	//Un oggetto che rappresenta un finto libro, con la stessa struttura con cui mi verrebbe restituito dalla webapi
	const fakeReview = {
		name: "Mario Rossi",
		vote: 4,
		text: "lorem ipsum dolorem sit"
	};

	const reviews = [
		fakeReview,
		fakeReview
	];

	return <>
		<Link to="/books">Torna alla lista libri</Link>
		<h1>Pagina dettaglio del libro</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, alias.</p>

		<div className="cards-container">
			{reviews.map(recensione => <ReviewCard review={recensione} />)}
		</div>
	</>
}

export default BookPage