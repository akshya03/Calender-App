import React, { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getMonth } from './util';
import { CalenderHeader, Month, Sidebar } from './components';
import GlobalContext from './context/GlobalContext';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex} = useContext(GlobalContext);
  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex));
  },[monthIndex]);

  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <CalenderHeader/>
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
