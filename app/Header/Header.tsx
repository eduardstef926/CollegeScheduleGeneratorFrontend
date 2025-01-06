'use client';
import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import '../styles/menu.scss';

const Header = () => {
	const router = useRouter();

	const returnToHomePager = () => {
		router.push('/');
	}

	return (
		<div className="menu-navbar">
			<Image
				className="clock-image"
				src='/clock.jpg'
				alt="Description"
				onClick={returnToHomePager}
				width={40}
				height={40}
			/>
			<Menu />
		</div>
	);
};

export default Header;