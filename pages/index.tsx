/** @format */

import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/navbar";
import MainBanner from "../components/MainBanner";
import AboutPage from "../components/aboutPage";

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Navbar />
			<MainBanner />
			<AboutPage />
			{/* <FeaturedGame />
			<Reached />
			<Story />
			<Footer /> */}
		</>
	);
}
