import * as React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import { WHITE_COLOR } from "../../utils/colors";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
`;

const LottieContainer = styled.div`
	width: 90px;
	height: 90px;
	background-color: ${WHITE_COLOR};
	border-radius: 50%;
`;

const Text = styled.p`
	text-align: center;
	color: ${WHITE_COLOR};
	font-weight: 400;
	font-size: 1.1em;
`;

const Heading = styled.h1`
	color: ${WHITE_COLOR};
	font-weight: 100;
	font-size: 1.8em;
`;

const defaultOptions = {
	loop: false,
	autoplay: true,
};

interface Props {
	title: string;
	icon: string;
	description: string;
}

function FactItem({ title, icon, description }: Props) {
	return (
		<Container>
			<Heading>{title}</Heading>
			<LottieContainer>
				<Lottie
					options={{ ...defaultOptions, animationData: icon }}
					speed={0.5}
				/>
			</LottieContainer>
			<Text>{description}</Text>
		</Container>
	);
}

export default React.memo(FactItem);
