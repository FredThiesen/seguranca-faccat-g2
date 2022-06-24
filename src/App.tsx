import React, { useState } from "react"
import { getAuthentication } from "./services/authentication"
import { Listar } from "./pages/listar"
import { Consultar } from "./pages/consultar"
import { Cadastrar } from "./pages/cadastrar"
import { Login } from "./pages/login"
import { TabSelector } from "./components/TabSelector"
import { Wrapper } from "./styles"
import { User } from "./interfaces/User"

const App = () => {
	const [user, setUser] = useState<User | null>(null)
	const [selectedTab, setSelectedTab] = useState<
		"listar" | "consultar" | "cadastrar"
	>("listar")

	const renderListar = () => {
		if (!user) return null
		if (selectedTab !== "listar") return null
		return <Listar />
	}
	const renderConsultar = () => {
		if (!user) return null
		if (selectedTab !== "consultar") return null

		return <Consultar />
	}
	const renderCadastrar = () => {
		if (!user) return null
		if (selectedTab !== "cadastrar") return null

		return <Cadastrar />
	}

	const renderLogin = () => {
		if (user) return null
		return <Login setUser={setUser} />
	}

	const renderTabSelector = () => {
		if (!user) return null
		return (
			<TabSelector
				selectedTab={selectedTab}
				onSelectTab={setSelectedTab}
			/>
		)
	}

	return (
		<Wrapper>
			{renderTabSelector()}
			{renderLogin()}
			{renderListar()}
			{renderConsultar()}
			{renderCadastrar()}
		</Wrapper>
	)
}

export default App
