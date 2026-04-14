import React from 'react';
import { 
  CheckCircle, 
  Activity, 
  MapPin, 
  Hospital,
  Verified
} from 'lucide-react';

export default function VaccineDetails() {
  return (
    <div className="space-y-10 pb-8">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-primary text-[10px] font-bold tracking-wider uppercase">
          <Verified size={12} className="fill-current" />
          Recommended
        </div>
        <h2 className="text-4xl font-extrabold text-primary tracking-tighter leading-none">
          Hepatitis B <br />Vaccination
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
          Protecting your liver from infectious diseases is a cornerstone of long-term wellness. The Hepatitis B vaccine is a safe and effective way to prevent infection.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col p-4 bg-surface-container-low rounded-2xl min-w-[140px]">
            <span className="text-[9px] font-bold text-outline uppercase tracking-widest mb-1">Doses</span>
            <span className="text-xl font-bold text-primary">3 Dose Series</span>
          </div>
          <div className="flex flex-col p-4 bg-surface-container-low rounded-2xl min-w-[140px]">
            <span className="text-[9px] font-bold text-outline uppercase tracking-widest mb-1">Effectiveness</span>
            <span className="text-xl font-bold text-primary">95% Protection</span>
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
              <h3 className="text-2xl font-bold text-on-surface tracking-tight">Why it's recommended</h3>
              <p className="text-on-surface-variant mt-2 text-sm">
                Hepatitis B is a viral infection that attacks the liver and can cause both acute and chronic disease.
              </p>
            </div>
          </div>
          
          <ul className="space-y-4">
            <BenefitItem text="Prevents chronic liver disease and liver cancer." />
            <BenefitItem text="Essential for high-risk regions and international travel." />
            <BenefitItem text="Safe for adults, children, and infants." />
          </ul>
        </div>

        <div className="p-8 bg-primary text-white rounded-3xl shadow-xl flex flex-col justify-between min-h-[200px]">
          <div>
            <h3 className="text-xl font-bold mb-4 leading-tight">Ready to book?</h3>
            <p className="text-emerald-100/70 text-sm mb-6 leading-relaxed">
              Schedule your first dose today at our nearest partner hospital for verified records.
            </p>
          </div>
          <button className="w-full py-4 bg-white text-primary font-bold rounded-2xl active:scale-95 transition-transform">
            Find Appointment
          </button>
        </div>
      </div>

      {/* Provider Map Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">NEAREST PROVIDER</span>
            <h3 className="text-2xl font-extrabold text-on-surface tracking-tight">Mugda Medical College Hospital</h3>
          </div>
          <button className="text-secondary font-bold text-xs underline underline-offset-4 hover:text-secondary-container transition-colors">
            View All
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
                <h4 className="font-bold text-on-surface text-xs">Mugda Medical College</h4>
                <p className="text-on-surface-variant text-[10px] mt-1">Mugda, Dhaka 1214</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[8px] font-bold rounded uppercase">Available</span>
                  <span className="text-[8px] text-on-surface-variant font-medium">2.4 km away</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
