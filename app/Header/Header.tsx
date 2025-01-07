'use client';
import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import '../styles/menu.scss';

const Header = () => {
	return (
		<div className="menu-navbar">
			<Logo />
			<Menu />
			<p>
				LogIn
			</p>
		</div>
	);
};

export default Header;