import AccessTimeIcon from "@material-ui/icons/AccessTime";
import BuildIcon from "@material-ui/icons/Build";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import StarRateIcon from "@material-ui/icons/StarRate";
import * as React from "react";
import styled from "styled-components";
import { COLOR_11, COLOR_3, MAIN_COLOR } from "../../utils/colors";
import BenefitItem from "./BenefitItem";

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 70px 0;
	background-color: ${COLOR_11};
`;

const Title = styled.h1`
	color: ${COLOR_3};
	text-transform: uppercase;
	margin: 0;
	font-weight: 300;
	position: relative;
	padding-bottom: 10px;
	font-size: 2.2em;
	&::before {
		border-bottom: 3px dashed ${MAIN_COLOR};
		content: "";
		height: 2px;
		width: 65px;
		position: absolute;
		bottom: 0;
		transform: translateX(-50%);
		left: 50%;
	}
`;

const ItemsContainer = styled.div`
	display: flex;
	width: 75%;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin-top: 60px;
`;

interface Props {
	id: string;
}

const benefits = [
	{
		title: "Save Time",
		description:
			"Spend less time in meetings and email. More time managing your project.",
		icon: AccessTimeIcon,
		sideAnimation: "left",
	},
	{
		title: "Fix Your Backlog",
		description: "Keep ideas in Incubie, and proven concepts in your backlog.",
		icon: BuildIcon,
		sideAnimation: "right",
	},
	{
		title: "Prioritize",
		description:
			"Discover what is high priority by learning what users and employees vote most",
		icon: FormatListNumberedIcon,
		sideAnimation: "left",
	},
	{
		title: "Boost Employee Engagement",
		description:
			"Give everyone the chance to voice ideas -- reduce silos and remote work isolation.",
		icon: SentimentVerySatisfiedIcon,
		sideAnimation: "right",
	},
	{
		title: "Work On What Matters",
		description:
			"Ensure developers are spending their time on features that are well vetted.",
		icon: ShowChartIcon,
		sideAnimation: "left",
	},
	{
		title: "Improve Customer Satisfaction",
		description: "Learn what your users really need and react with confidence.",
		icon: StarRateIcon,
		sideAnimation: "right",
	},
];

function BenefitsSection({ id }: Props) {
	return (
		<Container id={id}>
			<Title>Benefits</Title>
			<ItemsContainer>
				{benefits.map(benefit => {
					return (
						<BenefitItem
							key={benefit.title}
							title={benefit.title}
							description={benefit.description}
							icon={benefit.icon}
							sideAnimation={benefit.sideAnimation as "left"}
						/>
					);
				})}
			</ItemsContainer>
		</Container>
	);
}

export default BenefitsSection;
