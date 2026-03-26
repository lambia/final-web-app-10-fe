import { useState } from "react";
import axios from "axios";

const ReviewForm = (props) => {

	const bookId = props.bookId;
	const reloadBookData = props.onNewReview;

	const apiUrl = `http://localhost:3000/api/books/${bookId}/reviews`;

	const initialValues = { name: "Anonimo", text: "Lunga recensione", vote: 1 };
	const [formData, setFormData] = useState(initialValues);

	function handleSubmit(e) {
		e.preventDefault();
		// console.log("Nuova recensione!", bookId, formData, apiUrl);

		axios.post(apiUrl, formData).then(results => {
			if (results.data.id) {
				setFormData(initialValues);
				reloadBookData();
				console.log("ok");
			} else {
				console.log("ko");
			}
		}).catch(error => {
			console.error("Ops...", error.message);
		});
	}

	function setFieldValue(e) {

		const fieldName = e.target.name;
		const fieldValue = e.target.value;

		let newFormData = {
			...formData
		};

		newFormData[fieldName] = fieldValue;

		setFormData(newFormData);
	}

	return <div>

		<h3>Aggiungi una recensione</h3>
		<form onSubmit={handleSubmit}>
			<div>
				<h4>Autore</h4>
				<input name="name" placeholder="Autore Recensione" value={formData.name} onChange={setFieldValue} />
			</div>
			<div>
				<h4>Voto</h4>
				<input type="number" min="1" max="5" name="vote" placeholder="Voto" value={formData.vote} onChange={setFieldValue} />
			</div>
			<div>
				<h4>Testo</h4>
				<textarea name="text" value={formData.text} onChange={setFieldValue}></textarea>
			</div>
			<div>
				<button type="submit">Aggiungi</button>
			</div>
		</form>

	</div>
}

export default ReviewForm;