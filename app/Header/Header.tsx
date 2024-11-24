import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import './Menu.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
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