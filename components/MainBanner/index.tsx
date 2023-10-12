/** @format */

import Head from "next/head";
import Image from "next/image";
export default function MainBanner() {
	return (
		<section className="header pt-lg-100 pb-60 mb-25" id="homepage">
			<Head>
				<title>Portfolio Muhamad Syah Reza</title>
			</Head>
			<div className="container-xxl container-fluid">
				<div className="row gap-lg-0 gap-1">
					<div className="col-lg-6 col-12 my-auto">
						<p className="text-support text-3xl color-palette-6">Hello, I Am</p>
						<h1 className="header-title color-palette-5 fw-bold">
							Muhamad Syah Reza
						</h1>
						<p className="mt-0 mb-20 text-xl color-palette-6">
							Bachelor degree of informatics at Amikom Yogyakarta
							University. I was specialized at front-end web developer and
							front-end flutter developer. Now i work as Web Developer using C#(ASP.NET MVC)
							I am very interested in the IT world and always learn when I find new things related to it.
						</p>
						<div
							className="d-flex flex-lg-row flex-column pb-4 gap-5"
							data-aos="fade-up"
						>
							<a
								className="btn-email text-sm"
								href="mailto: muhamadsyahr45@gmail.com"
								role="button"
							>
								<Image
									src="/img/email-new.png"
									alt=""
									width={158}
									height={66}
								/>
							</a>
							<a
								className="btn-linkedin text-sm"
								href="https://www.linkedin.com/in/m-syah-reza"
								target="_blank"
								role="button"
								rel="noreferrer"
							>
								<Image
									src="/img/linkedin-new.png"
									alt=""
									width={66}
									height={66}
								/>
							</a>
							<a
								className="btn-instagram text-sm"
								href="https://www.instagram.com/muhamadsyahreza"
								role="button"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="/img/instagram-new.png"
									alt=""
									width={66}
									height={66}
								/>
							</a>
							<a
								className="btn-github text-sm"
								href="https://github.com/msyahreza"
								role="button"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="/img/githab-new.png"
									alt=""
									width={66}
									height={66}
								/>
							</a>
						</div>
						<div
							className="d-flex flex-lg-row flex-column gap-0 "
							data-aos="fade-up"
						>
							<a
								className="btn-cv text-lg color-palette-5 my-auto text-center"
								href="https://drive.google.com/file/d/1ZijSAl6YqjeNeOrFMHHgSj5lCyjcWrx1/view?usp=sharing"
								role="button"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="/img/download-new.png"
									alt=""
									width={19}
									height={22}
								/>{" "}
								Download CV
							</a>
						</div>
					</div>
					<div className="col-lg-6 col-12	 d-lg-block d-none">
						<div className="d-flex justify-content-lg-end justify-content-center me-lg-6">
							<div className="position-relative" data-aos="zoom-in">
								<img
									src="/img/fotoprofil.jpg"
									className="mainbanner-img"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="roundedDivider" />
			</div>
		</section>
	);
}
