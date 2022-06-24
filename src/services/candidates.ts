import axios from "axios"
import { Candidato } from "../interfaces/Candidato"

const url = "https://api-g2-faccat.herokuapp.com/"

export const getCandidates = async () => {
	const response = await axios.get(url + "candidates")
	return response.data
}

export const getCandidate = async (id: number) => {
	const response = await axios.get(url + "candidates/" + id)
	return response.data
}

export const postCandidate = async (candidate: Candidato) => {
	const response = await axios.post(url + "candidates", candidate)
	return response.status === 200 ? true : false
}

export const updateCandidate = async (candidate: Candidato) => {
	const response = await axios.put(
		url + "candidates/" + candidate.id,
		candidate
	)
	return response.status === 200 ? true : false
}

export const deleteCandidate = async (id: number) => {
	const response = await axios.delete(url + "candidates/" + id)
	return response.status === 200 ? true : false
}
