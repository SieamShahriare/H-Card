import React, { useState } from 'react';
import { 
  ChevronDown, 
  Eye, 
  Download, 
  Stethoscope,
  Search,
  X
} from 'lucide-react';
import { APPOINTMENTS, HOSPITALS, DOCTORS } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function MedicalHistory() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  
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
        <h2 className="text-3xl font-extrabold tracking-tight text-primary mb-2">{t('screens.medicalHistory.title')}</h2>
        <p className="text-on-surface-variant leading-relaxed">
          {t('screens.medicalHistory.subtitle')}
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
                    reportImage={app.reportImage}
                    onViewReport={setSelectedReport}
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

      {/* Report Modal */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-surface w-full max-w-2xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
            <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface">
              <h3 className="font-bold text-on-surface">{t('screens.medicalHistory.viewerTitle')}</h3>
              <button 
                onClick={() => setSelectedReport(null)}
                className="p-2 hover:bg-surface-container-high rounded-full transition-colors"
              >
                <X size={20} className="text-on-surface" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 bg-surface-container-lowest">
              <img 
                src={selectedReport} 
                alt="Medical Report" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="p-4 border-t border-outline-variant flex gap-3 bg-surface">
              <button 
                onClick={() => setSelectedReport(null)}
                className="flex-1 py-3 px-6 bg-surface-container-high text-on-surface rounded-2xl font-bold text-sm hover:bg-surface-container-highest transition-colors"
              >
                {t('screens.medicalHistory.close')}
              </button>
              <button className="flex-1 py-3 px-6 bg-primary text-on-primary rounded-2xl font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                {t('screens.medicalHistory.downloadPdf')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TimelineItem({ hospital, date, doctor, tag, tagColor, reportsLabel, dotColor, reportImage, onViewReport }: any) {
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
            <button 
              onClick={() => reportImage && onViewReport(reportImage)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all active:scale-95 ${
                reportImage 
                  ? 'bg-secondary/10 text-secondary hover:bg-secondary/20' 
                  : 'bg-outline-variant/10 text-outline cursor-not-allowed opacity-50'
              }`}
              disabled={!reportImage}
            >
              <Eye size={14} /> View PDF
            </button>
            <button 
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all active:scale-95 ${
                reportImage 
                  ? 'bg-primary/10 text-primary hover:bg-primary/20' 
                  : 'bg-outline-variant/10 text-outline cursor-not-allowed opacity-50'
              }`}
              disabled={!reportImage}
            >
              <Download size={14} /> Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
