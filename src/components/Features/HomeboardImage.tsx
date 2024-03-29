import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";
import styled from "styled-components";

const StyledImage = styled(Img)`
	width: 490px;
	height: 300px;
	@media (max-width: 768px) {
		width: 95vw;
		height: 100%;
	}
`;

const HomeboardImage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "homeboard.png" }) {
				childImageSharp {
					fluid(quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return <StyledImage fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default HomeboardImage;
