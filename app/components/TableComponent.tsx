import React from 'react';
import { InstitutionDto } from '../models/Institution';
import { useRouter } from 'next/navigation';

interface TableComponentProps {
	institutions: InstitutionDto[];
}
const TableComponent: React.FC<TableComponentProps> = ({ institutions }) => {
	const router = useRouter();

	const handleColumnClick = (id: number) => {
		router.push(`/schedulepage/${id}`);
	}

	return (
		<table>
			<thead>
				<tr> 
					<th>Name</th>
					<th>City</th>
					<th>Address</th>
				</tr>
			</thead>
			<tbody>
				{institutions.map((institution: InstitutionDto) => (
					<tr onClick={() => handleColumnClick(institution.id)} key={institution.id}>
						<td>{institution.title}</td>
						<td>{institution.city}</td>
						<td>{institution.address}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TableComponent;