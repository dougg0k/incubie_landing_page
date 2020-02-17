import * as React from "react";
import { Waypoint } from "react-waypoint";
import styled, { css, keyframes } from "styled-components";
import { COLOR_3 } from "../../utils/colors";
import CommentsImage from "./CommentsImage";
import FeedbackEmail from "./FeedbackEmail";
import FeedbackSlack from "./FeedbackSlack";
import HomeboardImage from "./HomeboardImage";

const Container = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 70px 0;
`;

const Heading = styled.h2`
	font-weight: 300;
	font-size: 1.7em;
	color: ${COLOR_3};
	margin: 0;
	margin-bottom: 70px;
	text-align: center;
`;

const slideLeftAnimation = keyframes`
	0% {
    transform: translateX(-100%);
  }
  100% {
    transform: none;
  }
`;

interface AnimationProps {
	isRunning?: boolean;
	duration?: number;
}

const animationStyle = css`
	animation-fill-mode: both;
	animation-duration: ${(props: AnimationProps) =>
		props.duration ? props.duration : "2"}s;
	animation-delay: 0ms;
	animation-iteration-count: 1;
	animation-name: ${slideLeftAnimation};
	animation-play-state: ${(props: AnimationProps) =>
		props.isRunning ? "running" : "paused"};
`;

const FeatureContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0 25px;
	margin-bottom: 70px;
	${animationStyle};
	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 95%;
	}
`;

const FeatureTitle = styled.h3`
	font-weight: 300;
	color: ${COLOR_3};
	margin: 0;
	font-size: 1.3em;
	text-transform: capitalize;
	align-self: flex-start;
`;

const TitleContainer = styled.div`
	@media (max-width: 768px) {
		margin-top: 20px;
		align-self: flex-start;
	}
`;

const FeatureDescription = styled.p`
	font-weight: 300;
	color: ${COLOR_3};
	margin-top: 5px;
	line-height: 24px;
	text-align: start;
`;

const featureSides = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

interface SideProps {
	width?: number;
	height?: number;
}

const FeatureLeftSide = styled.div`
	${featureSides}
	width: ${(props: SideProps) => (props.width ? props.width + "px" : "auto")};
	height: ${(props: SideProps) => (props.height ? props.height + "px" : "auto")};
	margin-right: 30px;
	@media (max-width: 768px) {
		margin-right: 0;
		width: 100%;
		height: 100%;
	}
`;

const FeatureRightSide = styled.div`
	${featureSides}
	width: ${(props: SideProps) => (props.width ? props.width + "px" : "auto")};
	height: ${(props: SideProps) => (props.height ? props.height + "px" : "auto")};
	@media (max-width: 768px) {
		width: 100%;
		height: 100%;
	}
`;

const BottomText = styled.span``;

const BoldText = styled.span`
	font-weight: bold;
`;

interface Props {
	id: string;
}

function FeaturesSection({ id }: Props) {
	const [isRunning, setIsRunning] = React.useState(false);
	return (
		<Waypoint onEnter={() => setIsRunning(true)}>
			<Container id={id}>
				<Heading>
					Incubie is the platform that brings everyone&apos;s insight together.
				</Heading>
				<FeatureContainer isRunning={isRunning}>
					<FeatureLeftSide width={230}>
						<FeatureTitle>
							Gather Feedback From Customers, Clients & Teammates
						</FeatureTitle>
						<FeatureDescription>
							Ditch the spreadsheets and disorganized Trello boards. Incubie was
							made for this.
						</FeatureDescription>
					</FeatureLeftSide>
					<FeatureRightSide height={300}>
						<HomeboardImage />
					</FeatureRightSide>
				</FeatureContainer>
				<FeatureContainer isRunning={isRunning} duration={2.8}>
					<FeatureLeftSide height={300}>
						<CommentsImage />
					</FeatureLeftSide>
					<FeatureRightSide width={230}>
						<TitleContainer>
							<FeatureTitle>Prioritize Smarter</FeatureTitle>
						</TitleContainer>
						<FeatureDescription>
							Vote on and discuss ideas to get clarify up front. Implement what
							your team and users really need
						</FeatureDescription>
					</FeatureRightSide>
				</FeatureContainer>
				<FeatureContainer isRunning={isRunning} duration={3.4}>
					<FeatureLeftSide width={230}>
						<FeatureTitle>Realtime Feedback</FeatureTitle>
						<FeatureDescription>
							Receive notifications in email and Slack when your ideas or
							projects are engaged with.
						</FeatureDescription>
					</FeatureLeftSide>
					<FeatureRightSide>
						<FeedbackSlack
							title="New Idea Posted in Company Culture"
							description="What if we had a barista every Monday?"
							link="https://app.incubie.com/acme/compayculture"
						/>
						<FeedbackEmail email="app@incubie.com">
							<BottomText>
								Check it out! Your idea “
								<BoldText>Add Custom Email Tagging</BoldText>“{" "}
							</BottomText>
							<BottomText>
								in <BoldText>Email Features</BoldText> was just approved by
								Wiley Coyote{" "}
							</BottomText>
							<BottomText>
								and has been moved to the development backlog. Great work!
							</BottomText>
						</FeedbackEmail>
					</FeatureRightSide>
				</FeatureContainer>
			</Container>
		</Waypoint>
	);
}

export default FeaturesSection;
