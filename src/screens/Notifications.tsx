import React from 'react';
import { CalendarCheck, FileText, Syringe, Microscope } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Notifications() {
  const { t } = useLanguage();
  return (
    <div className="space-y-4 pb-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">{t('nav.notifications')}</h2>
        <button className="text-secondary font-semibold text-sm hover:underline">{t('screens.notifications.markAllRead')}</button>
      </div>

      {/* Notification Item: Appointment Confirmed */}
      <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex gap-4 border-l-4 border-primary">
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
          <CalendarCheck className="text-primary" size={24} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-lg text-on-surface leading-tight">{t('screens.notifications.appointmentConfirmed')}</h3>
            <span className="text-xs font-medium text-outline uppercase tracking-wider">2m ago</span>
          </div>
          <p className="text-on-surface-variant text-sm mb-3">Your visit with Dr. Aris Thorne for Cardiac Review is scheduled for tomorrow at 10:30 AM.</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-full">{t('screens.notifications.addToCalendar')}</button>
            <button className="px-4 py-2 bg-surface-container-high text-secondary text-xs font-bold rounded-full">{t('screens.notifications.details')}</button>
          </div>
        </div>
      </div>

      {/* Notification Item: New Prescription Added */}
      <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
          <FileText className="text-blue-700" size={24} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-lg text-on-surface leading-tight">{t('screens.notifications.newPrescription')}</h3>
            <span className="text-xs font-medium text-outline uppercase tracking-wider">4h ago</span>
          </div>
          <p className="text-on-surface-variant text-sm">A new digital prescription for Amoxicillin has been authorized by the Health Center.</p>
        </div>
      </div>

      {/* Notification Item: Vaccine Due Soon */}
      <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex gap-4 border-l-4 border-orange-700">
        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
          <Syringe className="text-orange-700" size={24} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-lg text-on-surface leading-tight">{t('screens.notifications.vaccineDue')}</h3>
            <span className="text-xs font-medium text-outline uppercase tracking-wider">Yesterday</span>
          </div>
          <p className="text-on-surface-variant text-sm mb-3">Your annual influenza vaccination is due. Early booking ensures clinic availability.</p>
          <button className="px-4 py-2 bg-orange-700 text-white text-xs font-bold rounded-full">{t('screens.notifications.bookNow')}</button>
        </div>
      </div>

      {/* Notification Item: Lab Results Ready */}
      <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex gap-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
          <Microscope className="text-primary" size={24} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-lg text-on-surface leading-tight">{t('screens.notifications.labResultsReady')}</h3>
            <span className="text-xs font-medium text-outline uppercase tracking-wider">Yesterday</span>
          </div>
          <p className="text-on-surface-variant text-sm">Your Blood Panel results from Oct 24 are now available in your medical records vault.</p>
        </div>
      </div>

      {/* Decorative Card */}
      <div className="relative overflow-hidden rounded-xl bg-primary mt-8 p-6 text-white min-h-[160px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSrmT0kwp-YuVkgNGtEiyfVEAHb8_H4Ud0Nh2C8-HgPDEjm7qecFRtM6vzqtJ9GcBQ_iLEtt5bITD9A_7ZkWuHcndkitEQqY4JDYhzY3e8h6jd4p-Wf9h0Vd3Km8wJeVXfHOuSPI8k-X-GqQxoqQn1vvlRY5Nu7dxFpoqcnYheGr4diDaYPOwDvq-1agO6h-FHBBl1nULtPdEXIxw8Zc11uoiE0MJCYnnt9P4Ztj6hgDw6qOMOXKQEFB0VT3PldFLKKLAKkujBFLmK" 
            alt="Security" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <h4 className="text-xl font-bold mb-2">{t('screens.notifications.securityTitle')}</h4>
          <p className="text-sm text-emerald-100 opacity-90 leading-relaxed max-w-[80%]">{t('screens.notifications.securityDesc')}</p>
        </div>
      </div>
    </div>
  );
}
