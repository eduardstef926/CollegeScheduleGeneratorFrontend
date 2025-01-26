'use client';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/navigation';
import '../styles/menu.scss';

const Header = () => {
	const router = useRouter();
	const hoverLoginPage = () => {
		router.push('/login-page');
	};

	return (
		<div className="menu-navbar">
			<Logo />
			<div className="menu-list">
				<p>Home</p>
				<p>Pages</p>
				<p>Features</p>
			</div>
			<p onClick={hoverLoginPage}>
				LogIn
			</p>
		</div>
	);
};

export default Header;