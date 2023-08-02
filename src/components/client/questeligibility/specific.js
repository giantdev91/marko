import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import Info_Icon from '../../../assets/img/info.svg';
import InputBox  from '../inputbox';
import { useState } from 'react';

const Specific = () => {

    const [count, setCount] = useState(0)
    const showInputs = () => {
        let inputs = [];
        for (let i = 0 ; i < count ; i++){
            inputs.push(<InputBox key={inputs.length + 1} title="Add" comment=""/> )  
        }
        return inputs;
    }


    return (
        <Card class="elegibility-card elegibility-card-specific">
            <p className='title'>Role</p>
            <div className="field">
                <div className='subtitle'>
                    <label htmlFor="title1" className="block">Role ID<img src={Info_Icon} className='info-icon'/></label>
                </div>
                    <InputText id="title1" aria-describedby="username1-help" className="block"/>
            </div>
            <div className="field">
                <div className='subtitle'>
                    <label htmlFor="title2" className="block">Discord ID<img src={Info_Icon} className='info-icon'/></label>
                </div>
                    <InputText id="title2" aria-describedby="username1-help" className="block"/>
            </div>  
            {
                showInputs()
            }
            <a href='#' onClick={ () => setCount(count+1) } className='add_more'>Add more</a>
        </Card>
    )
}

export default Specific;