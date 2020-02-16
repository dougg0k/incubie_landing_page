import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import * as React from "react";
import styled from "styled-components";
import { MAIN_COLOR, WHITE_COLOR } from "../../utils/colors";

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
	&:hover {
		background-color: ${MAIN_COLOR};
		border-radius: 2px;
		cursor: pointer;
	}
`;

interface Props {
	children: string;
	onClick: () => {};
}

function PlayButton({ children, onClick }: Props) {
	return (
		<Button onClick={onClick}>
			<PlayCircleFilledIcon fontSize="small" style={{ marginRight: 5 }} />
			{children}
		</Button>
	);
}

export default PlayButton;
