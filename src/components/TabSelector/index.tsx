import React from "react"
import { Wrapper, WrapperTab } from "./styles"

interface TabSelectorProps {
	selectedTab: "listar" | "consultar" | "cadastrar"
	onSelectTab: (tab: "listar" | "consultar" | "cadastrar") => void
}

export const TabSelector = (props: TabSelectorProps) => {
	const { selectedTab } = props
	const { onSelectTab } = props

	return (
		<Wrapper>
			<WrapperTab
				selected={selectedTab === "listar"}
				onClick={() => onSelectTab("listar")}
			>
				listar
			</WrapperTab>
			<WrapperTab
				selected={selectedTab === "cadastrar"}
				onClick={() => onSelectTab("cadastrar")}
			>
				cadastrar
			</WrapperTab>
			<WrapperTab
				selected={selectedTab === "consultar"}
				onClick={() => onSelectTab("consultar")}
			>
				consultar
			</WrapperTab>
		</Wrapper>
	)
}
