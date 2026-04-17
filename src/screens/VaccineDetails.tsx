import React from 'react';
import { 
  CheckCircle, 
  Activity, 
  Hospital,
  Verified
} from 'lucide-react';
import { VACCINES, HOSPITALS, DISCOVERY_VACCINES } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function VaccineDetails({ vaccineId }: { vaccineId: string | null }) {
  const { locale: lang } = useLanguage();
  const t = translations[lang].screens.vaccineDetails;

  const vaccine = VACCINES.find(v => v.id === vaccineId) || 
                  DISCOVERY_VACCINES.find(v => v.id === vaccineId) || 
                  VACCINES[0];
  
  const hospital = HOSPITALS.find(h => h.id === (vaccine as any).hospitalId) || HOSPITALS[0];

  return (
    <div className="space-y-10 pb-8">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-primary text-[10px] font-bold tracking-wider uppercase">
          <Verified size={12} className="fill-current" />
          {vaccine.status === 'Completed' ? t.verifiedRecord : t.recommended}
        </div>
        <h2 className="text-4xl font-extrabold text-primary tracking-tighter leading-none">
          {vaccine[lang === 'bn' ? 'title_bn' : 'title']}
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
          {vaccine[lang === 'bn' ? 'description_bn' : 'description']}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col p-4 bg-surface-container-low rounded-2xl min-w-35">
            <span className="text-[9px] font-bold text-outline uppercase tracking-widest mb-1">{t.dosesLabel}</span>
            <span className="text-xl font-bold text-primary">{vaccine[lang === 'bn' ? 'doses_bn' : 'doses']}</span>
          </div>
          <div className="flex flex-col p-4 bg-surface-container-low rounded-2xl min-w-[140px]">
            <span className="text-[9px] font-bold text-outline uppercase tracking-widest mb-1">{t.effectivenessLabel}</span>
            <span className="text-xl font-bold text-primary">{vaccine[lang === 'bn' ? 'effectiveness_bn' : 'effectiveness']}</span>
          </div>
        </div>
      </section>

      {/* Bento Grid Info */}
      <div className="grid grid-cols-1 gap-6">
        <div className="p-8 bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/10">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-secondary-container/30 flex items-center justify-center text-secondary shrink-0">
              <Activity size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-on-surface tracking-tight">{t.whyRecommended}</h3>
              <p className="text-on-surface-variant mt-2 text-sm">
                {t.benefitsSubtitle.replace('{title}', vaccine[lang === 'bn' ? 'title_bn' : 'title'])}
              </p>
            </div>
          </div>
          
          <ul className="space-y-4">
            {vaccine[lang === 'bn' ? 'benefits_bn' : 'benefits'].map((benefit: string, i: number) => (
              <BenefitItem key={i} text={benefit} />
            ))}
          </ul>
        </div>

        {vaccine.status === 'Pending' && (
          <div className="p-8 bg-primary text-white rounded-3xl shadow-xl flex flex-col justify-between min-h-[200px]">
            <div>
              <h3 className="text-xl font-bold mb-4 leading-tight">{t.readyToBook}</h3>
              <p className="text-emerald-100/70 text-sm mb-6 leading-relaxed">
                {t.bookingSubtitle}
              </p>
            </div>
            <button className="w-full py-4 bg-white text-primary font-bold rounded-2xl active:scale-95 transition-transform">
              {t.findAppointment}
            </button>
          </div>
        )}
      </div>

      {/* Provider Map Section */}
      {hospital && (
        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">
                {vaccine.status === 'Completed' ? t.administeredAt : t.nearestProvider}
              </span>
              <h3 className="text-2xl font-extrabold text-on-surface tracking-tight">
                {hospital[lang === 'bn' ? 'name_bn' : 'name']}
              </h3>
            </div>
            <button className="text-secondary font-bold text-xs underline underline-offset-4 hover:text-secondary-container transition-colors">
              {t.viewAll}
            </button>
          </div>
          
          <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-sm ring-1 ring-outline-variant/20">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQt6KzpmvN_ia8ttUZWjynDtwlXJuD44q3LD0uFhl1b_7eanvDtoy0MRi5nX83BxeJ3utqtfGKNZ83FIF6rXiwFz-PXhKoSDCS2fw-WR-qI34Av7NecSU6ZVf3hVo3yXsG7j-61JcgUK7vkfvXc7I_U9tgYNb3XsaxyxTC_QBnwFeXJro9O_5byJZnEG_tf8pV4hK8VOjZ-rrtjWeD7sJC0XdfvyhpzJvZ1IDPvntcWM1YId0SOye2PaHu40ObsbmbKfkf6sGGD9nD" 
              alt="Map"
              className="w-full h-full object-cover"
            />
            {/* Floating Map Card */}
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Hospital size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-on-surface text-xs">{hospital[lang === 'bn' ? 'name_bn' : 'name']}</h4>
                  <p className="text-on-surface-variant text-[10px] mt-1">{hospital[lang === 'bn' ? 'address_bn' : 'address']}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[8px] font-bold rounded uppercase">
                      {hospital[lang === 'bn' ? 'status_bn' : 'status']}
                    </span>
                    <span className="text-[8px] text-on-surface-variant font-medium">{hospital.distance} away</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
      <span className="text-on-surface font-medium text-sm">{text}</span>
    </li>
  );
}
