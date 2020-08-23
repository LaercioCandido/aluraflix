import React from 'react';

function ButtonLink(props) {
	//props => { className: "ButtonLink", href="/"}

	return (
		<a className={props.className} href={props.href}>
			{props.children}
		</a>
	)
}

export default ButtonLink;
