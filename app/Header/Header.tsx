import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import '../styles/menu.scss';

const Header = () => {
	return (
		<header>
			<div className="menu-navbar">
				<Image
					className="clock-image"
					src='/clock.jpg'
					alt="Description"
					width={40}
					height={40}
				/>
				<Menu />
			</div>
		</header>
	);
};

export default Header;