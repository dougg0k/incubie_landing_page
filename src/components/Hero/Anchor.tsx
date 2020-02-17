import * as React from "react";
import styled from "styled-components";
import {
	COLOR_1,
	COLOR_14,
	COLOR_2,
	COLOR_3,
	WHITE_COLOR,
} from "../../utils/colors";

const AnchorStyled = styled.a`
	background-color: ${COLOR_1};
	color: ${WHITE_COLOR};
	border: none;
	outline: none;
	padding: 10px 20px;
	border-radius: 2px;
	box-shadow: 0 3px ${COLOR_14};
	text-transform: uppercase;
	transition: all 0.05s ease-in;
	text-decoration: none;
	text-align: center;
	font-weight: 500;
	filter: contrast(1.2);
	&:active {
		transform: translateY(4px);
		box-shadow: 0 2px ${COLOR_2};
	}
	&:hover {
		cursor: pointer;
		color: ${COLOR_3};
	}
`;

interface Props {
	children: React.ReactNode;
	href: string;
}

function Anchor({ children, href }: Props) {
	return <AnchorStyled href={href}>{children}</AnchorStyled>;
}

export default Anchor;
