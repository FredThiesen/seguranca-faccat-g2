import React from "react"
import { Candidato } from "../../interfaces/Candidato"
import { Button } from "../Button"
import { EmailLabel, NameLabel, WrapperCandidate } from "./styles"

interface CandidateProps {
	candidate: Candidato
	hideCandidateButton?: boolean
	complete?: boolean
	onCandidateClick?: (candidate: Candidato) => void
}

export const Candidate = (props: CandidateProps) => {
	const { candidate, onCandidateClick, hideCandidateButton, complete } = props

	return (
		<WrapperCandidate>
			<NameLabel>{candidate.nome}</NameLabel>
			<EmailLabel>{candidate.email}</EmailLabel>
			{!hideCandidateButton && (
				<Button
					title="Consultar candidato"
					onClick={() => onCandidateClick(candidate)}
				/>
			)}
			{complete && (
				<>
					<EmailLabel>{candidate.telefone}</EmailLabel>
					<EmailLabel>{candidate.enderecoWeb}</EmailLabel>
					<EmailLabel>{candidate.experienciaProfissional}</EmailLabel>
				</>
			)}
		</WrapperCandidate>
	)
}
