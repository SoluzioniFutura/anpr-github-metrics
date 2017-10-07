import React from "react"
import { render } from "react-dom"
import 'bulma/css/bulma.css'
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"
import './styles/index.css'

const root = document.getElementById("root")

render(<App />, root)
registerServiceWorker()
