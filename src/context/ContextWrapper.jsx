import React, { useState, useReducer, useEffect } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs';

function savedEventsReducer(state, {type, payload}){
    switch(type){
        case "push":
            return [...state, payload];
        case "update":
            return state.map(evt=> evt.id === payload.id? payload: evt)
        case "delete":
            return state.filter(evt=>evt.id!==payload.id)
        default:
            throw new Error();
    }
}

function initEvents(){
    const storageEvents = localStorage.getItem('savedEvents');
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
}

export default function ContextWrapper({children}){
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedDay, setSelectedDay] = useState(dayjs());
    const [savedEvents, dispatchEvent] = useReducer(savedEventsReducer, [], initEvents);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(()=>{
        localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
    },[savedEvents])

    return(
        <GlobalContext.Provider value={{
            monthIndex, 
            setMonthIndex,
            showEventModal,
            setShowEventModal,
            selectedDay,
            setSelectedDay,
            dispatchEvent,
            savedEvents,
            selectedEvent,
            setSelectedEvent
        }}>
            {children}
        </GlobalContext.Provider>
    )
};