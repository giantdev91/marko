import React from 'react';
import FilterDropDown from '../../../components/client/journeys/filterdropdown';
import JourneyCard from '../../../components/client/journeys/journeycard';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Journeys = () => {
	const [filterValues, setFilterValues] = useState([1, 2, 5]);
	const filters = [
		{ text: "All business types", value: 0 },
		{ text: "DEFI", value: 1 },
		{ text: "Infrastructure", value: 2 },
		{ text: "NFT", value: 3 },
		{ text: "Web3 Protocols", value: 4 },
		{ text: "By SOLUS", value: 5 },
	];

	const journeys = [
		{
			id: 1,
			title: "Basic",
			usedTimes: 2,
			tags: ["DEFI", "Infrastructure", "By SOLUS"],
			content: "This template aims to integrate the user into all your on-chain services.",
			status: 2,
		},
		{
			id: 2,
			title: "Title",
			usedTimes: 2,
			tags: ["DEFI", "Infrastructure", "By SOLUS"],
			content: "This template aims to integrate the user into all your on-chain services.",
			status: 1,
		},
		{
			id: 3,
			title: "Make your first billion",
			usedTimes: 2,
			tags: ["DEFI", "Infrastructure", "By SOLUS"],
			content: "This template aims to integrate the user into all your on-chain services.",
			status: 1,
		},
		{
			id: 4,
			title: "Make your first cake",
			usedTimes: 2,
			tags: ["DEFI", "Infrastructure", "By SOLUS"],
			content: "This template aims to integrate the user into all your on-chain services.",
			status: 1,
		},
		{
			id: 5,
			title: "Basic",
			usedTimes: 2,
			tags: ["DEFI", "Infrastructure", "By SOLUS"],
			content: "This template aims to integrate the user into all your on-chain services.",
			status: 1,
		},
		{
			id: 6,
			title: "Title",
			usedTimes: 2,
			tags: ["DEFI", "Infrastructure", "By SOLUS"],
			content: "This template aims to integrate the user into all your on-chain services.",
			status: 0,
		},
		{
			id: 7,
			title: "Make your first billion",
			usedTimes: 2,
			tags: ["DEFI", "Infrastructure", "By SOLUS"],
			content: "This template aims to integrate the user into all your on-chain services.",
			status: 0,
		},
		{
			id: 8,
			title: "Make your first cake",
			usedTimes: 2,
			tags: ["DEFI", "Infrastructure", "By SOLUS"],
			content: "This template aims to integrate the user into all your on-chain services.",
			status: 0,
		},
		{
			id: 9,
			title: "Basic",
			usedTimes: 2,
			tags: ["DEFI", "Infrastructure", "By SOLUS"],
			content: "This template aims to integrate the user into all your on-chain services.",
			status: 0,
		},
		{
			id: 10,
			title: "Title",
			usedTimes: 2,
			tags: ["DEFI", "Infrastructure", "By SOLUS"],
			content: "This template aims to integrate the user into all your on-chain services.",
			status: 0,
		},
		{
			id: 11,
			title: "Make your first billion",
			usedTimes: 2,
			tags: ["DEFI", "Infrastructure", "By SOLUS"],
			content: "This template aims to integrate the user into all your on-chain services.",
			status: 0,
		},
		{
			id: 12,
			title: "Make your first cake",
			usedTimes: 2,
			tags: ["DEFI", "Infrastructure", "By SOLUS"],
			content: "This template aims to integrate the user into all your on-chain services.",
			status: 0,
		}
	];

	const onPreview = () => {

	};

	const onSetup = () => {

	};

	return (
		<>
			<div>
				<div className='admin-journeys-header'>
					<div className='admin-journeys-header-title'>
						<h3>Set up your journey</h3>
					</div>
					<FilterDropDown filters={filters} filterValues={filterValues} onChange={setFilterValues} />
				</div>
				<div className='admin-journeys-template-list'>
					{
						journeys.map((journey) => 
							<JourneyCard key={ journey.id } journey={journey} onPreview={onPreview} onSetup={onSetup} />
						)
					}
				</div>
			</div>
		</>
	)
}

export default Journeys;