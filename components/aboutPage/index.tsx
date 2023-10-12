/** @format */
import Image from "next/image";
export default function AboutPage() {
	return (
		<section id="aboutPage" className="about">
			<div className="container-xxl container-fluid">
				<h2 className="text-4xl fw-bold color-palette-5 text-center mb-0">
					About
				</h2>
				<div className="aboutDivider" />
				<div className="row gap-lg-0 gap-4 mt-4" data-aos="fade-up">
					<div className="col-lg-4 me-0">
						<div className="card feature-card border-0">
							<p className="fw-semibold text-4xl mb-2 color-palette-5">
								Educations
							</p>
							<div className="aboutlistDivider" />
							<div className="list-wrapper">
								<div className="list-item-wrapper mb-4">
									<div className="list-bullet-main" />
									<div className="list-item">
										<div className="list-year text-xl">2018 - 2022</div>
										<div className="red-line"></div>
										<div className="list-title text-xl">Informatics</div>
										<div className="list-text text-lg">
											Amikom Yogyakarta University
										</div>
									</div>
								</div>
								<div className="list-item-wrapper mb-4">
									<div className="list-bullet" />
									<div className="list-item">
										<div className="list-year text-xl">2015 - 2018</div>
										<div className="list-title text-xl">Science</div>
										<div className="list-text text-lg">
											Senior High School 45 Jakarta
										</div>
									</div>
								</div>
								<div className="list-item-wrapper">
									<div className="list-bullet" />
									<div className="list-item">
										<div className="list-year text-xl">2012 - 2015</div>
										<div className="list-text text-lg">
											Junior High School 170 Jakarta
										</div>
									</div>
									<div className="white-line"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 me-0">
						<div className="card feature-card border-0">
							<p className="fw-semibold text-4xl mb-2 color-palette-5">
								Experiences
							</p>
							<div className="aboutlistDivider" />
							<div className="list-wrapper">
								<div className="list-item-wrapper mb-4">
									<div className="list-item">
										<div className="list-year text-xl">Apr - Present 2023</div>
										<div className="list-title text-xl">
											Web Developer (.NET)
										</div>
										<div className="list-text text-lg">
											PT. Tri Sapta Jaya (Kalbe Group)
										</div>
									</div>
								</div>
								<div className="list-item-wrapper mb-4">
									<div className="list-item">
										<div className="list-year text-xl">Oct - Apr 2023</div>
										<div className="list-title text-xl">Oracle Developer</div>
										<div className="list-text text-lg">
											PT. Tri Sapta Jaya (Kalbe Group)
										</div>
									</div>
								</div>
								<div className="list-item-wrapper mb-4">
									<div className="list-item">
										<div className="list-year text-xl">April - July 2021</div>
										<div className="list-title text-xl">
											DILo Game Production Batch 4
										</div>
										<div className="list-text text-lg">
											DILo Game Academy & Agate Academy
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 me-0">
						<div className="card feature-card border-0">
							<p className="fw-semibold text-4xl mb-2 color-palette-5">
								Tools & Skills
							</p>
							<div className="aboutlistDivider" />
							<div className="list-wrapper">
								<div className="list-item-wrapper mb-4">
									<div className="list-item">
										<Image
											className="list-item-icon"
											src="/img/vscode.png"
											alt=""
											width={80}
											height={80}
										/>
										<Image
											className="list-item-icon"
											src="/img/Figma.png"
											alt=""
											width={80}
											height={80}
										/>
										<Image
											className="list-item-icon"
											src="/img/Html5.png"
											alt=""
											width={80}
											height={80}
										/>

										<Image
											className="list-item-icon"
											src="/img/CSS3.png"
											alt=""
											width={80}
											height={80}
										/>
										<br />
										<Image
											className="list-item-icon"
											src="/img/Flutter.png"
											alt=""
											width={80}
											height={80}
										/>

										<Image
											className="pe-2"
											src="/img/Nodejs.png"
											alt=""
											width={80}
											height={80}
										/>

										<Image
											className="list-item-icon"
											src="/img/React.png"
											alt=""
											width={80}
											height={80}
										/>

										<Image
											className="list-item-icon"
											src="/img/Office 365.png"
											alt=""
											width={80}
											height={80}
										/>
										<br />
										<Image
											className="list-item-icon"
											src="/img/Vercel.png"
											alt=""
											width={244}
											height={55}
										/>
										<br />
										<Image
											className="list-item-icon"
											src="/img/Nextjs.png"
											alt=""
											width={121}
											height={72}
										/>
										<br />
										<Image
											className="list-item-icon"
											src="/img/net-logo.png"
											alt=""
											width={80}
											height={80}
										/>

										<Image
											className="list-item-icon"
											src="/img/csharp-logo.png"
											alt=""
											width={80}
											height={80}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="roundedDivider" data-aos="fade-up" />
				</div>
			</div>
		</section>
	);
}
