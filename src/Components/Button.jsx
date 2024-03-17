import React from 'react';
import { HiArrowDownRight } from 'react-icons/hi2';
import styles from './Button.module.scss';

export const Button = ({ text, setIsOpen, isOpen }) => {
	const handleSubmit = e => {
		alert('Успешно');
	};

	return (
		<>
			<span
				className={styles.button}
				onClick={e => (isOpen === false ? setIsOpen(!isOpen) : null)}
				style={{
					margin: '50px 30px ',
					width: 380,
					border: '1px solid white',
					justifyContent: 'space-between',
					display: 'flex',
				}}
			>
				<button
					onClick={e =>
						isOpen === false ? setIsOpen(!isOpen) : handleSubmit(e)
					}
				>
					{text}
				</button>
				<span style={{ padding: 20 }}>
					<HiArrowDownRight
						style={{
							position: 'relative',
							top: '22px',
							left: '18px',
							fontSize: 22,
						}}
					/>
				</span>
			</span>
		</>
	);
};
