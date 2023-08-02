import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from 'react';
import Icon1 from '../../../assets/img/coin/1.svg';
import Icon2 from '../../../assets/img/coin/2.svg';
import Icon3 from '../../../assets/img/coin/3.svg';
import Icon4 from '../../../assets/img/coin/4.svg';
import Icon5 from '../../../assets/img/coin/5.svg';
import Icon6 from '../../../assets/img/coin/6.svg';
import Info_Icon from '../../../assets/img/info.svg';
import InputBox  from '../inputbox';

const NFT = () => {

    const [count, setCount] = useState(0)
    const showInputs = () => {
        let inputs = [];
        for (let i = 0 ; i < count ; i++){
            inputs.push(<InputBox key={inputs.length + 1} title="Input Title" comment=""/> )  
        }
        return inputs;
    }
    return (
        <Card class="elegibility-card elegibility-card-nft">
            <p className='title'>NFT</p>
            <div className='mb-3'>
                <div class="flex align-items-center gap-2 mb-2">
                    <Button className=" p-button-secondary nft-btn" ><img src={ Icon1 }/></Button>
                    <Button className=" p-button-secondary nft-btn" ><img src={ Icon2 }/></Button>
                    <Button className=" p-button-secondary nft-btn" ><img src={ Icon3 }/></Button>
                </div>
                <div class="flex align-items-center gap-2 mb-2">
                    <Button className=" p-button-secondary nft-btn" ><img src={ Icon4 }/></Button>
                    <Button className=" p-button-secondary nft-btn" ><img src={ Icon5 }/></Button>
                    <Button className=" p-button-secondary nft-btn" ><img src={ Icon6 }/></Button>
                </div>
            </div>
            <div className="ipt-box">
                <div className='subtitle'>
                    <label htmlFor="title1" className="subtitle">Input title<img src={Info_Icon} className='info-icon'/></label>
                </div>
                    <InputText id="title1" aria-describedby="username1-help" className="block"/>
            </div>
            <div className="ipt-box">
                <div className='subtitle'>
                    <label htmlFor="title2" className="subtitle">Input title<img src={Info_Icon} className='info-icon'/></label>
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
export default NFT;