import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { COLOR_4, MAIN_COLOR, WHITE_COLOR } from "../../utils/colors";
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
				<CircleLink
					href="https://www.facebook.com/incubie/"
					target="_blank"
					rel="noreferrer"
					aria-label="Facebook"
				>
					<FacebookIcon style={{ color: WHITE_COLOR }} fontSize="small" />
				</CircleLink>
				<CircleLink
					href="https://twitter.com/IncubieApp"
					target="_blank"
					rel="noreferrer"
					aria-label="Twitter"
				>
					<TwitterIcon style={{ color: WHITE_COLOR }} fontSize="small" />
				</CircleLink>
				<CircleLink
					href="https://www.youtube.com/channel/UCtUUmRBPdWuWdB-3KjMi3xw"
					target="_blank"
					rel="noreferrer"
					aria-label="Youtube"
				>
					<YouTubeIcon style={{ color: WHITE_COLOR }} fontSize="small" />
				</CircleLink>
				<CircleLink
					href="https://www.linkedin.com/company/incubie/"
					target="_blank"
					rel="noreferrer"
					aria-label="Linkedin"
				>
					<LinkedInIcon style={{ color: WHITE_COLOR }} fontSize="small" />
				</CircleLink>
			</LinksContainer>
			<Text>©Copyright 2020 Incubie | All right reserved.</Text>
			<CommonLink to="/tos">Terms of Service</CommonLink>
		</Container>
	);
}

export default Footer;
