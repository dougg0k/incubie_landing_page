import * as React from "react";
import styled from "styled-components";
import IconIdea from "../../images/icon-idea.json";
import IconNotes from "../../images/icon-notes.json";
import IconTarget from "../../images/icon-target.json";
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
	justify-content: space-around;
	align-items: center;
`;

const facts = [
	{
		title: "Ideate",
		icon: IconIdea,
		description: "Discover Fresh New Ideas From Other Perspectives.",
	},
	{
		title: "Collaborate",
		icon: IconTarget,
		description: "Come Together In One Place To Discuss And Solve Issues",
	},
	{
		title: "Communicate",
		icon: IconNotes,
		description: "Discuss In A Central Place And Break Down Silos.",
	},
];

function FactsSection() {
	return (
		<Container>
			<BackgroundImage />
			<FactsContainer>
				{facts.map(fact => (
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

export default FactsSection;
