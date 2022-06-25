import React, { useEffect, useState } from "react"
import { Candidate } from "../../components/Candidate"
import { Loading } from "../../components/Loading"
import { TextInput } from "../../components/TextInput"
import { Candidato } from "../../interfaces/Candidato"
import { User } from "../../interfaces/User"
import { getCandidate } from "../../services/candidates"
import { Wrapper } from "./styles"

interface ConsultarProps {
	user: User
	id: string | null
}

export const Consultar = (props: ConsultarProps) => {
	const { id, user } = props
	const [candidate, setCandidate] = useState<Candidato | null>(null)
	const [loading, setLoading] = useState(false)

	const handleGetCandidate = async () => {
		setLoading(true)
		const candidate = await getCandidate(user.Authorization, id)
		setLoading(false)
		if (candidate) setCandidate(candidate)
	}

	useEffect(() => {
		handleGetCandidate()
	}, [id])

	if (loading) {
		return <Loading />
	}

	return (
		<Wrapper>
			{candidate && (
				<Candidate candidate={candidate} hideCandidateButton complete />
			)}
		</Wrapper>
	)
}
