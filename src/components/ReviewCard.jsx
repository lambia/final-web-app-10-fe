function ReviewCard({ review }) {

	//Stesse proprietà con cui mi verrebbe restituito dalla webapi
	const { name, vote, text } = review;



	return <div className="card">
		<h2>{name}</h2>

		<div>
			{/* <i className={"fa-star " + (vote >= 1 ? "fa-solid" : "fa-regular")}></i>
			<i className={"fa-star " + (vote >= 2 ? "fa-solid" : "fa-regular")}></i>
			<i className={"fa-star " + (vote >= 3 ? "fa-solid" : "fa-regular")}></i>
			<i className={"fa-star " + (vote >= 4 ? "fa-solid" : "fa-regular")}></i>
			<i className={"fa-star " + (vote >= 5 ? "fa-solid" : "fa-regular")}></i> */}

			{[1, 2, 3, 4, 5].map(elemento => {
				return <i className={"fa-star " + (vote >= elemento ? "fa-solid" : "fa-regular")}></i>
			})}

			{/* <ComponenteStelline voto={vote} /> */}
		</div>

		<p>{text}</p>
	</div>
}

export default ReviewCard;