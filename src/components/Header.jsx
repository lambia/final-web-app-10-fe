import { Link } from "react-router-dom"

function Header() {
	// const [stato, setStato] = useState(null)

	return (
		<header className="header">
			<Link to="/">Homepage</Link>
			<Link to="/books">Libri</Link>
		</header>
	)
}

export default Header
