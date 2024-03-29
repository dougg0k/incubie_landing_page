import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-background-image";
import * as React from "react";
import styled from "styled-components";
import { COLOR_16 } from "../../utils/colors";

const StyledImg = styled(Img)`
	position: unset !important;
	background-position: 50% 0px;
	background-attachment: fixed;
	background-size: cover;
	z-index: -1;
	opacity: initial !important;
	&::before,
	&::after {
		background-blend-mode: darken;
		background: ${COLOR_16};
	}
`;

const BackgroundImage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "geometric_background.png" }) {
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

export default BackgroundImage;
