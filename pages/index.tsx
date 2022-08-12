/** @format */

import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/navbar";
import MainBanner from "../components/MainBanner";
import AboutPage from "../components/aboutPage";
import ProjectsPage from "../components/projectsPage";

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Navbar />
			<MainBanner />
			<AboutPage />
			<ProjectsPage />
			{/* <Reached />
			<Story />
			<Footer /> */}
		</>
	);
}
