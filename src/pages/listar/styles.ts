import styled from "styled-components"

export const Wrapper = styled.div`
	align-items: center;
	min-width: 450px;
	justify-content: space-around;
	border: 1px solid #ddd;
	border-radius: 10px;
	padding: 10px;
	margin-top: 50px;
	background: #f0f0f0;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	@media (max-width: 768px) {
		width: 100%;
	}
`
