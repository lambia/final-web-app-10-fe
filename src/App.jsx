import HomePage from "./pages/HomePage"
import BookPage from "./pages/BookPage"
import BooksPage from "./pages/BooksPage"
import NotFoundPage from "./pages/NotFoundPage"
import DefaultLayout from "./layouts/DefaultLayout"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route Component={DefaultLayout} >
					<Route path="/" Component={HomePage} ></Route>
					<Route path="/books" Component={BooksPage} ></Route>
					<Route path="/books/:id" Component={BookPage} ></Route>
					<Route path="*" Component={NotFoundPage} ></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
