import React, { useState } from "react"
import { Loading } from "../../components/Loading"
import { TextInput } from "../../components/TextInput"
import { Wrapper } from "./styles"

interface ConsultarProps {
	loading: boolean
}

export const Consultar = (props: ConsultarProps) => {
	const { loading } = props
	const [nome, setNome] = useState("")
	const [email, setEmail] = useState("")
	const [telefone, setTelefone] = useState("")
	const [cpf, setCpf] = useState("")

	const renderCpfInput = () => {
		return (
			<TextInput
				type={"number"}
				value={cpf}
				onChange={setCpf}
				placeholder={"Insira o cpf"}
				label={"CPF"}
				maxLength={11}
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

	if (loading) {
		return <Loading />
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
