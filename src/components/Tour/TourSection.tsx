import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import * as React from "react";
import useModal from "react-hooks-use-modal";
import styled from "styled-components";
import { COLOR_13, MAIN_COLOR, WHITE_COLOR } from "../../utils/colors";
import VideoScreenshotImage from "./VideoScreenshotImage";

const Container = styled.div`
	height: 275px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h2`
	color: ${WHITE_COLOR};
	font-weight: 300;
	text-transform: capitalize;
	font-size: 1.7em;
`;

const SecondText = styled.h3`
	color: ${WHITE_COLOR};
	font-weight: 300;
	text-transform: capitalize;
	font-size: 1.4em;
`;

const Button = styled.button`
	background: transparent;
	outline: none;
	border: none;
	color: ${MAIN_COLOR};
	&:hover {
		cursor: pointer;
		color: ${COLOR_13};
	}
`;

interface Props {
	id: string;
}

function TourSection({ id }: Props) {
	const [Modal, open] = useModal("index-page");
	return (
		<>
			<Modal>
				<div>
					<iframe
						width="600"
						height="315"
						src="https://www.youtube.com/embed/4UcOnyng44g"
						frameBorder="0"
						allow="accelerometer; encrypted-media; gyroscope;"
						allowFullScreen
					></iframe>
				</div>
			</Modal>
			<Container id={id}>
				<VideoScreenshotImage />
				<Title>Progressive Project Leads Only.</Title>
				<SecondText>Take the tour</SecondText>
				<Button onClick={open}>
					<PlayCircleFilledIcon style={{ width: 50, height: 50 }} />
				</Button>
			</Container>
		</>
	);
}

export default TourSection;
