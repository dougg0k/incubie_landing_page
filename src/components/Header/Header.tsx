import * as React from "react";
import useModal from "react-hooks-use-modal";
import styled from "styled-components";
import { COLOR_12, MAIN_COLOR, WHITE_COLOR } from "../../utils/colors";
import {
	HEADER_HEIGHT,
	RESPONSIVE_BUTTON_MENU_WIDTH,
} from "../../utils/constants";
import { useWindowSize } from "../../utils/helpers";
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
	z-index: 1;
	width: 100%;
	height: ${(props: StyledHeaderProps) =>
		props.isCollapsed ? "auto" : HEADER_HEIGHT + "px"};
	padding: 10px 0;
	background-color: ${(props: StyledHeaderProps) =>
		props.isCollapsed ? COLOR_12 : "transparent"};
	transition: background 0.4s ease-in-out, padding 0.4s ease-in-out;
	@media (max-width: 768px) {
		justify-content: space-between;
	}
`;

const Nav = styled.nav``;

interface UlProps {
	isOpen: boolean;
}

const Ul = styled.ul`
	display: flex;
	flex-direction: row;
	@media (max-width: 768px) {
		flex-direction: column;
		margin-top: 100px;
	}
`;

const Li = styled.li`
	list-style-type: none;
	margin-right: 20px;
	@media (max-width: 768px) {
		margin-bottom: 20px;
	}
`;

const A = styled.a`
	text-transform: uppercase;
	text-decoration: none;
	color: ${WHITE_COLOR};
	font-size: 0.9em;
	border: 0;
	outline: none;
	filter: contrast(1.5);
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
	@media (max-width: 768px) {
		margin-left: 30px;
	}
`;

const MobileButton = styled.button`
	margin-right: 30px;
	background: none;
	outline: none;
	border: 2px solid ${MAIN_COLOR};
	width: 50px;
	height: 35px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	color: ${MAIN_COLOR};
	&:active {
		background-color: ${MAIN_COLOR};
		color: ${WHITE_COLOR};
	}
`;

const IconBar = styled.span`
	height: 2px;
	margin: 2px 0;
	background-color: ${MAIN_COLOR};
	width: 22px;
`;

const SideBar = styled.div`
	background-color: ${MAIN_COLOR};
	left: 0;
	top: 0;
	bottom: 0;
	width: 300px;
	height: 100vh;
	z-index: 150;
	position: fixed;
`;

interface BaseProps {
	firstOnClick: () => void;
	secondOnClick: () => void;
	thirdOnClick: () => void;
}

interface Props extends BaseProps {
	logoOnClick: () => void;
	isCollapsed?: boolean;
}

function NavMenu({ firstOnClick, secondOnClick, thirdOnClick }: BaseProps) {
	return (
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
	);
}

function Header({
	logoOnClick,
	firstOnClick,
	secondOnClick,
	thirdOnClick,
	isCollapsed = false,
}: Props) {
	const [Modal, open] = useModal("index-page", true);
	const { width } = useWindowSize();
	return (
		<>
			<Modal>
				<SideBar>
					<NavMenu
						firstOnClick={firstOnClick}
						secondOnClick={secondOnClick}
						thirdOnClick={thirdOnClick}
					/>
				</SideBar>
			</Modal>
			<StyledHeader isCollapsed={isCollapsed}>
				<ImageContainer onClick={logoOnClick}>
					<LogoHorizontalImage />
				</ImageContainer>
				{width && width < RESPONSIVE_BUTTON_MENU_WIDTH ? (
					<MobileButton onClick={open} aria-label="Mobile menu">
						<>
							<IconBar />
							<IconBar />
							<IconBar />
						</>
					</MobileButton>
				) : (
					<NavMenu
						firstOnClick={firstOnClick}
						secondOnClick={secondOnClick}
						thirdOnClick={thirdOnClick}
					/>
				)}
			</StyledHeader>
		</>
	);
}

export default Header;
