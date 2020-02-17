import * as React from "react";
import styled from "styled-components";
import { COLOR_6, COLOR_7, COLOR_8, WHITE_COLOR } from "../../utils/colors";
import LogoImage from "../common/LogoImage";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 490px;
	height: 245px;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const Top = styled.div`
	background-color: ${COLOR_6};
	border: 1px solid ${COLOR_8};
	padding: 5px 0;
`;

const TopText = styled.span`
	margin-left: 20px;
	font-size: 0.9em;
	color: ${COLOR_7};
`;

const Bottom = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${COLOR_7};
	justify-content: center;
	align-items: center;
	padding: 25px 20px;
`;

const TextContainer = styled.div`
	text-align: center;
	margin-top: 10px;
	color: ${WHITE_COLOR};
`;

interface Props {
	email: string;
	children: React.ReactNode;
}

function FeedbackEmail({ email, children }: Props) {
	return (
		<Container>
			<Top>
				<TopText>From: {email}</TopText>
			</Top>
			<Bottom>
				<LogoImage width={80} />
				<TextContainer>{children}</TextContainer>
			</Bottom>
		</Container>
	);
}

export default FeedbackEmail;
