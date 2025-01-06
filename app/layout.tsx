import "./globals.css";
import Header from "./Header/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<header>
					<Header />
				</header>
				<body>
					{ children }
				</body>
			</body>
		</html>
	);
}
