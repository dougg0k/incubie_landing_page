import * as React from "react";
import styled from "styled-components";
import { COLOR_12, MAIN_COLOR, WHITE_COLOR } from "../../utils/colors";
import { HEADER_HEIGHT } from "../../utils/constants";
import LogoHorizontalImage from "./LogoHorizontalImage";

interface StyledHeaderProps {
	isCollapsed: boolean;
}

const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	z-index: 50;
	width: 100%;
	height: ${(props: StyledHeaderProps) =>
		props.isCollapsed ? "auto" : HEADER_HEIGHT + "px"};
	padding: 10px 0;
	background-color: ${(props: StyledHeaderProps) =>
		props.isCollapsed ? COLOR_12 : "transparent"};
	transition: background 0.4s ease-in-out, padding 0.4s ease-in-out;
`;

const Nav = styled.nav``;

const Ul = styled.ul`
	display: flex;
	flex-direction: row;
`;

const Li = styled.li`
	list-style-type: none;
	margin-right: 20px;
`;

const A = styled.a`
	text-transform: uppercase;
	text-decoration: none;
	color: ${WHITE_COLOR};
	font-size: 0.9em;
	border: 0;
	outline: none;
	&:hover {
		color: ${MAIN_COLOR};
		cursor: pointer;
	}
`;

const OutSideAnchor = styled(A)`
	font-weight: 700;
`;

const ImageContainer = styled.div`
	width: 130px;
	height: auto;
	&:hover {
		cursor: pointer;
	}
`;

interface Props {
	logoOnClick: () => void;
	firstOnClick: () => void;
	secondOnClick: () => void;
	thirdOnClick: () => void;
	isCollapsed: boolean;
}

function Header({
	logoOnClick,
	firstOnClick,
	secondOnClick,
	thirdOnClick,
	isCollapsed = false,
}: Props) {
	return (
		<StyledHeader isCollapsed={isCollapsed}>
			<ImageContainer onClick={logoOnClick}>
				<LogoHorizontalImage />
			</ImageContainer>
			<Nav>
				<Ul>
					<Li>
						<A onClick={firstOnClick}>Features</A>
					</Li>
					<Li>
						<A onClick={secondOnClick}>How it works</A>
					</Li>
					<Li>
						<A onClick={thirdOnClick}>Benefits</A>
					</Li>
					<Li>
						<OutSideAnchor href="https://beta.incubie.com/login">
							Login
						</OutSideAnchor>
					</Li>
				</Ul>
			</Nav>
		</StyledHeader>
	);
}

export default Header;
