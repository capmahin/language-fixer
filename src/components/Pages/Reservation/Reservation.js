import React from 'react';
import reserve from '../../../assets/Reservation.jpg'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Reservation = () => {
    return (
      <div>
        <h1 className='text-5xl text-accent my-12 text-center font-medium'>Reservation</h1>
        <div class="card lg:card-side bg-zinc-300 mx-12 ">
  <div class="hero-content flex-col lg:flex-row mx-auto px-12">
    <img src={reserve} class="max-w-sm rounded-lg shadow-2xl" alt='#' />
    <div>
      <DayPicker/>
    </div>
  </div>
</div>
      </div>
    );
};

export default Reservation;
