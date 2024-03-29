import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-background-image";
import * as React from "react";
import styled from "styled-components";
import { COLOR_16 } from "../../utils/colors";

const StyledImg = styled(Img)`
	position: unset !important;
	background-position: 50% 0px;
	background-attachment: fixed;
	z-index: -1;
	opacity: initial !important;
	&::before {
		background-blend-mode: darken;
		background-color: ${COLOR_16};
	}
`;

const VideoScreenshotImage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "video_screenshot.png" }) {
				childImageSharp {
					fluid(quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default VideoScreenshotImage;
