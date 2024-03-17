import React, { useState } from 'react';
import { Button } from './Button';

export const Aside = ({ isOpen, setIsOpen }) => {
	const [gbp, setGbp] = useState();
	const [data, setData] = useState();

	const button = [
		{ id: 1, text: 'Записаться на консультацию', isOpen: isOpen },
		{ id: 2, text: 'Бесплатная консультация', isOpen: isOpen },
	];

	fetch('https://www.cbr-xml-daily.ru/daily_json.js')
		.then(res => res.json())
		.then(res => setGbp(res.Valute.GBP.Value))
		.catch(obj => console.error(obj));

	fetch('https://www.cbr-xml-daily.ru/daily_json.js')
		.then(res => res.json())
		.then(res => setData(res.Timestamp))
		.catch(obj => console.error(obj));

	return (
		<aside style={{ color: 'white', margin: '0 30px' }}>
			<h1 style={{ fontSize: 65 }}>
				Создаю условия <br /> для вашего успеха
			</h1>

			<p
				style={{
					borderLeft: '1px solid white',
					padding: '0 30px',
					opacity: 0.6,
				}}
			>
				Когда ваше время и энергия лучше сфокусированы, стремление к новым
				возможностям становится реальностью, ваш успех зависит от ваших действий
			</p>
			<span style={{ display: 'flex', margin: '0 -30px' }}>
				{button.map(el => (
					<Button
						key={el.id}
						text={el.text}
						setIsOpen={setIsOpen}
						isOpen={isOpen}
					/>
				))}
			</span>
			<div
				style={{
					display: 'flex',

					alignItems: 'start',
				}}
			>
				<span style={{ borderLeft: '1px solid white' }}>
					<h1
						style={{
							marginLeft: 30,
							fontFamily: 'Montserrat',
							fontWeight: 400,
						}}
					>
						{data &&
							data
								.split('')
								.slice(0, -15)
								.map(a => a++)
								.filter(Boolean)
								.reduce((a, b) => a + b)}
						+
					</h1>
					<p style={{ marginLeft: 30, opacity: 0.8 }}>
						Техник для достижения целей
					</p>
				</span>
				<span
					style={{
						borderLeft: '1px solid white',
						marginLeft: 182,
					}}
				>
					<h1
						style={{
							marginLeft: 30,
							fontFamily: 'Montserrat',
							fontWeight: 400,
						}}
					>
						{gbp && Math.round(gbp)}%
					</h1>
					<p style={{ marginLeft: 30, opacity: 0.8 }}>
						Техник для достижения целей
					</p>
				</span>
			</div>
		</aside>
	);
};
