'use client';
import '../styles/tablecomponent.scss';
import TableComponent from '../components/TableComponent';
import { useEffect, useState } from 'react';
import { scheduleLinkApi } from '../variables/apiLinks';

export default function ScheduleComponent() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(scheduleLinkApi)
			.then((response) => response.json())
			.then((json) => {
				setData([...json]);
			});
	}, []);

	return (
		<div className="table-div">
			<div className="table-container">
				<h1>Institution List</h1>
				<div className="table-component">
					<TableComponent institutions={data} />
				</div>
			</div>
		</div>
	);
}