/**
 * /* eslint-disable react/jsx-no-target-blank
 *
 * @format
 */

/** @format */

import Image from "next/image";

export default function ProjectsPage() {
	return (
		<section id="projectsPage" className="projectsPage pb-10">
			<div className="container-xxl container-fluid">
				<h2 className="text-4xl fw-bold color-palette-6 text-center mb-0">
					Projects
				</h2>
				<div className="aboutDivider" />
				<div
					className="d-flex justify-content-center gap-lg-0 gap-4 mt-4"
					data-aos="fade-up"
				>
					<div className="list-item">
						<a
							className="projImage text-sm"
							href="https://bookshelfapps.vercel.app/"
							target="_blank"
							role="button"
							rel="noreferrer"
						>
							<Image
								className="pe-2"
								src="/img/project1.png"
								alt=""
								width={470}
								height={290}
							/>
						</a>
						<a
							className="projImage text-sm"
							href="https://github.com/msyahreza/skripsi-aksara-jawa-master"
							target="_blank"
							role="button"
							rel="noreferrer"
						>
							<Image
								className="pe-2"
								src="/img/project2.png"
								alt=""
								width={470}
								height={290}
							/>
						</a>
						<a
							className="projImage text-sm"
							href="https://github.com/msyahreza/GatotKaca-master"
							target="_blank"
							role="button"
							rel="noreferrer"
						>
							<Image
								className="pe-2"
								src="/img/project3.png"
								alt=""
								width={470}
								height={290}
							/>
						</a>
					</div>
				</div>
				<div
					className="d-flex justify-content-center gap-lg-0 gap-4 mt-4"
					data-aos="fade-up"
				>
					<div className="list-item">
						<a
							className="projImage text-sm"
							href="https://github.com/msyahreza/RestaurantApp"
							target="_blank"
							role="button"
							rel="noreferrer"
						>
							<Image
								className="list-item-icon"
								src="/img/project4.png"
								alt=""
								width={504}
								height={486}
							/>
						</a>
					</div>
				</div>
				<div className="roundedDivider" data-aos="fade-up" />
			</div>
		</section>
	);
}
