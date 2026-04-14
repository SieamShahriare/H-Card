import React, { useState } from 'react';
import { MapPin, ChevronLeft, ChevronRight, CalendarPlus } from 'lucide-react';
import { Screen } from '../types';
import { HOSPITALS, DOCTORS, VACCINES } from '../data';

interface ScheduleAppointmentProps {
  setScreen: (s: Screen) => void;
  hospitalId: string | null;
  doctorId: string | null;
  vaccineId: string | null;
}

export default function ScheduleAppointment({ setScreen, hospitalId, doctorId, vaccineId }: ScheduleAppointmentProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(15);
  const [selectedTime, setSelectedTime] = useState<string | null>("10:30 AM");

  const hospital = HOSPITALS.find(h => h.id === hospitalId) || HOSPITALS[0];
  const doctor = DOCTORS.find(d => d.id === doctorId);
  const vaccine = VACCINES.find(v => v.id === vaccineId);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="space-y-8 pb-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary">Schedule Appointment</h1>
        <p className="text-on-surface-variant leading-relaxed">
          {vaccine ? (
            <>Select an available date for your <span className="font-bold text-primary">{vaccine.title}</span> vaccine.</>
          ) : (
            <>Book your consultation with <span className="font-bold text-primary">{doctor?.name || 'our specialist'}</span>.</>
          )}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 items-center bg-surface-container-low rounded-2xl p-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-secondary font-medium text-[10px] uppercase tracking-wider">
            <MapPin size={16} />
            {hospital.address}
          </div>
          <h3 className="text-xl font-bold text-primary">{hospital.name}</h3>
          <p className="text-sm text-on-surface-variant">
            {vaccine ? 'Vaccination Center Level 3, Room 302' : `${doctor?.specialty} Dept, Level 5`}
          </p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">Select Date</h2>
          <div className="flex items-center gap-4">
            <button className="text-primary p-1 hover:bg-surface-container-high rounded-lg"><ChevronLeft size={20} /></button>
            <span className="font-bold text-primary">April 2026</span>
            <button className="text-primary p-1 hover:bg-surface-container-high rounded-lg"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm ring-1 ring-black/5">
          <div className="grid grid-cols-7 gap-y-2 text-center">
            {days.map(day => (
              <div key={day} className="text-[10px] font-bold text-outline uppercase tracking-widest pb-2">{day}</div>
            ))}
            {/* Simple static calendar for April 2026 starting on Wednesday (1st) */}
            {[/* Padding for start of month */ '', '', ''].map((_, i) => <div key={`pad-${i}`} />)}
            {dates.map(date => (
              <button 
                key={date} 
                onClick={() => setSelectedDate(date)}
                className={`py-3 font-medium rounded-xl transition-all ${
                  selectedDate === date 
                    ? 'bg-primary text-white shadow-lg scale-110 z-10' 
                    : 'hover:bg-surface-container-low'
                }`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Available Time Slots</h2>
        <div className="grid grid-cols-2 gap-3">
          <TimeSlot 
            time="09:00 AM" 
            period="Morning" 
            active={selectedTime === "09:00 AM"} 
            onClick={() => setSelectedTime("09:00 AM")} 
          />
          <TimeSlot 
            time="10:30 AM" 
            period="Morning" 
            active={selectedTime === "10:30 AM"} 
            onClick={() => setSelectedTime("10:30 AM")} 
          />
          <TimeSlot 
            time="11:15 AM" 
            period="Morning" 
            active={selectedTime === "11:15 AM"} 
            onClick={() => setSelectedTime("11:15 AM")} 
          />
          <TimeSlot 
            time="01:45 PM" 
            period="Afternoon" 
            active={selectedTime === "01:45 PM"} 
            onClick={() => setSelectedTime("01:45 PM")} 
          />
          <TimeSlot time="03:00 PM" period="Booked" disabled />
          <TimeSlot 
            time="04:30 PM" 
            period="Afternoon" 
            active={selectedTime === "04:30 PM"} 
            onClick={() => setSelectedTime("04:30 PM")} 
          />
        </div>
      </section>

      <div className="pt-6">
        <button 
          onClick={() => setScreen('booking-success')} 
          disabled={!selectedDate || !selectedTime}
          className="w-full bg-primary hover:bg-primary-container disabled:bg-outline-variant disabled:cursor-not-allowed text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3"
        >
          Confirm Booking
          <CalendarPlus size={24} />
        </button>
        <p className="text-center text-xs text-on-surface-variant mt-4 px-8">
          By confirming, you agree to the hospital's protocols and health safety guidelines.
        </p>
      </div>
    </div>
  );
}

function TimeSlot({ time, period, active, disabled, onClick }: any) {
  if (disabled) {
    return (
      <button disabled className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-container-lowest ring-1 ring-outline-variant/30 opacity-50 cursor-not-allowed">
        <span className="text-sm font-bold text-on-surface line-through">{time}</span>
        <span className="text-[10px] text-error font-medium uppercase tracking-wider">{period}</span>
      </button>
    );
  }
  if (active) {
    return (
      <button 
        onClick={onClick}
        className="flex flex-col items-center justify-center p-4 rounded-xl bg-primary text-white ring-1 ring-primary transition-all shadow-md"
      >
        <span className="text-sm font-bold">{time}</span>
        <span className="text-[10px] opacity-80 font-medium uppercase tracking-wider">{period}</span>
      </button>
    );
  }
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-container-lowest ring-1 ring-outline-variant/30 hover:ring-secondary hover:bg-surface-container-high transition-all"
    >
      <span className="text-sm font-bold text-on-surface">{time}</span>
      <span className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">{period}</span>
    </button>
  );
}
