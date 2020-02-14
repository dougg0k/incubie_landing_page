import scrollTo from "gatsby-plugin-smoothscroll";
import * as React from "react";
import BenefitsSection from "../components/Benefits/BenefitsSection";
import FactsSection from "../components/Facts/FactsSection";
import FeaturesSection from "../components/Features/FeaturesSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero/HeroSection";
import TourSection from "../components/Tour/TourSection";

function IndexPage() {
	function scrollToHashId(hashId: string) {
		scrollTo(hashId);
	}
	return (
		<div>
			<Header
				firstOnClick={() => scrollToHashId("#features")}
				secondOnClick={() => scrollToHashId("#tour")}
				thirdOnClick={() => scrollToHashId("#benefits")}
			/>
			<HeroSection />
			<FactsSection />
			<FeaturesSection id="features" />
			<TourSection id="tour" />
			<BenefitsSection id="benefits" />
			<Footer />
		</div>
	);
}

export default IndexPage;
