
import { InputText } from 'primereact/inputtext';
import Close_Icon from '../../../assets/img/buttons/close.svg';
import Active_Icon from '../../../assets/img/buttons/acc_active.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';
import { useState } from 'react';


const GovernanceCommunity = ({ closeActivity }) => {

    const [active, setActive] = useState(true);
    const [hideSurvey, setHideSurvey] = useState(false);
    const [count, setCount] = useState(1);

    const showSurveys = () => {
        const fields = [];
        for(let i = 0 ; i < count ; i++)
            fields.push(
                <div className="activity-item" key={i}>
                    <div className='close-btn'>
                        <img src={Close_Icon} onClick={() => setHideSurvey(true)} className='close-btn-in'/>
                    </div>
                    <div className="flex flex-row align-items-center justify-content-between mb-4"  onClick={() => setActive(!active)}>
                        <span className='title-bold'> Survey {i+1}</span>                
                    </div>
                    
                    <div className="ipt-box">
                        <div className='label-row'>
                            <label htmlFor="title1" className="title">Description</label>
                        </div>
                            <InputText id="title1" aria-describedby="username1-help" className="ipt-txt" placeholder='Enter answer' style={{'width':'100%'}}/>
                    </div>

                    <div className="flex flex-row align-items-center justify-content-between mb-4"  onClick={() => setActive(!active)}>
                        <span className='title-bold'> Answers </span>                
                    </div>
                    
                    <div className="ipt-box">
                        <div className='label-row'>
                            <label htmlFor="title1" className="title">Option 1</label>
                        </div>
                            <InputText id="title1" aria-describedby="username1-help" className="ipt-txt" placeholder='Enter answer'/>
                    </div>
                    <div className="ipt-box">
                        <div className='label-row'>
                            <label htmlFor="title1" className="title">Option 2</label>
                        </div>
                            <InputText id="title1" aria-describedby="username1-help" className="ipt-txt" placeholder='Enter answer'/>
                    </div>
                    <div className="add-more">
                        <a href='#' onClick={null}>Add more</a>  
                    </div>    
                </div>
            );
        return fields;
    }

    return(
        <>
        <div className="activity-item">
            <div className='close-btn'>
                <img src={Close_Icon} className='close-btn' onClick={() => closeActivity('GovernanceCommunity')}/>
            </div>
            <div className={`flex flex-row align-items-center justify-content-between ${active ? 'mb-4' : ''}`} onClick={() => setActive(!active)}>
                <span> Community decision votes</span>
                { active ? <img src={Active_Icon} className='info-img'/> : <img src={Inactive_Icon} className='info-img'/> }
            </div>
            {
                active ? 
                    <>
                        <div className="ipt-box">
                            <div className='flex align-items-center justify-content-between label-row'>
                                <label htmlFor="title1" className="title">Number of questions</label>
                                <span className='comment'>10 max</span>
                            </div>
                                <InputText id="title1" aria-describedby="username1-help" value={count} onChange={() => setCount(count+1)} className="ipt-txt"/>
                        </div>  
                    </>
                    : <></>
            }
        </div>
        {
        active  ? 
            <>{showSurveys()}</>
        : <></>
        }
        </>

    )
}

export default GovernanceCommunity;