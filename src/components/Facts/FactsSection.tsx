import * as React from "react";
import styled from "styled-components";
import { factsData } from "../../utils/data";
import BackgroundImage from "../common/BackgroundImage";
import FactItem from "./FactItem";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	justify-content: center;
	padding: 80px 0;
`;

const FactsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

function FactsSection() {
	return (
		<Container>
			<BackgroundImage />
			<FactsContainer>
				{factsData.map(fact => (
					<FactItem
						key={fact.title}
						title={fact.title}
						icon={fact.icon}
						description={fact.description}
					/>
				))}
			</FactsContainer>
		</Container>
	);
}

export default React.memo(FactsSection);
