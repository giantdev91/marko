import { Button } from 'primereact/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import SoonIcon from '../../../assets/img/soon.svg';
import UsedTimesIcon from '../../../assets/img/usedtimes.svg';

const JourneyCard = ({ journey, onPreview, onSetup }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const share = () => {

    };

    const edit = () => {

    };

    const gotoPreview = () => {
        window.location.href = '/client/journeys/preview';
    };

    return (
        <div className="admin-journey-card">
            {journey.status === 0 && (
                <span className='soon-icon'>
                    <img src={SoonIcon} />
                </span>
            )}
            <div className={`admin-journey-card-header ${journey.status === 0 ? 'blur' : ''}`}>
                <div className="admin-journey-card-title">
                    <span>{journey.title}</span>
                    <Button label="" icon="pi pi-ellipsis-v" iconPos="left" outlined onClick={toggling} />
                </div>
                <div className="admin-journey-card-subtitle">
                    <span>
                        <img src={UsedTimesIcon} />
                    </span>
                    <span>
                        {`${journey.usedTimes} times used`}
                    </span>
                </div>
                {isOpen && (
                    <div className="dropdown-list-container">
                        <ul className="dropdown-list">
                            <li onClick={() => share()} className="list-item">
                                <span className="ml-2">
                                    Share
                                </span>
                            </li>
                            <li onClick={() => edit()} className="list-item">
                                <span className="ml-2">
                                    Edit
                                </span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className={`admin-journey-card-tags ${journey.status === 0 ? 'blur' : ''}`}>
                {
                    journey.tags.map((tag, index) =>
                        <span key={index}>{tag}</span>
                    )
                }
            </div>
            <div className={`admin-journey-card-content ${journey.status === 0 ? 'blur' : ''}`}>
                <p>{journey.content}</p>
            </div>
            <div className={`admin-journey-card-footer ${journey.status === 0 ? 'blur' : ''}`}>
                <Link to="/client/journeys/preview">
                    <span>Preview</span>
                </Link>
                {journey.status !== 2 && (
                    <Button label="Set up" className='setup-button' />
                )}
                {journey.status === 2 && (
                    <Button label="Stop" className='stop-button' />
                )}
            </div>
        </div>
    )
}

export default JourneyCard;