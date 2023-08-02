
import RewardMethod from '../../../components/client/questreward/rewardmethod';
import Network from '../../../components/client/questreward/network';
import RewardType from '../../../components/client/questreward/rewardtype';
import RewardTypeElement from '../../../components/client/questreward/rewardtypeelement';


import { useState } from 'react';
import { Button } from 'primereact/button';

import  NFTs  from '../../../components/client/questreward/nfts';
import  Tokens  from '../../../components/client/questreward/tokens';
import  WhiteList  from '../../../components/client/questreward/whitelist';

const QuestReward = () => {
	
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
			    <Button label="Back" className="p-button-outlined p-button-secondary admin-quest-back-btn" />
				<Button label="Next" className="p-button-primary admin-quest-next-btn" />
			</div>
		</>
	)
}


export default QuestReward;