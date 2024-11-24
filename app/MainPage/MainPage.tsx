import Header from "../Header/Header";
import MainComponent from "../MainComponent/MainComponent";
import TitleSubcomponent from "../TitleSubcomponent/TitleSubcomponent";
import './MainPage.scss';

function App() {
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

export default App;
