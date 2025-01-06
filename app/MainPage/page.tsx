import '../styles/mainpage.scss';
import MainComponent from "../Body/MainComponent";
import { TitleSubcomponent } from "../Body/TitleSubComponent";

export default function App() {
	return (
		<div className="page-section">
			<div className="header-section">
				<MainComponent />
			</div>
			<TitleSubcomponent />
		</div>
	);
}