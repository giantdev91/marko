
import { InputText } from 'primereact/inputtext';
import Close_Icon from '../../../assets/img/buttons/close.svg';
import Active_Icon from '../../../assets/img/buttons/acc_active.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';
import { useState } from 'react';
import InputBox  from '../inputbox';

const TechnicalProofsNFT = ({closeActivity}) => {

    const [active, setActive] = useState(true);
    const [count, setCount] = useState(0);
    const showInputs = () => {        
        let inputs = [];
        for(let i = 0 ; i < count ; i++)
            inputs.push(<InputBox key={inputs.length + 1} title="Enterlink where to make interaction" comment="Enter"/> )       
        return inputs;
    }

    return(
        <>
        <div className="activity-item">
            <div className='close-btn'>
                <img src={Close_Icon} className='close-btn' onClick={() => closeActivity('TechnicalProofsNFT')}/>
            </div>
            <div className={`flex flex-row align-items-center justify-content-between ${active ? 'mb-4' : ''}`} onClick={() => setActive(!active)}>
                <span>Proofs of NFT balance</span>
                { active ? <img src={Active_Icon} className='info-img'/> : <img src={Inactive_Icon} className='info-img'/> }
            </div>
            {
                active ? 
                    <>
                        <div className="ipt-box">
                            <div className='label-row'>
                                <label htmlFor="title1" className="title">Description</label>
                            </div>
                                <InputText id="title1" aria-describedby="username1-help" className="ipt-txt" placeholder='Enter answer' style={{'width':'100%'}}/>
                        </div>
                        <div className="ipt-box">
                            <div className='flex align-items-center justify-content-between label-row'>
                                <label htmlFor="title1" className="title">Smart Contract for the protocol</label>
                            </div>
                                <InputText id="title1" aria-describedby="username1-help" placeholder="Enter the answer" className="ipt-txt"/>
                        </div>  
                        <div className="ipt-box">
                            <div className='flex align-items-center justify-content-between label-row'>
                                <label htmlFor="title1" className="title">Amount of staking</label>
                            </div>
                                <InputText id="title1" aria-describedby="username1-help" placeholder="Enter the answer" className="ipt-txt"/>
                        </div>  
                        <div className="ipt-box">
                            <div className='flex align-items-center justify-content-between label-row'>
                                <label htmlFor="title1" className="title">Ticker</label>
                            </div>
                                <InputText id="title1" aria-describedby="username1-help" placeholder="Enter the answer" className="ipt-txt"/>
                        </div>  
                        <div className="ipt-box">
                            <span className='title'>Network</span>
                            <div className='flex flex-row flex-wrap gap-2 mt-2'>
                                <div className='flex align-items-center justify-content-center option-btn'>Matic</div>
                                <div className='flex align-items-center justify-content-center option-btn'>ETC</div>
                                <div className='flex align-items-center justify-content-center option-btn'>APT</div>
                            </div>                           
                            <div className='flex flex-row flex-wrap gap-2 mt-2'>
                                <div className='flex align-items-center justify-content-center option-btn'>BSC</div>
                                <div className='flex align-items-center justify-content-center option-btn'>AVAX</div>
                                <div className='flex align-items-center justify-content-center option-btn'>OP</div>
                            </div>                           
                        </div>
                        <div className="ipt-box">
                            <span className='title'>Staking duration</span>
                            <div className='flex flex-row flex-wrap gap-2 mt-2'>
                                <div className='flex align-items-center justify-content-center option-btn'>24h</div>
                                <div className='flex align-items-center justify-content-center option-btn'>7d</div>
                                <div className='flex align-items-center justify-content-center option-btn'>14d</div>
                            </div>                           
                            <div className='flex flex-row flex-wrap gap-2 mt-2'>
                                <div className='flex align-items-center justify-content-center option-btn-long'>30d</div>
                            </div>                           
                        </div>
                        <div className="ipt-box">
                            <div className='flex align-items-center justify-content-between label-row'>
                                <label htmlFor="title1" className="title">Enterlink where to make interaction</label>
                            </div>
                                <InputText id="title1" aria-describedby="username1-help" placeholder="Enter" className="ipt-txt"/>
                        </div>  
                        {
                            showInputs()
                        }
                        <div className="add-more">
                            <a href='#' onClick={() => setCount( count + 1)}>Add more</a>  
                        </div> 
                    </>
                    : <></>
            }
        </div>
        </>

    )
}

export default TechnicalProofsNFT;