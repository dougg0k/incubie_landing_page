import * as React from "react";
import styled from "styled-components";
import { COLOR_5, COLOR_7 } from "../../utils/colors";
import SlackLogoImage from "./SlackLogoImage";

const Container = styled.div`
	background-color: ${COLOR_5};
	display: flex;
	flex-direction: row;
	border: 1px solid ${COLOR_7};
	border-radius: 6px;
	margin-bottom: 10px;
	width: 490px;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const LeftTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px 10px;
	word-wrap: break-word;
	@media (max-width: 768px) {
		width: 65%;
	}
`;

const TitleText = styled.span`
	font-size: 0.95em;
`;

const DescriptionText = styled.span`
	font-size: 0.8em;
`;

const LinkText = styled.span`
	font-size: 0.85em;
	margin-top: 10px;
`;

const RightText = styled.span`
	text-align: center;
`;

const RightTextContainer = styled.div`
	border-left: 1px solid ${COLOR_7};
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 90px;
	@media (max-width: 768px) {
		float: right;
	}
`;

const ImageContainer = styled.div`
	width: 50px;
	height: auto;
	padding: 15px 10px;
	align-self: center;
`;

interface Props {
	title: string;
	description: string;
	link: string;
}

function FeedbackSlack({ title, description, link }: Props) {
	return (
		<Container>
			<ImageContainer>
				<SlackLogoImage />
			</ImageContainer>
			<LeftTextContainer>
				<TitleText>{title}</TitleText>
				<DescriptionText>{description}</DescriptionText>
				<LinkText>{link}</LinkText>
			</LeftTextContainer>
			<RightTextContainer>
				<RightText>Close</RightText>
			</RightTextContainer>
		</Container>
	);
}

export default FeedbackSlack;
