import { Link } from "react-router-dom"

function HomePage() {
	return <>
		<h1>Benvenuto in Books.js</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, alias.</p>
		<Link to="/books">Scopri il nostro catalogo</Link>
	</>
}

export default HomePage