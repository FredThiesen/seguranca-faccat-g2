import axios from "axios"
import { Candidato } from "../interfaces/Candidato"

const url = "https://api-g2-faccat.herokuapp.com/"

const makeConfig = (jwt: string) => ({
	headers: {
		Authorization: jwt,
	},
})

export const getCandidateWithHeader = (jwt: string) => {
	const config = makeConfig(jwt)
	return axios.get(url + "candidato", config)
}

export const getCandidatos = async (jwt: string) => {
	const config = makeConfig(jwt)
	const response = await axios.get(url + "candidatos", config)
	return response.data
}

export const getCandidate = async (
	jwt: string,
	id: string
): Promise<Candidato> => {
	const config = makeConfig(jwt)
	const response = await axios.get(url + "candidatos/" + id, config)
	return response.data
}

export const postCandidate = async (jwt: string, candidate: Candidato) => {
	const config = makeConfig(jwt)

	const response = await axios.post(url + "candidatos", candidate, config)
	return response.status === 200 ? true : false
}

export const updateCandidate = async (jwt: string, candidate: Candidato) => {
	const config = makeConfig(jwt)
	const response = await axios.put(
		url + "candidatos/" + candidate.id,
		candidate,
		config
	)
	return response.status === 200 ? true : false
}

export const deleteCandidate = async (jwt: string, id: string) => {
	const config = makeConfig(jwt)
	const response = await axios.delete(url + "candidatos/" + id, config)
	return response.status === 200 ? true : false
}
