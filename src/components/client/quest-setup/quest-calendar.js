import { useState, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Cal_Icon from '../../../assets/img/buttons/calendar.svg';
import Cal_Active_Icon from '../../../assets/img/buttons/calendar_active.svg';

const QuestCalendar = ({start, value, onChange, empty}) => {
    const [date, setDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [ymd, setYmd] = useState(value);
    const setPickDate = (val) => {
        setDate(val);
        // setYmd(date.getDate() + '-' + date.getMonth() + "-" + date.getFullYear() );
        console.log("Y-M-D = ", val);
        setIsOpen(false);
        // onChange(ymd);
        onChange(val.getDate() + '-' + val.getMonth() + "-" + val.getFullYear() );
    }
    
    /******set calendar size ******/
    const btnRef = useRef();
    const [calWidth, setCalWidth] = useState(200);
    const showCalendar = () => {
        setIsOpen(!isOpen);
        if(isOpen)
            setCalWidth(btnRef.current.offsetWidth);
        console.log(btnRef.current.offsetWidth);
    }

    return (
        <div className={`${ empty ? 'quest-calendar-container-empty' : 'quest-calendar-container'}`}>
            { isOpen ?
                <div className='calendar-container'>
                    <Calendar onClickDay={setPickDate} value={date} style={{width:`${calWidth}px`, height: `${calWidth}px`}}
                      defaultValue={date}  />
                </div> : <></>
            }
            <div ref={ btnRef } className={`flex align-items-center justify-content-between cal-btn ${ isOpen ? 'active-btn' : ''}`} onClick={ showCalendar }>
                {
                    date != null ? <span>{ date.getDate() + '-' + date.getMonth() + "-" + date.getFullYear() }</span>
                        : <span>{start ? "Starting date" : "Ending date"}</span>
                }
                
                <img src={ isOpen ? Cal_Active_Icon : Cal_Icon }/>
            </div>
        </div>
    )
}

export default QuestCalendar;