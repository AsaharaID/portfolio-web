/**
 * /* eslint-disable @next/next/no-page-custom-font
 *
 * @format
 */

/**
 * /* eslint-disable @next/next/no-page-custom-font
 *
 * @format
 */

/* eslint-disable @next/next/no-sync-scripts */
/** @format */

import "../styles/globals.css";
import "../styles/utilities.css";
import "../styles/navbar.css";
import "../styles/homepage.css";
import "../styles/overview.css";
import "../styles/aboutPage.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				{/* Bootstrap Css */}
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
					crossOrigin="anonymous"
				/>
				{/* Google Font */}
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
				{/* AOS Animation */}
				<link
					href="https://unpkg.com/aos@2.3.1/dist/aos.css"
					rel="stylesheet"
				/>

				{/* Call Bootstrap JS */}
				<script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
					crossOrigin="anonymous"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
