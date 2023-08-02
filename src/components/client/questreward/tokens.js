import { InputText } from 'primereact/inputtext';
import Info_Icon from '../../../assets/img/info.svg';

const Tokens = () => {

	return (
		<div className="reward-card-right">
			<p className='title'>Token</p>
            <div className="field">
                <div className='label-row'>
                    <label htmlFor="title1" className="block">Contract address<img src={Info_Icon} className='info-icon'/></label>
                </div>
                    <InputText id="title1" aria-describedby="username1-help" className="ipt-txt"/>
            </div>
            <div className="field">
                <div className='label-row'>
                    <label htmlFor="title2" className="block">Amount<img src={Info_Icon} className='info-icon'/></label>
                </div>
                    <InputText id="title2" aria-describedby="username1-help" className="ipt-txt"/>
            </div>  
		</div>
	)
}

export default Tokens;
