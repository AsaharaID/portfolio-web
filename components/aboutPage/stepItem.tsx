/** @format */
import Image from "next/image";
export interface StepItemProps {
	title: string;
	desc1: string;
	desc2: string;
}
export default function StepItem(props: StepItemProps) {
	const {  title, desc1, desc2 } = props;
	return (
		<div className="col-lg-4">
			<div className="card feature-card border-0">
				<p className="fw-semibold text-2xl mb-2 color-palette-6">{title}</p>
				<p className="text-lg color-palette-6 mb-0">
					{desc1}
					<br />
					{desc2}
				</p>
			</div>
		</div>
	);
}
