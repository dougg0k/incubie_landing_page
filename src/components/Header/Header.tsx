import * as React from "react";
import styled from "styled-components";
import LogoHorizontalImage from "./LogoHorizontalImage";

const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Nav = styled.nav``;

const Ul = styled.ul`
	display: flex;
	flex-direction: row;
`;

const Li = styled.li`
	list-style-type: none;
`;

const A = styled.a``;

interface Props {
	firstOnClick: () => void;
	secondOnClick: () => void;
	thirdOnClick: () => void;
}

function Header({ firstOnClick, secondOnClick, thirdOnClick }: Props) {
	return (
		<StyledHeader>
			<LogoHorizontalImage />
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
						<A href="https://beta.incubie.com/login">Login</A>
					</Li>
				</Ul>
			</Nav>
		</StyledHeader>
	);
}

export default Header;
