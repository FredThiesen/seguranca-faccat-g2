import React from "react"
import { Input, Label, Wrapper } from "./styles"

interface TextInputProps {
	type: "text" | "number"
	value: string | number
	onChange: any
	placeholder: string
	label: string
	maxLength?: number
}

export const TextInput = (props: TextInputProps) => {
	const { type, value, onChange, placeholder, label, maxLength } = props
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value)
	}
	return (
		<Wrapper>
			<Label>{label}</Label>
			<Input
				type={type}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				maxLength={maxLength}
			/>
		</Wrapper>
	)
}
