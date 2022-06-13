import styled from "styled-components"

export const ActivityIndicator = styled.div`
	//loading indicator with infinite animation
	opacity: 0.5;
	display: block;
	width: 64px;
	height: 64px;
	margin: 60px;
	border-radius: 50%;
	border: 6px solid transparent;
	border-top: 6px solid #000;
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
