import React from 'react';
import styles from '../ModalForm.module.scss';
import { Button } from './Button';
import { MdClose } from 'react-icons/md';

export const ModalForm = ({
	isOpen,
	setIsOpen,
	name,
	setName,
	phone,
	setPhone,
}) => {
	function handleNameChange(e) {
		setName(e.target.value);
		localStorage.setItem('имя', JSON.stringify(name));
	}

	function handlePhoneChange(e) {
		setPhone(e.target.value);
		localStorage.setItem('номер', JSON.stringify(phone));
	}

	return (
		<div
			style={{
				backgroundColor: '#0F1D45',
				height: '130vh',
				position: 'absolute',
				width: 450,
				zIndex: 1,
			}}
		>
			<MdClose
				onClick={() => setIsOpen(!isOpen)}
				style={{
					color: 'white',
					fontSize: 30,
					top: 10,
					position: 'absolute',
					right: 10,
					cursor: 'pointer',
				}}
			/>
			<h1 style={{ color: 'white', fontSize: 45, margin: '80px 20px' }}>
				Закажите обратный звонок
			</h1>
			<form>
				<input
					className={styles.input}
					onChange={e => handleNameChange(e)}
					type='text'
					placeholder='Имя'
					data-validate='Обязательное поле'
					pattern='^[А-Яа-яЁё]+$'
				/>
				<input
					onChange={e => handlePhoneChange(e)}
					className={styles.input}
					placeholder='Телефон'
					type='tel'
					pattern='^[+1234567890]+'
				/>
				<span className={styles.wrapper_checkbox}>
					<input className={styles.checkbox} type='checkbox' />
					<p>Согласен на сохранение и обработку персональных данных</p>
				</span>
				<Button text={'Закажите обратный звонок'} />
			</form>
		</div>
	);
};
