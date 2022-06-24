import React, { useState } from "react"
import { Button } from "../../components/Button"
import { Loading } from "../../components/Loading"
import { TextInput } from "../../components/TextInput"
import { User } from "../../interfaces/User"
import { getAuthentication } from "../../services/authentication"
import { Wrapper } from "./styles"

interface LoginProps {
	setUser: (user: User) => void
}

export const Login = (props: LoginProps) => {
	const { setUser } = props

	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")
	const [loading, setLoading] = useState(false)

	const handleLogin = async (login: string, senha: string) => {
		setLoading(true)
		const user = await getAuthentication({ login, senha })
		setLoading(false)
		if (user) setUser(user)
	}

	if (loading) {
		return <Loading />
	}

	return (
		<Wrapper>
			<TextInput
				label="Login"
				onChange={setLogin}
				placeholder="Insira seu login"
				value={login}
				type={"text"}
			/>
			<TextInput
				label="password"
				onChange={setPassword}
				placeholder="Insira sua senha"
				value={password}
				type={"text"}
			/>
			<Button
				onClick={() => handleLogin(login, password)}
				title="Fazer login"
			/>
		</Wrapper>
	)
}
