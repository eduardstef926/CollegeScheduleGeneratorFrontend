import React from 'react';
import { Institution } from '../models/Institution';
import { useRouter } from 'next/navigation';
import { InstitutionProps } from '../props/InstitutionProps';
import { StudyProgram } from '../models/InstitutionStudyProgram';

const TableComponent: React.FC<InstitutionProps> = ({
	resultLink,
	institutions,
	headerList,
	studyPrograms
}) => {
	const router = useRouter();
	const handleColumnClick = (id: number) => {
		router.push(`/${resultLink}/${id}`);
	}

	return (
		<table>
			<thead>
				<tr>
					{headerList.map((header: string, index: number) => (
						<th key={index}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{institutions && institutions.map((institution: Institution) => (
					<tr onClick={() => handleColumnClick(institution.id)} key={institution.id}>
						<td>{institution.title}</td>
						<td>{institution.city}</td>
						<td>{institution.address}</td>
					</tr>
				))}
				{studyPrograms && studyPrograms.map((studyProgram: StudyProgram, index) => (
					Array.from({ length: studyProgram.numberOfYears }, (_, yearIndex) => (
						<tr onClick={() => handleColumnClick(index)} key={`${index}-${yearIndex}`}>
							<td>{studyProgram.institutionName}</td>
							<td>{studyProgram.studyProgramName}</td>
							<td>Year {yearIndex + 1} of {studyProgram.numberOfYears}</td>
						</tr>
					))
				))}
			</tbody>
		</table>
	);
};

export default TableComponent;