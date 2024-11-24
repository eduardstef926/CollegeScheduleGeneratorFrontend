import './MainComponent.scss';
import Image from 'next/image';

const MainComponent = () => {
	return (
		<div className="main-page">
			<div className="schedule-description">
				<div className="schedule-text">
					<h1>Vizualize school and college schedule programs</h1>
					<p>
						Simple way to vizualize and create school schedules for schools and collegues around the world
					</p>
					<button className="view-button">
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

export default MainComponent;