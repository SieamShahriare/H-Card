import React from 'react';
import { CheckCircle, Building2, Calendar, Verified } from 'lucide-react';
import { Screen } from '../types';

export default function BookingSuccess({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="flex flex-col justify-center items-center text-center min-h-[70vh] pb-8">
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-primary opacity-5 blur-3xl rounded-full scale-150"></div>
        <div className="relative w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
          <CheckCircle size={48} />
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary mb-4">Request Submitted</h1>
      <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-md mx-auto">
        Your vaccine appointment request has been submitted successfully. Our team will review it and notify you via SMS/Email once confirmed.
      </p>

      <div className="w-full bg-surface-container-lowest rounded-xl p-8 mb-12 shadow-sm relative overflow-hidden text-left border-l-4 border-primary">
        <div className="absolute top-0 right-0 p-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary opacity-40">Booking Details</span>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-outline mb-2 block">Healthcare Center</label>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center text-primary">
                <Building2 size={20} />
              </div>
              <div>
                <p className="font-bold text-lg text-on-surface">Central Civic Medical Hub</p>
                <p className="text-sm text-on-surface-variant">42 Health Plaza, District 5</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-outline mb-2 block">Preferred Date & Time</label>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center text-secondary">
                <Calendar size={20} />
              </div>
              <div>
                <p className="font-bold text-lg text-on-surface">October 24, 2023</p>
                <p className="text-sm text-on-surface-variant">09:30 AM — 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-container-high flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full">
            <Verified size={16} className="text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-tighter">Status: Pending Review</span>
          </div>
        </div>
      </div>

      <div className="w-full space-y-4">
        <button onClick={() => setScreen('home')} className="w-full px-12 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 mx-auto">
          Back to Home
        </button>
        <button onClick={() => setScreen('past-appointments')} className="w-full px-8 py-3 text-secondary font-semibold hover:bg-secondary/5 rounded-xl transition-colors mx-auto">
          View All My Requests
        </button>
      </div>
    </div>
  );
}
