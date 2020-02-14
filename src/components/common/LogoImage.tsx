import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";

const LogoImage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "favicon.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default LogoImage;
