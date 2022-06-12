import axios, { AxiosPromise, AxiosResponse } from "axios"

const url = "https://api-g2-faccat.herokuapp.com/login"

interface UserLogin {
	login: string
	senha: string
}

interface UserResponse {
	token: string
}

export const getAuthentication = async (data: UserLogin): Promise<any> => {
	const response = axios.post(url, data)
	console.log(response)
	return response
}
