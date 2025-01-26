'use client';
import '../../styles/tablecomponent.scss';
import TableComponent from '@/app/components/TableComponent';
import { StudyProgram } from '@/app/models/InstitutionStudyProgram';
import { apiLinks } from '@/app/variables/apiLinks';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function SchedulePage() {
	const { id: institutionId } = useParams();
	const headerList = ["Institution", "Program", "Year"];
	const fullApiLink = `${apiLinks.institutionLink}/?institutionId=${institutionId}`;
	const [studyProgramList, setStudyProgramList] = useState<StudyProgram[]>([]);

	useEffect(() => {
		fetch(fullApiLink)
			.then((response) => response.json())
			.then((json) => {
				setStudyProgramList([...json]);
			});
	}, []);

	return (
		<div className="table-div">
			<div className="table-component">
				<TableComponent studyPrograms={studyProgramList} headerList={headerList} />
			</div>
		</div>
	);
}