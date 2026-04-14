import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Screen } from '../types';
import { APPOINTMENTS, HOSPITALS, DOCTORS } from '../data';

interface PastAppointmentsProps {
  setScreen: (screen: Screen) => void;
}

export default function PastAppointments({ setScreen }: PastAppointmentsProps) {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');

  const getHospitalName = (id: string) => HOSPITALS.find(h => h.id === id)?.name || 'Health Center';
  const getDoctor = (id: string) => DOCTORS.find(d => d.id === id);

  const upcomingAppointments = APPOINTMENTS.filter(a => a.status === 'confirmed' || a.status === 'pending');
  const pastAppointments = APPOINTMENTS.filter(a => a.status === 'completed');

  return (
    <div className="space-y-8 pb-8">
      {/* Editorial Header */}
      <div>
        <h1 className="text-4xl font-extrabold text-primary tracking-tight mb-2">Your Visits</h1>
        <p className="text-on-surface-variant font-medium text-sm">
          {tab === 'upcoming' ? 'Manage your upcoming visits with healthcare professionals.' : 'Review your history of healthcare consultations.'}
        </p>
      </div>

      {/* Appointment Filter Tabs */}
      <div className="flex gap-3">
        <button 
          onClick={() => setTab('upcoming')}
          className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all active:scale-95 ${
            tab === 'upcoming' ? 'bg-primary text-white shadow-md' : 'bg-surface-container-high text-on-surface-variant hover:bg-emerald-50'
          }`}
        >
          Upcoming
        </button>
        <button 
          onClick={() => setTab('past')}
          className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all active:scale-95 ${
            tab === 'past' ? 'bg-primary text-white shadow-md' : 'bg-surface-container-high text-on-surface-variant hover:bg-emerald-50'
          }`}
        >
          Past
        </button>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {tab === 'upcoming' ? (
          <>
            {upcomingAppointments.map(app => {
              const doctor = getDoctor(app.doctorId);
              return (
                <AppointmentCard 
                  key={app.id}
                  date={`${app.date} • ${app.time}`}
                  doctor={doctor?.name || 'Doctor'}
                  specialty={doctor?.specialty || 'Specialist'}
                  hospital={getHospitalName(app.hospitalId)}
                  status={app.status.toUpperCase()}
                  statusColor={app.status === 'confirmed' ? 'bg-emerald-100 text-emerald-900' : 'bg-secondary-container/30 text-secondary'}
                  isUpcoming={true}
                />
              );
            })}
          </>
        ) : (
          <>
            {pastAppointments.map(app => {
              const doctor = getDoctor(app.doctorId);
              return (
                <AppointmentCard 
                  key={app.id}
                  date={`${app.date} • ${app.time}`}
                  doctor={doctor?.name || 'Doctor'}
                  specialty={doctor?.specialty || 'Specialist'}
                  hospital={getHospitalName(app.hospitalId)}
                  status="COMPLETED"
                  statusColor="bg-slate-200 text-slate-700"
                  isUpcoming={false}
                  symptoms={app.symptoms}
                  advice={app.advice}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

function AppointmentCard({ date, doctor, specialty, hospital, status, statusColor, isUpcoming, opacity = "", symptoms, advice }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10 group hover:shadow-md transition-shadow ${opacity}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center shrink-0">
            <Calendar className="text-secondary" size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">{date}</p>
            <h2 className="text-lg font-bold text-on-surface leading-tight">{doctor}</h2>
            <p className="text-on-surface-variant text-xs font-medium mt-0.5">{specialty}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider shrink-0 ${statusColor}`}>
          {status}
        </span>
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="text-on-surface-variant shrink-0" size={14} />
        <span className="text-xs text-on-surface-variant">{hospital}</span>
      </div>

      {isUpcoming ? (
        <div className="flex gap-3">
          <button className="flex-1 py-2.5 rounded-xl bg-primary text-white font-bold text-xs active:scale-95 transition-transform shadow-sm">
            Get Directions
          </button>
        </div>
      ) : (
        <div className="border-t border-surface-container-high pt-3 mt-2">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between w-full outline-none"
          >
            <span className="text-xs font-bold text-primary">View Details</span>
            {expanded ? <ChevronUp size={16} className="text-primary" /> : <ChevronDown size={16} className="text-primary" />}
          </button>
          
          {expanded && (
            <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <div>
                <p className="text-[9px] font-bold text-outline uppercase tracking-widest mb-1">Symptoms</p>
                <p className="text-xs text-on-surface leading-relaxed">{symptoms}</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-outline uppercase tracking-widest mb-1">Doctor's Advice</p>
                <p className="text-xs text-on-surface leading-relaxed">{advice}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
