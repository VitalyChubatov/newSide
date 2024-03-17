import { Header } from './Components/Header';
import human from './Image/mentor 2.png';
import { Aside } from './Components/Aside';
import { useState } from 'react';

import { ModalForm } from './Components/ModalForm';

function App() {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{isOpen && (
				<ModalForm
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					name={name}
					setPhone={setPhone}
					phone={phone}
					setName={setName}
				/>
			)}

			<Header />
			<main
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<Aside setIsOpen={setIsOpen} isOpen={isOpen} />
				<aside>
					<img src={human} alt='' />
				</aside>
			</main>
		</>
	);
}

export default App;
