import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";
import styled from "styled-components";

interface Props {
	width?: number;
}

const StyledImage = styled(Img)`
	width: ${(props: Props) => (props.width ? `${props.width}px` : "70px")};
	height: auto;
`;

const LogoImage = ({ width }: Props) => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "favicon.png" }) {
				childImageSharp {
					fluid(quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return (
		<StyledImage
			width={width}
			fluid={data.placeholderImage.childImageSharp.fluid}
		/>
	);
};

export default LogoImage;
