import React, { useState } from "react"
import { Loading } from "../../components/Loading"
import { Wrapper } from "./styles"

export const Listar = () => {
	const [loading, setLoading] = useState(false)

	if (loading) {
		return <Loading />
	}
	return (
		<Wrapper>
			<div>listar</div>
		</Wrapper>
	)
}
