import React, { useState } from "react"
import { TextInput } from "../../components/TextInput"
import { Wrapper } from "./styles"

export const Cadastrar = () => {
	const [nome, setNome] = useState("")
	const [email, setEmail] = useState("")
	const [telefone, setTelefone] = useState("")
	const [cpf, setCpf] = useState<number>(0)

	const renderCpfInput = () => {
		return (
			<TextInput
				type={"number"}
				value={cpf}
				onChange={setCpf}
				placeholder={"Insira o cpf"}
				label={"CPF"}
			/>
		)
	}

	const renderTelefoneInput = () => {
		return (
			<TextInput
				type={"number"}
				value={telefone}
				onChange={setTelefone}
				placeholder={"Insira o número de telefone"}
				label={"Telefone"}
			/>
		)
	}

	const renderEmailInput = () => {
		return (
			<TextInput
				type={"text"}
				value={email}
				onChange={setEmail}
				placeholder={"Insira o email"}
				label={"Email"}
			/>
		)
	}

	const renderNomeInput = () => {
		return (
			<TextInput
				type={"text"}
				value={nome}
				onChange={setNome}
				placeholder={"Insira o nome"}
				label={"Nome"}
			/>
		)
	}

	return (
		<Wrapper>
			{renderCpfInput()}
			{renderNomeInput()}
			{renderEmailInput()}
			{renderTelefoneInput()}
		</Wrapper>
	)
}
