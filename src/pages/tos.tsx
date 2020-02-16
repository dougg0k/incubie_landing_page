import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/common/BackgroundImage";
import { WHITE_COLOR } from "../utils/colors";
import { tosText } from "../utils/tosText";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

const Text = styled.span`
	color: ${WHITE_COLOR};
	font-size: 1.3em;
	white-space: pre-line;
	text-align: center;
	overflow-y: scroll;
	position: fixed;
	height: 100%;
	margin: 0;
`;

const TextContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const CommonLink = styled(Link)`
	color: ${WHITE_COLOR};
	text-decoration: none;
	border: 2px solid ${WHITE_COLOR};
	border-radius: 2px;
	padding: 5px 15px;
	width: 100px;
	text-align: center;
	margin-top: 15px;
	margin-bottom: 15px;
`;

function TosPage() {
	return (
		<Container>
			<BackgroundImage />
			<CommonLink to="/">Go Back</CommonLink>
			<TextContainer>
				<Text>{tosText}</Text>
			</TextContainer>
		</Container>
	);
}

export default TosPage;
