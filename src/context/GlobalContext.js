import React from 'react'
import dayjs from 'dayjs';

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index)=>{},
    showEventModal: false,
    setShowEventModal: ()=>{},
    selectedDay: null,
    setSelectedDay: (day)=>{},
    dispatchEvent: ({type, payload})=>{},
    savedEvents: [],
    setSelectedEvent: ()=>{},
    selectedEvent: null

});

export default GlobalContext;