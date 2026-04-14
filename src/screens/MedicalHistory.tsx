import React, { useState } from 'react';
import { 
  ChevronDown, 
  Eye, 
  Download, 
  Stethoscope,
  Search
} from 'lucide-react';
import { APPOINTMENTS, HOSPITALS, DOCTORS } from '../data';

export default function MedicalHistory() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const getHospitalName = (id: string) => HOSPITALS.find(h => h.id === id)?.name || 'Health Center';
  const getDoctorName = (id: string) => DOCTORS.find(d => d.id === id)?.name || 'Doctor';

  const pastAppointments = APPOINTMENTS.filter(a => {
    const isCompleted = a.status === 'completed';
    const hospitalName = getHospitalName(a.hospitalId).toLowerCase();
    const doctorName = getDoctorName(a.doctorId).toLowerCase();
    const type = a.type.toLowerCase();
    const query = searchQuery.toLowerCase();
    
    return isCompleted && (
      hospitalName.includes(query) || 
      doctorName.includes(query) || 
      type.includes(query)
    );
  });

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-primary mb-2">Medical History</h2>
        <p className="text-on-surface-variant leading-relaxed">
          Your complete healthcare journey, organized by time and clinical significance.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <Search className="text-outline" size={20} />
        </div>
        <input 
          type="text" 
          placeholder="Search hospital, doctor or diagnosis..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-14 pl-14 pr-6 rounded-2xl bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 transition-all text-sm placeholder:text-outline"
        />
      </div>

      {/* Timeline Section */}
      <div className="relative pt-4">
        {/* Vertical Line */}
        {pastAppointments.length > 0 && (
          <div className="absolute left-[19px] top-8 bottom-0 w-[2px] bg-outline-variant opacity-30"></div>
        )}
        
        <div className="space-y-12">
          {pastAppointments.length > 0 ? (
            pastAppointments.map((app, index) => {
              const year = app.date.split(' ').pop();
              const prevYear = index > 0 ? pastAppointments[index-1].date.split(' ').pop() : null;
              const showYear = year !== prevYear;

              return (
                <div key={app.id} className="relative">
                  {showYear && (
                    <div className="flex items-center gap-4 mb-6">
                      <div className="z-10 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-primary font-bold shadow-sm border-4 border-surface">
                        {year?.slice(-2)}
                      </div>
                      <h3 className="text-xl font-bold text-primary tracking-tight">{year}</h3>
                    </div>
                  )}
                  
                  <TimelineItem 
                    hospital={getHospitalName(app.hospitalId)}
                    date={app.date}
                    doctor={getDoctorName(app.doctorId)}
                    tag={app.type}
                    tagColor="bg-blue-50 text-blue-700"
                    reportsLabel="Clinical Records"
                    dotColor="bg-secondary"
                  />
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <p className="text-on-surface-variant italic">No records found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ hospital, date, doctor, tag, tagColor, reportsLabel, dotColor }: any) {
  return (
    <div className="ml-5 pl-8 pb-8 relative group">
      <div className={`absolute left-[-6px] top-6 w-3 h-3 rounded-full ${dotColor} ring-4 ring-surface z-10`}></div>
      <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/15 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="font-bold text-lg text-on-surface leading-tight">{hospital}</h4>
            <p className="text-xs text-on-surface-variant font-medium mt-1">{date}</p>
          </div>
          <span className={`${tagColor} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider`}>
            {tag}
          </span>
        </div>
        
        <div className="flex items-center gap-3 text-on-surface-variant mb-4">
          <Stethoscope size={16} className="text-outline" />
          <span className="text-sm font-medium">{doctor}</span>
        </div>

        <div className="pt-4 border-t border-outline-variant/10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-outline">{reportsLabel}</span>
            <ChevronDown size={16} className="text-outline" />
          </div>
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-secondary/10 text-secondary rounded-xl font-bold text-[10px] uppercase tracking-wider hover:bg-secondary/20 transition-colors active:scale-95">
              <Eye size={14} /> View PDF
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary/10 text-primary rounded-xl font-bold text-[10px] uppercase tracking-wider hover:bg-primary/20 transition-colors active:scale-95">
              <Download size={14} /> Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
