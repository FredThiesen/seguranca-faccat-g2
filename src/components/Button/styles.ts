import styled from "styled-components"

export const StyledButton = styled.button`
	margin-top: 10px;
	//remove native button style
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background: #ddd;
	cursor: pointer;
	outline: none;
	height: 100%;

	font-weight: bold;
	color: #aaa;
	text-transform: uppercase;
	font-size: 1rem;
	padding-right: 10px;
	padding-left: 10px;
	padding-top: 8px;
	padding-bottom: 8px;
	border-radius: 5px;

	&:hover {
		background: #fff;
		transition: 0.2s ease-in-out;
	}
`
