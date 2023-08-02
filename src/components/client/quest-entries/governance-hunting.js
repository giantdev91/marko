import { InputText } from 'primereact/inputtext';
import Close_Icon from '../../../assets/img/buttons/close.svg';
import Active_Icon from '../../../assets/img/buttons/acc_active.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';
import { useState } from 'react';

const GovernanceHunting = ({closeActivity}) => {

    const [active, setActive] = useState(true);

    return(
        <div className="activity-item">
            <div className='close-btn'>
                <img src={Close_Icon} className='close-btn' onClick={() => closeActivity('GovernanceHunting')}/>
            </div>
            <div className={`flex flex-row align-items-center justify-content-between ${active ? 'mb-4' : ''}`} onClick={() => setActive(!active)}>
                <span> Hunting</span>
                { active ? <img src={Active_Icon} className='info-img'/> : <img src={Inactive_Icon} className='info-img'/> }
            </div>
            {
                active ? 
                    <>
                        <div className="ipt-box">
                            <div className='label-row'>
                                <label htmlFor="title1" className="title">Describe your Survey</label>
                            </div>
                                <InputText id="title1" aria-describedby="username1-help" className="ipt-txt"/>
                        </div>
                        <div className="add-more">
                            <a href='#' onClick={null}>Add more</a>  
                        </div>                
                    </>
                    : <></>
            }
        </div>
    )
}

export default GovernanceHunting;