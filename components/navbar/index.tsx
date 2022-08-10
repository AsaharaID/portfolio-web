/** @format */
import Image from "next/image";
import Menu from "./menu";
import ToogleMenu from "./toogleMenu";

export default function Navbar() {
	return (
		<section>
			<nav className="navbar navbar-expand-lg navbar-dark pt-20 ps-lg-120 pb-10 fixed-top">
				<div className="container-fluid">
					<ToogleMenu />
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav text-lg gap-lg-0 gap-2">
							<Menu title="Home" href="/#homepage" />
							<Menu title="About" href="/#aboutPage" />
							<Menu title="Projects" href="/#projectsPage" />
							<Menu title="Certificate" href="/#certificatePage" />
						</ul>
					</div>
				</div>
			</nav>
		</section>
	);
}
