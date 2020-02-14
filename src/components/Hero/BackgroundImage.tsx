import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";

const BackgroundImage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "geometric_background.png" }) {
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

export default BackgroundImage;
