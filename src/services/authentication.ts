import axios from "axios"

const url = "https://api-g2-faccat.herokuapp.com/login"

interface UserLogin {
	login: string
	senha: string
}

export const getAuthentication = async (data: UserLogin) => {
	const response = await axios.post(url, data)
	return response.data
}
