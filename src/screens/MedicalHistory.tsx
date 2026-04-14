import React from 'react';
import { 
  ChevronDown, 
  Eye, 
  Download, 
  Stethoscope
} from 'lucide-react';

export default function MedicalHistory() {
  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-primary mb-2">Medical History</h2>
        <p className="text-on-surface-variant leading-relaxed">
          Your complete healthcare journey, organized by time and clinical significance.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
        <button className="px-6 py-2.5 rounded-full bg-primary text-white font-bold text-sm whitespace-nowrap shadow-md">All</button>
        <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors whitespace-nowrap text-sm font-semibold">Consultations</button>
        <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors whitespace-nowrap text-sm font-semibold">Tests</button>
        <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors whitespace-nowrap text-sm font-semibold">Surgeries</button>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[19px] top-4 bottom-0 w-[2px] bg-outline-variant opacity-30"></div>
        
        {/* Year 2025 */}
        <div className="mb-10 relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="z-10 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-primary font-bold shadow-sm border-4 border-surface">25</div>
            <h3 className="text-xl font-bold text-primary tracking-tight">2025</h3>
          </div>

          <TimelineItem 
            hospital="Dhaka Medical College Hospital"
            date="14 Jan 2025 • General Ward"
            doctor="Dr. Anisur Rahman"
            tag="Fever & Cold"
            tagColor="bg-orange-50 text-orange-700"
            reportsLabel="Lab Reports & Vitals"
            dotColor="bg-secondary"
          />
        </div>

        {/* Year 2024 */}
        <div className="mb-10 relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="z-10 w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold shadow-sm border-4 border-surface">24</div>
            <h3 className="text-xl font-bold text-on-surface-variant tracking-tight">2024</h3>
          </div>

          <TimelineItem 
            hospital="Kurmitola General Hospital"
            date="12 Dec 2024 • Endocrine Unit"
            doctor="Dr. Nafisa Islam"
            tag="Diabetes"
            tagColor="bg-red-50 text-red-700"
            reportsLabel="Prescription History"
            dotColor="bg-red-500"
          />

          <TimelineItem 
            hospital="National Institute of Cardiovascular Diseases"
            date="05 Aug 2024 • Cardiac OPD"
            doctor="Prof. Mahmudul Haque"
            tag="Checkup"
            tagColor="bg-blue-50 text-blue-700"
            reportsLabel="ECG Results"
            dotColor="bg-secondary"
          />
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
