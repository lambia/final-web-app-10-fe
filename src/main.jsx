import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	// Ricordatevi di riattivare lo strict mode dopo aver testato le insert!!!
	//   <StrictMode>
	<App />
	//   </StrictMode>,
)
