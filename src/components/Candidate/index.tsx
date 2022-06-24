import React from "react"
import { Candidato } from "../../interfaces/Candidato"
import { EmailLabel, NameLabel, WrapperCandidate } from "./styles"

interface CandidateProps {
	candidate: Candidato
}

export const Candidate = (props: CandidateProps) => {
	const { candidate } = props
	return (
		<WrapperCandidate>
			<NameLabel>{candidate.nome}</NameLabel>
			<EmailLabel>{candidate.email}</EmailLabel>
		</WrapperCandidate>
	)
}
