import { InputText } from 'primereact/inputtext';
import Close_Icon from '../../../assets/img/buttons/close.svg';
import Active_Icon from '../../../assets/img/buttons/acc_active.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';
import { useState } from 'react';
import QuestionAnswer from './educational-question';

const EducationalVisitAnswer = ({closeActivity}) => {

    const [active, setActive] = useState(true);
    const [count, setCount] = useState(1);

    const showQuestions = () => {
        const fields = [];
        for(let i = 0 ; i < count ; i++)
            fields.push(<QuestionAnswer key={i} order={ i + 1 }/>);
        return fields;
    }

    return(
        <>
        <div className="activity-item">
            <div className='close-btn'>
                <img src={Close_Icon} className='close-btn' onClick={() => closeActivity('EducationalVisitAnswer')}/>
            </div>
            <div className={`flex flex-row align-items-center justify-content-between ${active ? 'mb-4' : ''}`} onClick={() => setActive(!active)}>
                <span> Visit the site and answer questions</span>
                { active ? <img src={Active_Icon} className='info-img'/> : <img src={Inactive_Icon} className='info-img'/> }
            </div>
            {
                active ? <>
                <div className="ipt-box">
                    <div className='label-row'>
                        <label htmlFor="title1" className="title">Website</label>
                    </div>
                        <InputText id="title1" aria-describedby="username1-help" className="ipt-txt"  placeholder="URL" onChange={(e)=>setCount(e.target.value)}/>
                </div>
                <div className="ipt-box">
                    <div className='label-row'>
                        <label htmlFor="title1" className="title">Number of questions</label>
                    </div>
                        <InputText id="title1" aria-describedby="username1-help" className="ipt-txt"  value={count} onChange={(e)=>setCount(e.target.value)}/>
                </div></>: <></>
            }
        </div>
        {
            active ? <> { showQuestions() } </>
                : <></>
        }
        </>
    )
}

export default EducationalVisitAnswer;