import '../styles/mainpage.scss';
import Header from "../Header/Header";
import MainComponent from "../Body/MainComponent";
import { TitleSubcomponent } from "../Body/TitleSubComponent";

export default function App() {
	return (
		<div className="app">
			<div className="header-section">
				<Header />
				<MainComponent />
			</div>
			<TitleSubcomponent />
		</div>
	);
}