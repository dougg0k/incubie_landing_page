import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { COLOR_4, MAIN_COLOR, WHITE_COLOR } from "../../utils/colors";
import { footerData } from "../../utils/data";
import LogoImage from "../common/LogoImage";
import CircleLink from "./CircleLink";

const Container = styled.div`
	height: 280px;
	background-color: ${COLOR_4};
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const LinksContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 250px;
	margin-top: 25px;
`;

const Text = styled.p`
	color: ${WHITE_COLOR};
	font-size: 0.95em;
`;

const CommonLink = styled(Link)`
	text-decoration: none;
	color: ${MAIN_COLOR};
`;

function Footer() {
	return (
		<Container>
			<LogoImage />
			<LinksContainer>
				{footerData.map(({ link, ariaLabel, icon: Icon }) => (
					<CircleLink
						key={link}
						href={link}
						target="_blank"
						rel="noreferrer"
						aria-label={ariaLabel}
					>
						<Icon style={{ color: WHITE_COLOR }} fontSize="small" />
					</CircleLink>
				))}
			</LinksContainer>
			<Text>©Copyright 2020 Incubie | All right reserved.</Text>
			<CommonLink to="/tos">Terms of Service</CommonLink>
		</Container>
	);
}

export default Footer;
