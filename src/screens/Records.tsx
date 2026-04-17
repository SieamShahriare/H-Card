import React from 'react';
import { 
  History, 
  Syringe, 
  Wallet, 
  Pill, 
  ChevronRight,
  FileText,
  Clock
} from 'lucide-react';
import { Screen } from '../types';
import { APPOINTMENTS, MEDICATIONS, HOSPITALS, DOCTORS } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface RecordsProps {
  setScreen: (screen: Screen) => void;
}

export default function Records({ setScreen }: RecordsProps) {
  const { t } = useLanguage();
  // Get latest updates
  const recentAppointment = APPOINTMENTS.find(a => a.status === 'confirmed');
  const recentMedication = MEDICATIONS[0];

  const getHospitalName = (id: string) => HOSPITALS.find(h => h.id === id)?.name || 'Health Center';
  const getDoctorName = (id: string) => DOCTORS.find(d => d.id === id)?.name || 'Doctor';

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section>
        <div className="bg-primary-container rounded-[2rem] p-8 text-on-primary relative overflow-hidden shadow-xl shadow-primary-container/20">
          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80 font-headline">{t('screens.records.secureAccess')}</span>
            <h2 className="text-3xl font-extrabold mt-2 tracking-tight">{t('screens.records.title')}</h2>
            <p className="mt-2 text-emerald-100/80 max-w-xs text-lg opacity-90 leading-relaxed">
              {t('screens.records.subtitle')}
            </p>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Primary Navigation Bento Grid */}
      <section className="grid grid-cols-1 gap-4">
        <RecordCard 
          icon={<History size={28} />} 
          title={t('nav.history')} 
          description={t('screens.records.historyDesc')} 
          onClick={() => setScreen('medical-history')}
        />
        <RecordCard 
          icon={<Syringe size={28} />} 
          title={t('nav.vaccines')} 
          description={t('screens.records.vaccinesDesc')} 
          onClick={() => setScreen('vaccines')}
        />
        <RecordCard 
          icon={<Wallet size={28} />} 
          title={t('nav.insurance')} 
          description={t('screens.records.insuranceDesc')} 
          onClick={() => setScreen('insurance')}
        />
        <RecordCard 
          icon={<Pill size={28} />} 
          title={t('nav.prescriptions')} 
          description={t('screens.records.prescriptionsDesc')} 
          onClick={() => setScreen('prescriptions')}
        />
      </section>

      {/* Recent Updates Section */}
      <section>
        <div className="flex items-end justify-between mb-6 px-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-on-surface">{t('screens.records.recentUpdates')}</h2>
            <p className="text-on-surface-variant text-sm mt-1">{t('screens.records.updatesSubtitle')}</p>
          </div>
          <button className="text-primary font-bold text-sm hover:underline">{t('common.viewAll')}</button>
        </div>
        
        <div className="space-y-4">
          {recentAppointment && (
            <UpdateItem 
              icon={<FileText size={20} />}
              title={`${t('screens.records.appointmentLabel')}${recentAppointment.type}`}
              source={getHospitalName(recentAppointment.hospitalId)}
              date={`${t('screens.records.scheduledLabel')}${recentAppointment.date}`}
              isNew={true}
              newLabel={t('common.new')}
              color="bg-primary/10 text-primary"
            />
          )}
          {recentMedication && (
            <UpdateItem 
              icon={<Pill size={20} />}
              title={`${t('screens.records.newPrescriptionLabel')}${recentMedication.name}`}
              source={`${recentMedication.dosage} - ${getDoctorName(recentMedication.doctorId)}`}
              date={t('screens.records.verifiedLabel')}
              timeAgo="2d ago"
              color="bg-secondary/10 text-secondary"
            />
          )}
        </div>
      </section>
    </div>
  );
}

function RecordCard({ icon, title, description, onClick }: { icon: React.ReactNode, title: string, description: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="group bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/15 flex items-center justify-between hover:shadow-lg transition-all cursor-pointer text-left active:scale-[0.99]"
    >
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary transition-transform group-hover:scale-110">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-on-surface">{title}</h3>
          <p className="text-on-surface-variant text-sm">{description}</p>
        </div>
      </div>
      <ChevronRight size={20} className="text-outline group-hover:text-primary transition-colors" />
    </button>
  );
}

function UpdateItem({ icon, title, source, date, isNew, newLabel, timeAgo, color }: { icon: React.ReactNode, title: string, source: string, date: string, isNew?: boolean, newLabel?: string, timeAgo?: string, color: string }) {
  return (
    <div className="bg-surface-container-low rounded-2xl p-5 flex items-start gap-4 hover:bg-surface-container transition-colors">
      <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-bold text-on-surface text-sm leading-tight">{title}</h4>
          {isNew ? (
            <span className="text-[9px] font-bold text-primary bg-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-wider">{newLabel}</span>
          ) : (
            <span className="text-[10px] text-outline font-medium">{timeAgo}</span>
          )}
        </div>
        <p className="text-on-surface-variant text-xs mt-1">{source}</p>
        <p className="text-outline text-[10px] mt-2 italic flex items-center gap-1">
          <Clock size={10} /> {date}
        </p>
      </div>
    </div>
  );
}
