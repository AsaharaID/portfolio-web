/** @format */
import Image from "next/image";
import Menu from "./menu";
import ToogleMenu from "./toogleMenu";

export default function Navbar() {
	return (
		<section>
			<nav className="navbar navbar-expand-lg navbar-dark pt-lg-40 ps-lg-120">
				<div className="container-fluid">
					<ToogleMenu />
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav text-lg gap-lg-0 gap-2">
							<Menu title="Home" href="/" />
							<Menu title="About" href="/games" />
							<Menu title="Projects" href="/" />
							<Menu title="Certificate" href="/" />
						</ul>
					</div>
				</div>
			</nav>
		</section>
	);
}
