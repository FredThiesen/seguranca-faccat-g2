import logo from "./logo.svg"
import "./App.css"
import { Listar } from "./pages/listar"
import { Consultar } from "./pages/consultar"
import { Cadastrar } from "./pages/cadastrar"
import { TextInput } from "./components/TextInput"
import { TabSelector } from "./components/TabSelector"

function App() {
	return (
		<div className="App">
			<Listar />
			<Consultar />
			<Cadastrar />
			<TextInput />
			<TabSelector />
		</div>
	)
}

export default App
