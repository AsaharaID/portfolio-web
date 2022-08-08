/** @format */

import Image from "next/image";
export default function MainBanner() {
	return (
		<section className="header pt-lg-60 pb-60">
			<div className="container-xxl container-fluid">
				<div className="row gap-lg-0 gap-1">
					<div className="col-lg-6 col-12 my-auto">
						<p className="text-support text-3xl color-palette-6">Hello, I Am</p>
						<h1 className="header-title color-palette-5 fw-bold">
							Muhamad Syah Reza
						</h1>
						<p className="mt-0 mb-20 text-xl color-palette-6">
							Fresh graduate bachelor degree of informatics at Amikom Yogyakarta
							University. I was specialized at front-end web developer and
							front-end flutter developer. I am very interested in the IT world
							and always learn when I find new things related to it.
						</p>
						<div className="d-flex flex-lg-row flex-column pb-4 gap-5">
							<a className="btn-email text-sm" href="#" role="button">
								<img src="/img/Email.png" alt="" />
							</a>
							<a className="btn-linkedin text-sm" href="#" role="button">
								<img src="/img/linkedin.png" alt="" />
							</a>
							<a className="btn-instagram text-sm" href="#" role="button">
								<img src="/img/instagram.png" alt="" />
							</a>
							<a className="btn-github text-sm" href="#" role="button">
								<img src="/img/githab.png" alt="" />
							</a>
						</div>
						<div className="d-flex flex-lg-row flex-column gap-0 ">
							<a
								className="btn-learn text-lg color-palette-5 my-auto text-center"
								href="#"
								role="button"
							>
								<img src="/img/download.png" alt="" /> Download CV
							</a>
						</div>
					</div>
					<div className="col-lg-6 col-12	 d-lg-block d-none">
						<div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
							<div className="position-relative" data-aos="zoom-in">
								<img
									src="/img/Archetto.jpg"
									className="mainbanner-img"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
