import React from 'react';
import { 
  ShieldCheck, 
  Wallet, 
  CreditCard, 
  ChevronRight,
  HelpCircle,
  FileText,
  BadgeCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Insurance() {
  const { t } = useLanguage();
  return (
    <div className="space-y-10 pb-8">
      {/* Editorial Header */}
      <header>
        <div className="flex items-center gap-2 mb-2">
          <BadgeCheck size={16} className="text-primary" />
          <span className="uppercase tracking-widest text-primary font-bold text-[9px]">{t('screens.insurance.verifiedCoverage')}</span>
        </div>
        <h2 className="text-4xl font-extrabold text-on-background tracking-tighter mb-4">{t('screens.insurance.title')}</h2>
        <p className="text-on-surface-variant text-base leading-relaxed">
          {t('screens.insurance.subtitle')}
        </p>
      </header>

      {/* Main Insurance Card */}
      <section>
        <div className="bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-12">
              <div>
                <p className="text-emerald-200/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Primary Policy</p>
                <h3 className="text-2xl font-bold tracking-tight">National Health Subsidy</h3>
              </div>
              <ShieldCheck size={40} className="text-emerald-200" />
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-emerald-200/40 text-[9px] uppercase tracking-widest font-bold">Policy Number</p>
                <p className="text-xl font-mono tracking-widest font-medium">NH-2024-8892-001</p>
              </div>
              
              <div className="flex gap-12">
                <div>
                  <p className="text-emerald-200/40 text-[9px] uppercase tracking-widest font-bold">Coverage</p>
                  <p className="text-lg font-bold">85% In-patient</p>
                </div>
                <div>
                  <p className="text-emerald-200/40 text-[9px] uppercase tracking-widest font-bold">Expiry</p>
                  <p className="text-lg font-bold">Dec 2025</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Abstract Design Elements */}
          <div className="absolute right-[-40px] top-[-40px] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute left-[-20px] bottom-[-20px] w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Quick Actions Bento */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10 shadow-sm flex flex-col gap-4">
          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-primary">
            <Wallet size={24} />
          </div>
          <div>
            <h4 className="font-bold text-on-surface text-sm">Claim History</h4>
            <p className="text-[10px] text-on-surface-variant mt-1">Review past reimbursements</p>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10 shadow-sm flex flex-col gap-4">
          <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
            <CreditCard size={24} />
          </div>
          <div>
            <h4 className="font-bold text-on-surface text-sm">Payment Methods</h4>
            <p className="text-[10px] text-on-surface-variant mt-1">Manage billing & cards</p>
          </div>
        </div>
      </section>

      {/* List of Policies */}
      <section>
        <h3 className="text-xl font-bold text-on-background tracking-tight mb-6 px-2">{t('screens.insurance.otherPolicies')}</h3>
        <div className="space-y-4">
          <PolicyItem 
            name="LifePlus Private Insurance"
            type="Comprehensive Health"
            status="Active"
            color="bg-blue-500"
          />
          <PolicyItem 
            name="Critical Illness Cover"
            type="Specialized Support"
            status="Renew Soon"
            color="bg-orange-500"
          />
        </div>
      </section>

      {/* Help Section */}
      <section>
        <div className="bg-surface-container-low rounded-3xl p-6 flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
            <HelpCircle size={24} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-on-surface text-sm">Need help with claims?</h4>
            <p className="text-on-surface-variant text-xs mt-1">Our support team is available 24/7 for assistance.</p>
          </div>
          <ChevronRight size={20} className="text-outline" />
        </div>
      </section>
    </div>
  );
}

function PolicyItem({ name, type, status, color }: { name: string, type: string, status: string, color: string }) {
  return (
    <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/15 flex items-center justify-between hover:bg-surface-container-low transition-colors group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className={`w-2 h-10 rounded-full ${color}`}></div>
        <div>
          <h4 className="font-bold text-on-surface text-sm">{name}</h4>
          <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">{type}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={`text-[9px] font-bold uppercase tracking-wider ${status === 'Active' ? 'text-primary' : 'text-orange-600'}`}>
          {status}
        </span>
        <ChevronRight size={16} className="text-outline group-hover:text-primary transition-colors" />
      </div>
    </div>
  );
}
