import RewardMethod from '../../../components/client/journeys/reward/rewardmethod';
import Network from '../../../components/client/journeys/reward/network';
import RewardType from '../../../components/client/journeys/reward/rewardtype';
import RewardTypeElement from '../../../components/client/journeys/reward/rewardtypeelement';


import { useState } from 'react';
import { Button } from 'primereact/button';

import  NFTs  from '../../../components/client/journeys/reward/nfts';
import  Tokens  from '../../../components/client/journeys/reward/tokens';
import  WhiteList  from '../../../components/client/journeys/reward/whitelist';

const JourneysReward = ({ setTab }) => {
    const [checked, setChecked] = useState("-1");
	const first = { title: 'All users'};
	const items = [
		{ title: 'NFTs'},
		{ title: 'Tokens'},
		{ title: 'Whitelist'}
	]
	const handleToggle = (index) => {
		if(checked == index){
			return setChecked("-1");
		}
		console.log("checked index = ", checked);
		setChecked(index);
	}

	return (
		<>
	  		<div className="flex flex-row admin-quest-container gap-3">
		  		<div className="quest-left-containter">
					<RewardMethod/>	
					<Network/>		  		
					<div className='quest-reward-card'>
							<p className='main-title mb-4'>3. Type of reward</p>
							<RewardTypeElement title="Karma" checked={null} first={true} onToggle={()=>console.log("type of reward : karma")}/>
							{
								items.map((item , index) => (
									<RewardTypeElement key={index} title={item.title} checked={checked === index} onToggle={() => handleToggle(index) } first={false}/>
								))
							}
					</div>
		  		</div>
		  		<div className={`reward-right-container ${checked == 2 ? 'whitelist' : ''} `}>	  		
					{/* { checked == -1 ? 
					  	<div className="quest-entries-active-element">
						<p className="quest-entries-comment">You have no active tasks yet<br/>Please, pick the ones you need from the <br/>block on the left</p>
						</div>					
					: <></>
					}	 */}
					{ checked == 0 ? <NFTs/> : <></>}
					{ checked == 1 ? <Tokens/>: <></>}
					{ checked == 2 ? <WhiteList/>:<></>}		  	
		  		</div> 
	  		</div>

	  		<div className="admin-align-right quest-entries-btn-group">
			    <Button label="Back" className="p-button-outlined p-button-secondary admin-quest-back-btn" onClick={() => setTab(2)}/>
				<Button label="Start Quest" className="p-button-primary admin-quest-next-btn" />
			</div>
		</>
	)
}

export default JourneysReward;