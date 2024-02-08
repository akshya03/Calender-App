import dayjs from 'dayjs';
import React, { useContext , useState, useEffect} from 'react';
import GlobalContext from '../context/GlobalContext';

function Day({day, rowIdx}) {
    const {setSelectedDay, setShowEventModal, savedEvents, setSelectedEvent} = useContext(GlobalContext);
    const [dayEvents, setDayEvents] = useState([]);

    useEffect(()=>{
        const events = savedEvents.filter((evt)=>dayjs(evt.day).format("DD-MM-YY")===day.format("DD-MM-YY"));
        setDayEvents(events);
    },[savedEvents, day])

    // setCurrentDayClass(day.format("DD-MM-YY")===dayjs().format("DD-MM-YY")?'bg-blue-600 text-white rounded-full w-7': "");

    return (
        <div className='border border-gray-200 flex flex-col' 
            onClick={()=>{
                // console.log(day.format("DD-MM-YY"));
                setSelectedDay(day);
                // if (dayEvents.length==0)
                    setShowEventModal(true);
            }}
        >
            <header className='flex flex-col items-center'>
                <p className="text-sm mt-1">
                    {rowIdx===0 && day.format('ddd').toUpperCase()}
                </p>
                <p className={`text-sm p-1 my-1 text-center ${day.format("DD-MM-YY")===dayjs().format("DD-MM-YY")?"bg-blue-600 text-white rounded-full w-7":""}`}>
                    {day.format('DD')}
                </p>
            </header>
            {dayEvents.map((evt, idx)=>(
                <div
                    key={idx}
                    className='bg-blue-50 truncate'
                    onClick={()=>setSelectedEvent(evt)}
                >
                    {evt.eventName}
                </div>
            ))}
            
        </div>
    )
}

export default Day
