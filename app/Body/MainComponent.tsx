'use client';
import "../styles/maincomponent.scss";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function MainComponent() {
	const router = useRouter();

	const handleSubmit = () => {
		router.push('/schedulepage');
	};

	return (
		<div className="main-page">
			<div className="schedule-description">
				<div className="schedule-text">
					<h1>Vizualize school and college schedule programs</h1>
					<p>
						Simple way to vizualize and create school schedules for schools and collegues around the world
					</p>
					<button
						className="view-button"
						onClick={handleSubmit}
					>
						VIEW
					</button>
				</div>
			</div>
			<Image
				src='/main-image.png'
				alt="Description"
				width={450}
				height={400}
			/>
		</div>
	);
};