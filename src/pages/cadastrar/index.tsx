import React, { useState } from "react"
import { Button } from "../../components/Button"
import { Loading } from "../../components/Loading"
import { TextInput } from "../../components/TextInput"
import { postCandidate } from "../../services/candidates"
import { Wrapper } from "./styles"

export const Cadastrar = () => {
	const [nome, setNome] = useState("")
	const [email, setEmail] = useState("")
	const [telefone, setTelefone] = useState("")
	const [enderecoWeb, setEnderecoWeb] = useState("")
	const [experienciaProfissional, setExperienciaProfissional] = useState("")
	const [loading, setLoading] = useState(false)

	const validInputs = Boolean(nome && email && experienciaProfissional)

	const handleSubmit = async () => {
		setLoading(true)
		if (!validInputs) return
		await postCandidate({
			nome,
			email,
			telefone,
			enderecoWeb,
			experienciaProfissional,
		})
		setLoading(false)
	}

	const renderTelefoneInput = () => {
		return (
			<TextInput
				type={"number"}
				value={telefone}
				onChange={setTelefone}
				placeholder={"Insira o número de telefone (Opcional)"}
				label={"Telefone"}
				maxLength={9}
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

	const renderExpInput = () => {
		return (
			<TextInput
				type={"text"}
				value={experienciaProfissional}
				onChange={setExperienciaProfissional}
				placeholder={"Insira sua experiência profissional"}
				label={"Experiência profissional"}
				multiple
			/>
		)
	}

	const renderWebInput = () => {
		return (
			<TextInput
				type={"text"}
				value={enderecoWeb}
				onChange={setEnderecoWeb}
				placeholder={"Insira o endereço web (Opcional)"}
				label={"Endereço web"}
			/>
		)
	}

	if (loading) {
		return <Loading />
	}

	return (
		<Wrapper>
			{renderNomeInput()}
			{renderEmailInput()}
			{renderTelefoneInput()}
			{renderExpInput()}
			{renderWebInput()}
			<Button onClick={handleSubmit} title={"Cadastrar"} />
		</Wrapper>
	)
}
