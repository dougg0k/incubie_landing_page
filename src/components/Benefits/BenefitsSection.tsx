import * as React from "react";
import { Waypoint } from "react-waypoint";
import styled from "styled-components";
import { COLOR_11, COLOR_3, MAIN_COLOR } from "../../utils/colors";
import { benefitsData } from "../../utils/data";
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

function BenefitsSection({ id }: Props) {
	const [isRunning, setIsRunning] = React.useState(false);
	return (
		<Waypoint onEnter={() => setIsRunning(true)}>
			<Container id={id}>
				<Title>Benefits</Title>
				<ItemsContainer>
					{benefitsData.map(benefit => {
						return (
							<BenefitItem
								key={benefit.title}
								title={benefit.title}
								description={benefit.description}
								icon={benefit.icon}
								sideAnimation={benefit.sideAnimation as string}
								animationDuration={benefit.animationDuration}
								isRunning={isRunning}
							/>
						);
					})}
				</ItemsContainer>
			</Container>
		</Waypoint>
	);
}

export default React.memo(BenefitsSection);
