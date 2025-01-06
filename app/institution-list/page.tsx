'use client';
import '../styles/tablecomponent.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TableComponent from '../components/TableComponent';
import { SetStateAction, useEffect, useState } from 'react';
import { scheduleLinkApi } from '../variables/apiLinks';
import { InstitutionDto } from '../models/Institution';

export default function InstitutionListComponent() {
	const [institutionList, setInstitutionList] = useState<InstitutionDto[]>([]);
	const [copyInstitutionList, setCopyInstitutionList] = useState<InstitutionDto[]>([]);
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
		setInputValue(event.target.value);
		if (event.target.value.length == 0) {
			setInstitutionList(copyInstitutionList);
		} else {
			const filteredData = institutionList.filter(item => item.title.includes(inputValue));
			setInstitutionList(filteredData);
		}
	};

	useEffect(() => {
		fetch(scheduleLinkApi)
			.then((response) => response.json())
			.then((json) => {
				setInstitutionList([...json]);
				setCopyInstitutionList([...json]);
			});
	}, []);

	return (
		<div className="table-div">
			<div className="table-container">
				<h1>INSTITUTION LIST</h1>
				<div className="table-component">
					<div className="search-bar">
						<i className="fa-solid fa-magnifying-glass"></i>
						<input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search..." />
					</div>
					<TableComponent institutions={institutionList} />
				</div>
			</div>
		</div>
	);
}