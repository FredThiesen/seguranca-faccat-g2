import styled from "styled-components"

export const Wrapper = styled.div`
	margin-top: 50px;
	width: 50%;
	min-width: 450px;
	justify-content: space-around;
	flex-direction: row;
`

interface WrapperTabProps {
	selected: boolean
}

export const WrapperTab = styled.button<WrapperTabProps>`
	//remove native style from button element
	border: none;
	background: none;
	cursor: pointer;

	font-size: 1.5rem;
	padding-right: 10px;
	padding-left: 10px;
	padding-top: 5px;
	padding-bottom: 5px;
	border-radius: 40px;
	text-transform: uppercase;
	font-weight: bold;
	font-family: inherit;
	background: ${(props) => (props.selected ? "#f0f0" : "#ddd")};
	color: ${(props) => (props.selected ? "#444" : "#515151")};

	// add neon purple shadow when selected
	${(props) =>
		props.selected && `box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.8);`}
	transition: all 0.2s ease-in-out;
`
