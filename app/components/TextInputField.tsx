import { TableInputFieldProps } from "../props/TableInputFieldProps"


const TextInputField : React.FC<TableInputFieldProps> = ({
	label,
	placeholder
}) => {
	return (
		<div className="text-field">
			<label>
				{ label }
			</label>
			<div>
				<input placeholder={placeholder} />
			</div>
		</div>
	);
}

export default TextInputField;