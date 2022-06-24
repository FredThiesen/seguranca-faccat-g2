import React from "react"
import { Input, Label, Wrapper } from "./styles"

interface TextInputProps {
	type: "text" | "number"
	value: string | number
	onChange: any
	placeholder: string
	label: string
	maxLength?: number
	multiple?: boolean
}

export const TextInput = (props: TextInputProps) => {
	const { onChange, label } = props
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value)
	}
	return (
		<Wrapper>
			<Label>{label}</Label>
			<Input {...props} onChange={handleChange} />
		</Wrapper>
	)
}
