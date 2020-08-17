import React from 'react';
import './styles.css'
//import Logo from '../../assets/img/Logo.png'

function Menu() {
	return (
		<nav className="menu">
			<a href="\">
				<img className="logo" src="https://fontmeme.com/permalink/200817/bbcf688d4c090278a522dfa0c27defb5.png" alt="Logo do Beyflix" />
			</a>
			<a className="buttonLink" href="\">Novo vídeo</a>
		</nav>
	)
}

export default Menu;
