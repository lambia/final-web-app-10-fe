function ReviewCard({ review }) {

	//Stesse proprietà con cui mi verrebbe restituito dalla webapi
	const { name, vote, text } = review;

	return <div className="card">
		<h2>{name}</h2>
		<h3>{vote}/5</h3>
		<p>{text}</p>
	</div>
}

export default ReviewCard;