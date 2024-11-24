import React from 'react';
import './Menu.scss';

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
	return (
		<div className="menu-list">
			<p>Home</p>
			<p>Pages</p>
			<p>Features</p>
		</div>
	);
};

export default Menu;