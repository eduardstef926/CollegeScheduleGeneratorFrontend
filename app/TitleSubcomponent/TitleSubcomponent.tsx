import React from 'react';
import './TitleSubcomponent.scss';

interface TitleSubcomponentProps {}

export const TitleSubcomponent: React.FC<TitleSubcomponentProps> = () => {
	return (
		<div className="second-section">
			<div className="title-data">
				<p>Grow your skills, design your schedule</p>
			</div>
		</div>
	);
};

export default TitleSubcomponent;