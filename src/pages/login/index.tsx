import React, { useState } from "react"
import { TextInput } from "../../components/TextInput"
import { Wrapper } from "./styles"

interface LoginProps {
	onLogin: (username: string, password: string) => void
}

export const Login = (props: LoginProps) => {
	const { onLogin } = props
	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")

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
			<button onClick={() => onLogin(login, password)}>Login</button>
		</Wrapper>
	)
}
