import React, { useContext } from 'react'
// import {ReactComponent as PlusIcon} from '../assets/plus.svg'
import GlobalContext from '../context/GlobalContext';

function CreateEvent() {
    const {showEventModal, setShowEventModal, setSelectedEvent} = useContext(GlobalContext);
    return (
        <button className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
            // data-hs-overlay="#hs-slide-down-animation-modal"
            onClick={()=>{
                setSelectedEvent(null);
                setShowEventModal(true);
            }}
        >
            {/* <img src={plus} className='w-7 h-7'/> */}
            <span>Create Event</span>
        </button>
    )
}

export default CreateEvent;