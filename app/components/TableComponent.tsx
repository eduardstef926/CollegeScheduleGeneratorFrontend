import React from 'react';
import { Institution } from '../models/Institution';

interface TableComponentProps {
	institutions: Institution[];
}
const TableComponent: React.FC<TableComponentProps> = ({ institutions }) => {
	return (
		<table>
			<thead>
			</thead>
			<tbody>
				{institutions.map((institution: Institution) => (
					<tr key={institution.id}>
						<td>{institution.title}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TableComponent;