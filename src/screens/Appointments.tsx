import React from 'react';
import { PlusCircle, Calendar as CalendarIcon, ArrowRight } from 'lucide-react';
import { Screen } from '../types';

export default function Appointments({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="space-y-8 pb-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-primary tracking-tight mb-4">Appointments</h2>
        <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
          Manage your healthcare journey with ease. Choose an action below to get started with your medical consultations.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Book New Appointment Card */}
        <button 
          onClick={() => setScreen('book-appointment')}
          className="group relative overflow-hidden bg-surface-container-lowest rounded-[2rem] p-8 text-left shadow-sm hover:shadow-md transition-all duration-300 border border-outline-variant/10 active:scale-[0.98]"
        >
          <div className="absolute top-0 right-0 p-16 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <PlusCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">Book New Appointment</h3>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Schedule a consultation with your preferred specialist or general practitioner in just a few steps.
            </p>
            <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
              Get Started <ArrowRight className="ml-2" size={20} />
            </div>
          </div>
        </button>

        {/* View Past & Pending Card */}
        <button 
          onClick={() => setScreen('past-appointments')}
          className="group relative overflow-hidden bg-surface-container-low rounded-[2rem] p-8 text-left transition-all duration-300 active:scale-[0.98] hover:bg-surface-container-high border border-outline-variant/10"
        >
          <div className="relative z-10">
            <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-secondary/20">
              <CalendarIcon size={32} />
            </div>
            <h3 className="text-2xl font-bold text-on-background mb-3">View Past & Pending Appointments</h3>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Track your upcoming visits, view history, and manage existing bookings and follow-ups.
            </p>
            <div className="flex items-center text-secondary font-bold group-hover:translate-x-2 transition-transform">
              Open Dashboard <ArrowRight className="ml-2" size={20} />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
