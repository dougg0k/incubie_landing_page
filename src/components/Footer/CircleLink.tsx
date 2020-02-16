import * as React from "react";
import styled from "styled-components";
import { MAIN_COLOR, WHITE_COLOR } from "../../utils/colors";

const Anchor = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${WHITE_COLOR};
	border-radius: 50%;
	height: 34px;
	width: 34px;
	&:hover {
		cursor: pointer;
		background-color: ${MAIN_COLOR};
		border-color: ${MAIN_COLOR};
	}
`;

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children?: React.ReactNode;
}

function CircleLink({ children, ...props }: Props) {
	return <Anchor {...props}>{children}</Anchor>;
}

export default CircleLink;
