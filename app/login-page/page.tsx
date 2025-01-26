import "../styles/loginpage.scss";
import "../styles/maincomponent.scss";
import "../styles/textfieldcomponent.scss";
import TextInputField from "../components/TextInputField";

export default function App() {
	return (
		<div className="login-table">
			<div className="login-container">
				<p>Login Credentials</p>
				<TextInputField label="Email" placeholder=""/>
				<TextInputField label="Password" placeholder=""/>
				<button className="view-button">
					LOGIN
				</button>
			</div>
		</div>
	);
}