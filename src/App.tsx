import React, { useState } from "react"
import { getAuthentication } from "./services/authentication"
import { Listar } from "./pages/listar"
import { Consultar } from "./pages/consultar"
import { Cadastrar } from "./pages/cadastrar"
import { Login } from "./pages/login"
import { TabSelector } from "./components/TabSelector"
import { Wrapper } from "./styles"

interface User {
	login: string
	password: string
	jwt: string
}

const App = () => {
	const [user, setUser] = useState<User | null>(null)
	const [selectedTab, setSelectedTab] = useState<
		"listar" | "consultar" | "cadastrar"
	>("listar")

	const handleLogin = async (login: string, senha: string) => {
		const user = await getAuthentication({ login, senha })
		setUser(user)
	}

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
		// if (user) return null
		return <Login onLogin={handleLogin} />
	}

	return (
		<Wrapper>
			<TabSelector
				selectedTab={selectedTab}
				onSelectTab={setSelectedTab}
			/>
			{renderLogin()}
			{renderListar()}
			{renderConsultar()}
			{renderCadastrar()}
		</Wrapper>
	)
}

export default App
