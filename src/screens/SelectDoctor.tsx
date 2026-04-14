import React from 'react';
import { Search, SlidersHorizontal, Star, CalendarCheck, ArrowRight } from 'lucide-react';
import { Screen } from '../types';
import { DOCTORS } from '../data';

export default function SelectDoctor({ setScreen, hospitalId }: { setScreen: (s: Screen, params?: { hospitalId?: string, doctorId?: string }) => void, hospitalId: string | null }) {
  // Demo filtering for cardiologists or specific hospital if needed
  const selectedDoctors = DOCTORS.filter(d => !hospitalId || d.hospitalId === hospitalId || d.specialty.includes('Cardiology'));

  return (
    <div className="space-y-6 pb-8">
      <section className="pt-4">
        <span className="text-secondary font-bold uppercase tracking-widest text-[10px]">Appointment Flow</span>
        <h1 className="text-3xl font-extrabold tracking-tight text-primary leading-tight mt-2 mb-2">Available Specialists</h1>
        <p className="text-on-surface-variant text-sm max-w-[80%]">Review the profiles of our top specialists and select your preferred physician.</p>
      </section>

      <div className="p-4 bg-surface-container-low rounded-3xl flex items-center gap-3">
        <Search className="text-outline" size={20} />
        <input type="text" placeholder="Search by name or specialty..." className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-outline-variant" />
        <SlidersHorizontal className="text-primary" size={20} />
      </div>

      <div className="flex flex-col gap-6">
        {selectedDoctors.map(doctor => (
          <DoctorCard 
            key={doctor.id}
            name={doctor.name} 
            role={doctor.specialty} 
            rating={doctor.rating} 
            reviews="120+" 
            nextAvailable={doctor.availability} 
            image={doctor.image}
            time="09:00 AM" 
            onClick={() => setScreen('schedule-appointment', { hospitalId: hospitalId || doctor.hospitalId, doctorId: doctor.id })} 
          />
        ))}
      </div>
    </div>
  );
}

function DoctorCard({ name, role, rating, reviews, nextAvailable, time, image, onClick }: any) {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-5 shadow-sm border border-outline-variant/10 flex flex-col gap-5">
      <div className="flex gap-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-surface-container-high overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-primary tracking-tight">{name}</h3>
          <p className="text-secondary font-medium text-sm">{role}</p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="text-amber-500 fill-current" size={14} />
            <span className="text-xs font-bold text-on-surface">{rating}</span>
            <span className="text-xs text-on-surface-variant">({reviews} Reviews)</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between bg-surface-container-low px-4 py-3 rounded-2xl">
        <div className="flex items-center gap-2">
          <CalendarCheck className="text-primary" size={18} />
          <span className="text-xs font-semibold text-on-surface">Availability: <span className="text-emerald-700">{nextAvailable}</span></span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-outline">{time}</span>
      </div>
      <button onClick={onClick} className="w-full bg-primary py-4 rounded-2xl text-white font-bold tracking-wide active:scale-95 transition-transform flex items-center justify-center gap-2">
        Request Booking <ArrowRight size={18} />
      </button>
    </div>
  );
}
