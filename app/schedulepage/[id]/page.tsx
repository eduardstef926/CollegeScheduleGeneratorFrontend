'use client';
import { useParams } from 'next/navigation';
import React from 'react';

export default function SchedulePage() {
	const { id } = useParams();
	return (
		<div>
			<h1>Hello World {id} </h1>
		</div>
	);
}