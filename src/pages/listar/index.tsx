import React, { useEffect, useState } from "react"
import { Candidate } from "../../components/Candidate"
import { Loading } from "../../components/Loading"
import { Candidato } from "../../interfaces/Candidato"
import { User } from "../../interfaces/User"
import { getCandidatos } from "../../services/candidates"
import { Wrapper } from "./styles"

interface ListarProps {
	user: User
}

export const Listar = (props: ListarProps) => {
	const { user } = props
	const [loading, setLoading] = useState(false)
	const [candidates, setCandidates] = useState<Array<Candidato>>([])

	const handleFetchCandidates = async () => {
		setLoading(true)
		const candidatos = await getCandidatos(user.Authorization)
		setCandidates(candidatos)
		setLoading(false)
	}

	useEffect(() => {
		handleFetchCandidates()
	}, [])

	const renderCandidates = () => {
		if (candidates.length)
			return candidates.map((candidate: Candidato) => {
				return <Candidate candidate={candidate} key={candidate.id} />
			})
		return null
	}

	if (loading) {
		return <Loading />
	}
	return <Wrapper>{renderCandidates()}</Wrapper>
}
