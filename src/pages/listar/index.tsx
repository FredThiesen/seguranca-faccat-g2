import React from "react"
import { Loading } from "../../components/Loading"
import { Wrapper } from "./styles"

interface ListarProps {
	loading: boolean
}

export const Listar = (props: ListarProps) => {
	const { loading } = props

	if (loading) {
		return <Loading />
	}
	return (
		<Wrapper>
			<div>listar</div>
		</Wrapper>
	)
}
