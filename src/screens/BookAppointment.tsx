import React from 'react';
import { Stethoscope, Syringe, ChevronRight, Info } from 'lucide-react';
import { Screen } from '../types';

export default function BookAppointment({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="space-y-8 pb-8">
      {/* Header Section */}
      <section className="pt-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-3">Book Appointment</h1>
        <p className="text-slate-500 text-lg leading-snug">
          Choose the service category you require for your upcoming clinic visit.
        </p>
      </section>

      {/* Options Cards */}
      <div className="space-y-6">
        {/* General Checkup Card */}
        <button 
          onClick={() => setScreen('select-hospital')}
          className="w-full bg-white rounded-[2rem] p-10 text-left shadow-sm border border-slate-100 hover:shadow-md transition-all group active:scale-[0.99]"
        >
          <div className="flex justify-between items-start mb-12">
            <div className="w-16 h-16 rounded-2xl bg-sky-100/50 flex items-center justify-center text-sky-700">
              <Stethoscope size={32} />
            </div>
            <ChevronRight className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">General Checkup</h3>
            <p className="text-slate-500 leading-relaxed max-w-[280px]">
              Routine physical exams, wellness visits, and specialist consultations.
            </p>
          </div>
        </button>

        {/* Vaccination Card */}
        <button 
          onClick={() => setScreen('vaccine-discovery')}
          className="w-full bg-white rounded-[2rem] p-10 text-left shadow-sm border border-slate-100 hover:shadow-md transition-all group active:scale-[0.99]"
        >
          <div className="flex justify-between items-start mb-12">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100/50 flex items-center justify-center text-emerald-700">
              <Syringe size={32} />
            </div>
            <ChevronRight className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Vaccination</h3>
            <p className="text-slate-500 leading-relaxed max-w-[280px]">
              Scheduled vaccinations, seasonal flu shots, and booster doses.            </p>
          </div>
        </button>
      </div>

      {/* Coming Soon Banner */}
      <section>
        <div className="bg-sky-50/50 rounded-3xl p-6 flex items-start gap-5 border border-sky-100/50">
          <div className="w-12 h-12 rounded-xl bg-slate-200/50 flex items-center justify-center text-slate-600 shrink-0">
            <Info size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-1">Coming Soon</p>
            <p className="text-sm font-medium text-slate-600 leading-relaxed">
              Mental Health and Lab Tests will be available for direct booking next month.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
