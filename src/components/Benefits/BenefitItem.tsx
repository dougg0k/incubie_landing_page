import { SvgIconProps } from "@material-ui/core";
import * as React from "react";
import Slide from "react-reveal/Slide";
import styled from "styled-components";
import { COLOR_10, COLOR_9 } from "../../utils/colors";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 485px;
	height: 100px;
	margin-bottom: 30px;
	align-items: center;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const IconContainer = styled.div`
	background-color: ${COLOR_10};
	min-width: 50px;
	height: 50px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
	color: ${COLOR_9};
`;

const Title = styled.h3`
	font-weight: 300;
	font-size: 1.3em;
`;

const Description = styled.p`
	font-weight: 300;
	margin: 0;
`;

interface Props {
	title: string;
	description: string;
	icon: React.FC<SvgIconProps>;
	sideAnimation?: "left" | "right" | null;
}

function BenefitItem({ title, description, icon: Icon, sideAnimation }: Props) {
	return (
		<Slide left={sideAnimation === "left"} right={sideAnimation === "right"}>
			<Container>
				<IconContainer>
					<Icon />
				</IconContainer>
				<TextContainer>
					<Title>{title}</Title>
					<Description>{description}</Description>
				</TextContainer>
			</Container>
		</Slide>
	);
}

export default BenefitItem;
