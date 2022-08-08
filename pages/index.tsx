/** @format */

import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/navbar";
import MainBanner from "../components/MainBanner";

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Navbar />
			<MainBanner />
			{/* <TransactionStep />
			<FeaturedGame />
			<Reached />
			<Story />
			<Footer /> */}
		</>
	);
}
