import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import  QuestSetup  from '../../../views/client/quests/questsetup.js';
import  QuestEntries from '../../views/../client/quests/questentries.js';
import  QuestEligibility  from '../../../views/client/quests/questeligibility.js';
import  QuestReward  from '../../views/../client/quests/questreward.js';

const Quests = () => {

	const [flag, setFlag] = useState(1);
	const handleShow1 = () => setFlag(1);
	const handleShow2 = () => setFlag(2);
	const handleShow3 = () => setFlag(3);
	const handleShow4 = () => setFlag(4);

	const showComponent = () => {
		switch(flag){
			case 1: return <QuestSetup setTab={ setFlag }/>
			case 2: return <QuestEntries setTab={ setFlag }/>
			case 3: return <QuestEligibility setTab={ setFlag }/>
			case 4: return <QuestReward setTab={ setFlag }/>
		}
	}

	return (
		<>
			<div>
	  	   		<p className="admin-quest-title">Create quests</p>
				<div className="flex justify-content-between flex-wrap admin-quest-memus-preview">
					<div className="flex flex-row flex-wrap ">						
						<div className="flex flex-row justify-content-between admin-quest-menus">
							<Link to="#" onClick={ handleShow1 } className={`flex align-items-center justify-content-center admin-quest-menuitem ${flag === 1 ? 'active' : ''}`}>
								1. Set up</Link>
							<Link to="#" onClick={ handleShow2 } className={`flex align-items-center justify-content-center admin-quest-menuitem ${flag === 2 ? 'active' : ''}`}>
								2. Entries</Link>
						</div>
						<div className="flex flex-row justify-content-between admin-quest-menus">				
							<Link to="#" onClick={ handleShow3 } className={`flex align-items-center justify-content-center admin-quest-menuitem ${flag === 3 ? 'active' : ''}`}>
								3. Eligibility</Link>
							<Link to="#" onClick={ handleShow4 } className={`flex align-items-center justify-content-center admin-quest-menuitem ${flag === 4 ? 'active' : ''}`}>
								4. Reward</Link>
						</div>
					</div>
					{ 
						flag !== 1 ? <div className="admin-quest-preview-btn">Preview Request</div> : <></>
					}
				</div>
			</div>
  	   		{ showComponent() }
		</>
	)
}

export default Quests;