import * as React from "react";
import styled from "styled-components";
import { MAIN_COLOR, WHITE_COLOR } from "../../utils/colors";
import PlayIcon from "../common/PlayIcon";

const Button = styled.button`
	text-transform: uppercase;
	text-decoration: underline;
	border: 0;
	background-color: transparent;
	color: ${WHITE_COLOR};
	font-size: 1em;
	padding: 10px 20px;
	transition: 0.3s;
	display: flex;
	flex-direction: row;
	align-items: center;
	outline: none;
	&:hover {
		background-color: ${MAIN_COLOR};
		border-radius: 2px;
		cursor: pointer;
	}
	&:focus {
		outline: none;
	}
`;

interface Props {
	children: string;
	onClick: () => {};
}

function PlayButton({ children, onClick }: Props) {
	return (
		<Button onClick={onClick} aria-label="Play">
			<PlayIcon style={{ marginRight: 5 }} />
			{children}
		</Button>
	);
}

export default PlayButton;
