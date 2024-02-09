import React, { useContext , useState} from 'react';
import GlobalContext from '../context/GlobalContext';
import axios from 'axios';

export default function EventModal(){
    const {setShowEventModal, selectedDay, dispatchEvent, selectedEvent, createEditEvent, setSelectedEvent} = useContext(GlobalContext);
    const [eventName, setEventName] = useState(selectedEvent? selectedEvent.eventName:"");
    const [eventTime, setEventTime] = useState(selectedEvent? selectedEvent.eventTime:"");
    const [eventDescription, setEventDescription] = useState(selectedEvent? selectedEvent.eventDescription:"");
    const [fileUpload, setFileUpload] = useState("");
    

    async function handleSubmit(e){
        e.preventDefault();
        if(selectedEvent){
            const res = axios({
                url: "http://localhost:4000/api/v1/updateEvent",
                method: "POST",
                data:{
                    name: eventName,
                    description: eventDescription,
                    dateTime: selectedDay.valueOf()
                }
            });
            console.log(res.data.event);
            const calenderEvent = {
                eventName:res.data.event.name,
                eventDescription: res.data.event.description,
                day: res.data.event.dateTime,
                file: null,
                id: selectedEvent? selectedEvent.id: Date.now()
            }
            dispatchEvent({type: 'update', payload: calenderEvent});
        }else{
            const res = await axios({
                url: "http://localhost:4000/api/v1/saveEvent",
                method: "POST",
                data:{
                    name: eventName,
                    description: eventDescription,
                    dateTime: selectedDay.valueOf()
                }
            });
            console.log(res.data.event);
            
            dispatchEvent({type: 'push', payload: calenderEvent});
        }
        setShowEventModal(false);
    }

    return(
        <div>
            {/* <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-slide-down-animation-modal">
            Open modal
            </button> */}

            <div id="hs-slide-down-animation-modal" className={`

            w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none`}>
            {/* <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"> */}
            <div className="mt-7 opacity-100 duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                    <h3 className="font-bold text-gray-800 dark:text-white">
                    {selectedEvent?"Edit":"Create"} Event ({selectedDay.format("DD-MM-YY")})
                    </h3>
                    <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" 
                    // data-hs-overlay="#hs-slide-down-animation-modal"
                    onClick={()=>{
                        setSelectedEvent(null);
                        setShowEventModal(false);
                    }}
                    >
                    <span className="sr-only">Close</span>
                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>
                <div className="p-4 overflow-y-auto">
                    
                <form className="max-w-lg mx-auto" method="POST" encType="multipart/form-data">
                    <label htmlFor="eventName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Name</label>
                    <input type="text" id="eventName" className= "cursor-default bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter event name" required 
                    value={eventName}
                    name="eventName"
                    onChange={(e)=>setEventName(e.target.value)}
                    />
                    <label htmlFor="eventDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Description</label>
                    <textarea id="eventDescription" rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."
                    name="eventDescription"
                    value={eventDescription}
                    onChange={(e)=>setEventDescription(e.target.value)}
                    ></textarea>
                    <label htmlFor="eventTime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Time</label>
                    <input type="time" id="eventTime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter event name" required 
                    value={eventTime}
                    name="eventTime"
                    onChange={(e)=>setEventName(e.target.value)}
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="fileUpload">Upload file</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" 
                    id="fileUpload" name='fileUpload' type="file" 
                    onChange={(e)=>setFileUpload(e.target.files[0])}
                    />
                    
                </form>

                </div>
                <div className="bg-gray-100 flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" 
                    // data-hs-overlay="#hs-slide-down-animation-modal"
                    onClick={()=>{
                        setSelectedEvent(null);
                        setShowEventModal(false);
                    }}
                    >
                    Close
                    </button>
                    <button type="button" className={`py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 bg-red-600 text-white shadow-sm hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                    `}


                    // data-hs-overlay="#hs-slide-down-animation-modal"
                    onClick={()=>{
                        const res = axios({
                            url: "http://localhost:4000/api/v1/saveEvent",
                            method: "POST",
                            data:{
                                name: eventName,
                                description: eventDescription,
                                dateTime: selectedDay.valueOf()
                            }
                        });
                        dispatchEvent({type: "delete", payload: selectedEvent});
                        setShowEventModal(false);
                    }}
                    disabled={selectedEvent?false: true}
                    >
                    Delete
                    </button>
                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        onClick={handleSubmit}
                    >
                    Save changes
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}