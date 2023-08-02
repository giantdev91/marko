import { useState } from 'react';
import { Link } from 'react-router-dom';

import JourneysSetup from "./journeyssetup";
import JourneysTemplate from "./journeystemplate";
import JourneysReward from "./journeysreward";

import JourneyBreadCrumb from '../../../components/client/journeys/journeybreadcrumb';

const JourneysSetupWrapper = () => {

    const breadcrumbItems = [{ label: 'Journey templates' }, { label: 'Basic journey setup' }];

    const journey = {
        title: 'Basic',
        quests: [
            {
                index: 1,
                title: 'Acquisition',
                subtitle: 'All users',
                tags: ['USDT', 'Karma', 'NFT'],
                flows: ['Build Wireframe', 'User Interface Design', 'UX Research', 'Testimonials', 'Follow twitter']
            },
            {
                index: 2,
                title: 'Activation',
                subtitle: 'NFT holders',
                tags: ['Karma', 'NFT'],
                flows: ['Build Wireframe', 'User Interface Design', 'UX Research', 'Testimonials', 'Follow twitter', 'Follow twitter', 'Follow twitter', 'Follow twitter', 'Follow twitter', 'Follow twitter', 'Follow twitter', 'Follow twitter']
            },
            {
                index: 3,
                title: 'Retention',
                subtitle: 'All users',
                tags: ['USDT', 'Karma', 'NFT'],
                flows: ['Build Wireframe', 'User Interface Design', 'UX Research']
            },
            {
                index: 4,
                title: 'Retention',
                subtitle: 'All users',
                tags: ['USDT', 'Karma', 'NFT'],
                flows: ['Build Wireframe', 'User Interface Design', 'UX Research', 'Testimonials', 'Follow twitter']
            },
            {
                index: 5,
                title: 'Retention',
                subtitle: 'All users',
                tags: ['USDT', 'Karma', 'NFT'],
                flows: ['Build Wireframe', 'User Interface Design', 'UX Research', 'Testimonials', 'Follow twitter']
            },
            {
                index: 6,
                title: 'Retention',
                subtitle: 'All users',
                tags: ['USDT', 'Karma', 'NFT'],
                flows: ['Build Wireframe', 'User Interface Design', 'UX Research', 'Testimonials', 'Follow twitter']
            }
        ]
    }

    const [flag, setFlag] = useState(1);
    const handleShow1 = () => setFlag(1);
    const handleShow2 = () => setFlag(2);
    const handleShow3 = () => setFlag(3);

    const showComponent = () => {
        switch (flag) {
            case 1: return <JourneysSetup setTab={setFlag} />
            case 2: return <JourneysTemplate setTab={setFlag} />
            case 3: return <JourneysReward setTab={setFlag} />
        }
    }



    return (
        <>
            <div>
                <div className='admin-journeys-preview-header'>
                    <div className="admin-journeys-header-breadcrumb">
                        <JourneyBreadCrumb model={breadcrumbItems} />
                    </div>
                    <div className='admin-journeys-header-title'>
                        <h3>{`${journey.title} journey setup`}</h3>
                    </div>
                </div>
                <div className="flex justify-content-between flex-wrap admin-quest-memus-preview">
                    <div className="flex flex-row flex-wrap ">
                        <div className="flex flex-row justify-content-between admin-quest-menus">
                            <Link to="#" onClick={handleShow1} className={`flex align-items-center justify-content-center admin-quest-menuitem ${flag === 1 ? 'active' : ''}`}>
                                1. Set up</Link>
                            <Link to="#" onClick={handleShow2} className={`flex align-items-center justify-content-center admin-quest-menuitem ${flag === 2 ? 'active' : ''}`}>
                                2. Templates</Link>
                        </div>
                        <div className="flex flex-row justify-content-between admin-quest-menus">
                            <Link to="#" onClick={handleShow3} className={`flex align-items-center justify-content-center admin-quest-menuitem ${flag === 3 ? 'active' : ''}`}>
                                3. Reward</Link>
                        </div>
                    </div>
                    {
                        flag === 2 ? <div className="admin-quest-preview-btn">Preview Journey</div> : <></>
                    }
                </div>
            </div>
            {showComponent()}
        </>
    )
}

export default JourneysSetupWrapper;