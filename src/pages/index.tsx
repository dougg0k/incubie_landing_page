import * as React from "react";
import styled from "styled-components";
import BenefitsSection from "../components/Benefits/BenefitsSection";
import FactsSection from "../components/Facts/FactsSection";
import FeaturesSection from "../components/Features/FeaturesSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero/HeroSection";
import TourSection from "../components/Tour/TourSection";
import { HEADER_HEIGHT } from "../utils/constants";
import { scrollToHashId } from "../utils/helpers";
import useWindowScrollPosition from "../utils/useWindowScrollPosition";

const Container = styled.div``;

function IndexPage() {
	const position = useWindowScrollPosition({ throttle: 200 });
	const isCollapsed = position.y > 10;
	return (
		<Container id="index-page">
			<Header
				logoOnClick={() => scrollToHashId("#hero", HEADER_HEIGHT)}
				firstOnClick={() => scrollToHashId("#features", HEADER_HEIGHT)}
				secondOnClick={() => scrollToHashId("#tour", HEADER_HEIGHT)}
				thirdOnClick={() => scrollToHashId("#benefits", HEADER_HEIGHT)}
				isCollapsed={isCollapsed}
			/>
			<HeroSection id="hero" />
			<FactsSection />
			<FeaturesSection id="features" />
			<TourSection id="tour" />
			<BenefitsSection id="benefits" />
			<Footer />
		</Container>
	);
}

export default IndexPage;
