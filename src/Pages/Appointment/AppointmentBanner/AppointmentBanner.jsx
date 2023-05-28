import React, { useState } from 'react';
import chair from "../../../assets/images/chair.png";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = () => {
  const [selectedDate , setSelectedDate] = useState(new Date())
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className='mr-6'>
            <DayPicker 
            mode='single'
            selected={selectedDate}
            onSelect={setSelectedDate}
            />
            <p>you have selected date {format(selectedDate, 'PP')}</p>
        </div>
        <img
          src={chair} alt="chair"
          className="rounded-lg w-1/2 shadow-2xl"
        />
      </div>
    </div>
  )
}

export default AppointmentBanner