import React from 'react';
import { MapPin, ChevronLeft, ChevronRight, CalendarPlus } from 'lucide-react';
import { Screen } from '../types';

export default function ScheduleAppointment({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="space-y-8 pb-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary">Schedule Appointment</h1>
        <p className="text-on-surface-variant leading-relaxed">
          Select an available date for your <span className="font-bold text-primary">Hepatitis B (Dose 2)</span> vaccine at <span className="font-semibold">Mugda Medical College Hospital</span>.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 items-center bg-surface-container-low rounded-2xl p-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-secondary font-medium text-[10px] uppercase tracking-wider">
            <MapPin size={16} />
            Mugda, Dhaka
          </div>
          <h3 className="text-xl font-bold text-primary">Mugda Medical College Hospital</h3>
          <p className="text-sm text-on-surface-variant">Vaccination Center Level 3, Room 302</p>
        </div>
        <div className="h-32 rounded-xl overflow-hidden shadow-sm">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWzOiDE2Mkv8ETOyCNl8b50pzPs-nfz6T8hnLbSf12Spx1_Sh5uw758QsJUqLqBKoOAeEtYV1VEMFDrGvdO6CK7QqIvIKyBph4hCt54bV2S2yPQTX1YysidJzEGYynviB7-_9dGpPc7nwE5sbKqR2pMlfxthfqzZo5WNM1HidhoEB1ZmN33w87QPi82TvMJQcXmGWGbxYv2CbNyXYjIA7ItxqgDIKpYpu5cL3zSvSySCPJUH0PBPl2XAxRxmgoxIDe8EFA0_thXMQb" alt="Hospital" className="w-full h-full object-cover" />
        </div>
      </div>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">Select Date</h2>
          <div className="flex items-center gap-4">
            <button className="text-primary p-1 hover:bg-surface-container-high rounded-lg"><ChevronLeft size={20} /></button>
            <span className="font-bold text-primary">October 2023</span>
            <button className="text-primary p-1 hover:bg-surface-container-high rounded-lg"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm ring-1 ring-black/5">
          <div className="grid grid-cols-7 gap-y-4 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-[10px] font-bold text-outline uppercase tracking-widest pb-2">{day}</div>
            ))}
            {[27, 28, 29, 30].map(date => <div key={`prev-${date}`} className="py-3 text-outline/30">{date}</div>)}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(date => <div key={date} className="py-3 font-medium hover:bg-surface-container-low rounded-xl cursor-pointer">{date}</div>)}
            <div className="relative py-3 bg-primary text-white font-bold rounded-xl shadow-lg">12</div>
            {[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map(date => <div key={date} className="py-3 font-medium hover:bg-surface-container-low rounded-xl cursor-pointer">{date}</div>)}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Available Time Slots</h2>
        <div className="grid grid-cols-2 gap-3">
          <TimeSlot time="09:00 AM" period="Morning" />
          <TimeSlot time="10:30 AM" period="Morning" active />
          <TimeSlot time="11:15 AM" period="Morning" />
          <TimeSlot time="01:45 PM" period="Afternoon" />
          <TimeSlot time="03:00 PM" period="Booked" disabled />
          <TimeSlot time="04:30 PM" period="Afternoon" />
        </div>
      </section>

      <div className="pt-6">
        <button onClick={() => setScreen('booking-success')} className="w-full bg-primary hover:bg-primary-container text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3">
          Confirm Booking
          <CalendarPlus size={24} />
        </button>
        <p className="text-center text-xs text-on-surface-variant mt-4 px-8">
          By confirming, you agree to the hospital's vaccination protocols and health safety guidelines.
        </p>
      </div>
    </div>
  );
}

function TimeSlot({ time, period, active, disabled }: any) {
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
      <button className="flex flex-col items-center justify-center p-4 rounded-xl bg-primary-container text-white ring-1 ring-primary transition-all">
        <span className="text-sm font-bold">{time}</span>
        <span className="text-[10px] opacity-80 font-medium uppercase tracking-wider">{period}</span>
      </button>
    );
  }
  return (
    <button className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-container-lowest ring-1 ring-outline-variant/30 hover:ring-secondary hover:bg-surface-container-high transition-all">
      <span className="text-sm font-bold text-on-surface">{time}</span>
      <span className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">{period}</span>
    </button>
  );
}
