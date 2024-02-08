import dayjs from 'dayjs';
import React, { useState } from 'react'

function Day({day, rowIdx}) {
    // console.log(day);
    // const [currentDayClass, setCurrentDayClass] = useState("");

    // setCurrentDayClass(day.format("DD-MM-YY")===dayjs().format("DD-MM-YY")?'bg-blue-600 text-white rounded-full w-7': "");

    return (
        <div className='border border-gray-200 flex flex-col'>
            <header className='flex flex-col items-center'>
                <p className="text-sm mt-1">
                    {rowIdx===0 && day.format('ddd').toUpperCase()}
                </p>
                <p className={`text-sm p-1 my-1 text-center ${day.format("DD-MM-YY")===dayjs().format("DD-MM-YY")?"bg-blue-600 text-white rounded-full w-7":""}`}>
                    {day.format('DD')}
                </p>
            </header>
            
        </div>
    )
}

export default Day
