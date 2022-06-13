import React from "react"
import { StyledButton } from "./styles"

interface ButtonProps {
	onClick: () => void
	disabled?: boolean
	title: string
}

export const Button = (props: ButtonProps) => {
	return <StyledButton {...props}>{props.title}</StyledButton>
}
