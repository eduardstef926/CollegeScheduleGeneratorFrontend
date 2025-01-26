'use client';
import "./globals.css";
import Header from "./Header/Header";
import Footer from './Footer/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<header>
					<Header />
				</header>
				{ children }
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
