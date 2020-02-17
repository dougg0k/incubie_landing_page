import { SvgIconProps } from "@material-ui/core";
import * as React from "react";
import styled, { css, keyframes } from "styled-components";
import { COLOR_10, COLOR_9 } from "../../utils/colors";

const slideLeftAnimation = keyframes`
	0% {
    transform: translateX(-100%);
  }
  100% {
    transform: none;
  }
`;

const slideRightAnimation = keyframes`
	0% {
    transform: translateX(100%);
  }
  100% {
    transform: none;
  }
`;

interface AnimationProps {
	isRunning?: boolean;
	duration?: number;
	sideAnimation?: "left" | "right" | string;
}

const animationStyle = css`
	animation-fill-mode: both;
	animation-duration: ${(props: AnimationProps) =>
		props.duration ? props.duration : "2"}s;
	animation-delay: 0ms;
	animation-iteration-count: 1;
	animation-play-state: ${(props: AnimationProps) =>
		props.isRunning ? "running" : "paused"};
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 485px;
	height: 100px;
	margin-bottom: 30px;
	align-items: center;
	${animationStyle};
	${(props: AnimationProps) =>
		props.sideAnimation === "left" &&
		css`
			animation-name: ${slideLeftAnimation};
		`}
	${(props: AnimationProps) =>
		props.sideAnimation === "right" &&
		css`
			animation-name: ${slideRightAnimation};
		`}
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
	sideAnimation?: "left" | "right" | string;
	animationDuration?: number;
	isRunning?: boolean;
}

function BenefitItem({
	title,
	description,
	icon: Icon,
	sideAnimation,
	animationDuration,
	isRunning,
}: Props) {
	return (
		<Container
			isRunning={isRunning}
			duration={animationDuration}
			sideAnimation={sideAnimation}
		>
			<IconContainer>
				<Icon />
			</IconContainer>
			<TextContainer>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</TextContainer>
		</Container>
	);
}

export default React.memo(BenefitItem);
