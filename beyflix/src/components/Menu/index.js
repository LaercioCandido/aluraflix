import React from 'react';
import './styles.css'
import Logo from '../../assets/img/Logo.png';
import Buttton from '../Button';

function Menu() {
	return (
		<nav className="menu">
			<a href="\">
				<img className="logo" src={Logo} alt="Logo do Beyflix" />
			</a>
			<Buttton as="a" className="buttonLink" href="/">
				Novo vídeo
			</Buttton>
		</nav>
	)
}

export default Menu;
