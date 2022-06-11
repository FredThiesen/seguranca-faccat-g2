import React, { useState } from "react"
// import { Listar } from "./pages/Listar"
import { Consultar } from "./pages/Consultar"
import { Cadastrar } from "./pages/Cadastrar"
import { TabSelector } from "./components/TabSelector"
import { Wrapper } from "./styles"

const App = () => {
	const [selectedTab, setSelectedTab] = useState<
		"listar" | "consultar" | "cadastrar"
	>("listar")
	const renderListar = (): null => {
		if (selectedTab !== "listar") return null
		// return <Listar />
		return null
	}
	const renderConsultar = () => {
		if (selectedTab !== "consultar") return null

		return <Consultar />
	}
	const renderCadastrar = () => {
		if (selectedTab !== "cadastrar") return null

		return <Cadastrar />
	}

	return (
		<Wrapper>
			<TabSelector
				selectedTab={selectedTab}
				onSelectTab={setSelectedTab}
			/>
			{renderListar()}
			{renderConsultar()}
			{renderCadastrar()}
		</Wrapper>
	)
}

export default App
