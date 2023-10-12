/** @format */

import Image from "next/image";

export default function CertificatePage() {
	return (
		<section id="certificatePage" className="certificatePage pb-10">
			<div className="container-xxl container-fluid">
				<h2 className="text-4xl fw-bold color-palette-5 text-center mb-0">
					Certificate
				</h2>
				<div className="aboutDivider" />
				<div
					className="d-flex justify-content-center gap-lg-0 gap-4 mt-4"
					data-aos="fade-up"
				>
					<div className="list-item">
						<Image
							className="pe-2"
							src="/img/certificate1.png"
							alt=""
							width={469}
							height={332}
						/>
						<Image
							className="pe-2"
							src="/img/certificate2.png"
							alt=""
							width={469}
							height={332}
						/>
						<Image
							className="pe-2"
							src="/img/certificate3.png"
							alt=""
							width={469}
							height={332}
						/>
						<Image
							className="pe-2"
							src="/img/certificate4.png"
							alt=""
							width={469}
							height={332}
						/>
						<Image
							className="pe-2"
							src="/img/certificate5.png"
							alt=""
							width={469}
							height={332}
						/>
						<Image
							className="pe-2"
							src="/img/certificate6.png"
							alt=""
							width={469}
							height={332}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
