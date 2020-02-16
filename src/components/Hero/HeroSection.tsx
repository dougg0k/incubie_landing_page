import * as React from "react";
import useModal from "react-hooks-use-modal";
import Slide from "react-reveal/Slide";
import styled from "styled-components";
import { WHITE_COLOR } from "../../utils/colors";
import BackgroundImage from "../common/BackgroundImage";
import Anchor from "./Anchor";
import PlayButton from "./PlayButton";
import WorkingTogetherImage from "./WorkingTogetherImage";

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	padding-top: 160px;
	position: relative;
	padding-bottom: 125px;
	&::before {
		background: rgba(255, 255, 255, 0.1);
		width: 100%;
		height: 100%;
		position: absolute;
		content: "";
		top: 0;
		left: 0;
	}
`;

const LeftSide = styled.div`
	width: 460px;
	z-index: 0;
	display: flex;
	flex-direction: column;
	margin-right: 30px;
`;

const RightSide = styled.div`
	width: 700px;
	z-index: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Heading = styled.h1`
	color: ${WHITE_COLOR};
	text-transform: uppercase;
	font-weight: 300;
	width: 400px;
	font-size: 2.1em;
`;

const MidText = styled.p`
	color: ${WHITE_COLOR};
	font-weight: 200;
	font-size: 1.3em;
	margin-bottom: 40px;
`;

const BottomButtonTextStyle = styled.p`
	color: ${WHITE_COLOR};
	font-style: italic;
`;

interface Props {
	id: string;
}

function HeroSection({ id }: Props) {
	const [Modal, open] = useModal("index-page");
	return (
		<>
			<Modal>
				<div>
					<iframe
						width="600"
						height="315"
						src="https://www.youtube.com/embed/G88_dkVcIT8"
						frameBorder="0"
						allow="accelerometer; encrypted-media; gyroscope"
						allowFullScreen
					></iframe>
				</div>
			</Modal>
			<Container id={id}>
				<BackgroundImage />
				<Slide left duration={2000}>
					<LeftSide>
						<Heading>Field feedback to create great products</Heading>
						<MidText>
							Centralize feedback from users, clients and staff to make informed
							product decisions.
						</MidText>
						<Anchor href="https://beta.incubie.com/signup">
							Start the beta for free
						</Anchor>
						<BottomButtonTextStyle>
							*Exclusive beta access available for a limited time
						</BottomButtonTextStyle>
					</LeftSide>
				</Slide>
				<Slide right duration={2000}>
					<RightSide>
						<WorkingTogetherImage />
						<PlayButton onClick={open}>See how it works</PlayButton>
					</RightSide>
				</Slide>
			</Container>
		</>
	);
}

export default HeroSection;
