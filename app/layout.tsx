import "./globals.css";
import MainPage from "./MainPage/MainPage";

export default function RootLayout({}: Readonly<{children: React.ReactNode;}>) {
	return (
		<html>
			<body>
				<MainPage />
			</body>
		</html>
	);
}
