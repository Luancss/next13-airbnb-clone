import './globals.css';
import { Nunito } from 'next/font/google';

import { Toaster } from 'react-hot-toast';

import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import SearchModal from './components/modals/SearchModal';
import { Navbar } from './components/navbar/Navbar';



export const metadata = {
	title: 'Airbnb',
	description: 'Airbnb clone',
};

const font = Nunito({
	subsets: ['latin'],
});
export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();
	return (
		<html lang='en'>
			<body className={font.className}>
				<Toaster />
				<RentModal />
				<LoginModal />
				<RegisterModal />
				<SearchModal />
				<Navbar currentUser={currentUser} />
				<div className='pb-20 pt-28'>{children}</div>
			</body>
		</html>
	);
}