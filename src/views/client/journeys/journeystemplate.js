import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import JourneyQuestCard from '../../../components/client/journeys/journeyquestcard';
import InfoIcon from '../../../assets/img/info.svg';

const JourneysTemplate = ({setTab}) => {

    const journey = {
        title: 'Basic',
        quests: [
            {
                index: 1,
                title: 'Acquisition',
                subtitle: 'All users',
                tags: ['USDT', 'Karma', 'NFT'],
                flows: ['Build Wireframe', 'User Interface Design', 'UX Research', 'Testimonials', 'Follow twitter'],
                editable: true,
                setupRequired: false,
            },
            {
                index: 2,
                title: 'Activation',
                subtitle: 'NFT holders',
                tags: ['Karma', 'NFT'],
                flows: ['Build Wireframe', 'User Interface Design', 'UX Research', 'Testimonials', 'Follow twitter', 'Follow twitter', 'Follow twitter', 'Follow twitter', 'Follow twitter', 'Follow twitter', 'Follow twitter', 'Follow twitter'],
                editable: true,
                setupRequired: false,
            },
            {
                index: 3,
                title: 'Retention',
                subtitle: 'All users',
                tags: ['USDT', 'Karma', 'NFT'],
                flows: ['Build Wireframe', 'User Interface Design', 'UX Research'],
                editable: true,
                setupRequired: true,
            },
            {
                index: 4,
                title: 'Retention',
                subtitle: 'All users',
                tags: ['USDT', 'Karma', 'NFT'],
                flows: ['Build Wireframe', 'User Interface Design', 'UX Research', 'Testimonials', 'Follow twitter'],
                editable: true,
                setupRequired: true,
            },
        ]
    }

    return (
        <>
            <div className='admin-journeys-quest-template-header'>
                <span>Quest Templates</span>
                <span><img src={InfoIcon} /></span>
            </div>
            <div className='admin-journeys-quest-list-wrapper'>
                <div className='admin-journeys-quest-list flex-inline setup-templates'>
                    {
                        journey.quests.map((quest) =>
                            <JourneyQuestCard key={quest.index} quest={quest} />
                        )
                    }
                    <Button label='Add new quest' icon="pi pi-plus"></Button>
                </div>
            </div>
            <div className="admin-align-right quest-entries-btn-group">
			    <Button label="Back" className="p-button-outlined p-button-secondary admin-quest-back-btn" onClick={() => setTab(1)} />
				<Button label="Next" className="p-button-primary admin-quest-next-btn" onClick={() => setTab(3)} />
			</div>
        </>
    )
}

export default JourneysTemplate;