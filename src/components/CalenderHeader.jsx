// import React from 'react'

// function CalenderHeader() {
//     return (
//         <div class="w-3-b  w3-border w3-light-grey">
//             <a href="#" class="w3-bar-item w3-button">Home</a>
//             <a href="#" class="w3-bar-item w3-button">Link 1</a>
//             <a href="#" class="w3-bar-item w3-button">Link 2</a>
//             <a href="#" class="w3-bar-item w3-button w3-green w3-right">Link 3</a>
//         </div>
//     )
// }

// export default CalenderHeader


import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import GlobalContext from '../context/GlobalContext'
import { getMonth } from '../util'
import dayjs from 'dayjs'
import CreateEvent from './CreateEvent'
import SearchEvent from './SearchEvent'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CalenderHeader() {
    const {monthIndex, setMonthIndex} = useContext(GlobalContext);
    const navigation = [
      { name: 'Calender App', href: '#', current: false , onClick:()=>{}},
      { name: 'Today', onClick:()=>{setMonthIndex(dayjs().month())} , current: false },
    ]
    return (
    <div as="nav" className="bg-gray-800 flex justify-between">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={item.onClick}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
                <button className='' onClick={()=>{setMonthIndex(monthIndex-1)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </button>
                <button onClick={()=>{setMonthIndex(monthIndex+1)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </button>
                <h2 className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                    {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
                </h2>
              </div>
          </div>
          
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <SearchEvent />
        <CreateEvent />
      </div>

    </div>
  )
}
