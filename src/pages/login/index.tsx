import React, { useState } from "react"
import { Button } from "../../components/Button"
import { Loading } from "../../components/Loading"
import { TextInput } from "../../components/TextInput"
import { Wrapper } from "./styles"

interface LoginProps {
	onLogin: (username: string, password: string) => void
	loading: boolean
}

export const Login = (props: LoginProps) => {
	const { onLogin, loading } = props
	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")

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
				onClick={() => onLogin(login, password)}
				title="Fazer login"
			/>
		</Wrapper>
	)
}
