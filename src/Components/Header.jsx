import React from 'react';

import { MdOutlinePhone } from 'react-icons/md';
export const Header = () => {
	return (
		<header
			style={{
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
			}}
		>
			<h1
				style={{
					borderTop: '2px solid white',
					color: 'white',
					fontSize: 25,
					padding: 4,
					borderBottom: '2px solid white',
				}}
			>
				ALEX.SHEVTSOV
			</h1>

			<ul
				style={{
					display: 'flex',
					color: 'white',
					listStyle: 'none',
					justifyContent: 'space-around',
					width: '60%',
				}}
			>
				<li>Обо мне</li>
				<li>Наставнечество</li>
				<li>Карьера</li>
				<li>Мероприятия</li>
				<li>Кейсы</li>
				<li>Отзывы</li>
				<li>Контакты</li>
			</ul>
			<span style={{ display: 'flex', alignItems: 'center' }}>
				<MdOutlinePhone
					style={{
						border: '1px solid white',
						color: 'white',
						borderRadius: '50%',
						padding: 5,
					}}
				/>

				<div
					style={{
						marginLeft: 20,
						color: 'white',

						fontFamily: 'Montserrat',
						fontWeight: 400,
					}}
				>
					8-345-123-34-45
				</div>
			</span>
		</header>
	);
};
