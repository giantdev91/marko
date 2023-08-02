import { InputText } from 'primereact/inputtext';
import Close_Icon from '../../../assets/img/buttons/close.svg';
import Active_Icon from '../../../assets/img/buttons/acc_active.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';
import { useState } from 'react';
import InputBox  from '../inputbox';

const QuestionAnswer = ({order, closeQuestion}) => {

    // const [active, setActive] = useState(true);
    const [count, setCount] = useState(0)

    const showInputs = () => {        
        let inputs = [];
        for(let i = 0 ; i < count ; i++)
            inputs.push(<InputBox key={inputs.length + 1} title={ "Option " + (3 + inputs.length)} comment="Enter answer"/> )       
        return inputs;
    }

    const showOptions = () => {
        let btns = [];
        for(let i = 0 ; i < count ; i++)
            btns.push(<div className='flex align-items-center justify-content-center option-btn'>Option {3 + btns.length}</div>)
        return btns;
    }

    return(
       
        <div className="activity-item">
            <div className='close-btn'>
                <img src={Close_Icon}  className='close-btn-in' onClick={ () => closeQuestion(order-1) }/>
            </div>
            <div className="flex flex-row align-items-center justify-content-between mb-4">
                <span className='title-bold'> Question {order}</span>                
            </div>
            
            <div className="ipt-box">
                <div className='label-row'>
                    <label htmlFor="title1" className="title">Description</label>
                </div>
                    <InputText id="title1" aria-describedby="username1-help" className="ipt-txt" placeholder='Enter answer' style={{'width':'100%'}}/>
            </div>

            <div className="flex flex-row align-items-center justify-content-between mb-4">
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
            {
                showInputs()
            }
            <div className="add-more">
                <a href='#' onClick={() => setCount( count + 1)}>Add more</a>  
            </div>    
            <div style={{'marginTop':'34.5px'}}>
                <span className='title-bold mb3'> Set correct answer</span>   
                <div className='flex flex-row flex-wrap gap-2'>
                    <div className='flex align-items-center justify-content-center option-btn'>Option 1</div>
                    <div className='flex align-items-center justify-content-center option-btn'>Option 2</div>
                    {
                        showOptions()
                    }
                </div>             
            </div>
        </div>
    )
}

export default QuestionAnswer;