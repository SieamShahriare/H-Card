import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';

export default function ComingSoon({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-primary mb-6">
        <Construction size={40} />
      </div>
      <h2 className="text-2xl font-extrabold text-primary mb-2">Coming Soon</h2>
      <p className="text-on-surface-variant mb-8">
        We're working hard to bring this feature to your e-Health Card. Stay tuned!
      </p>
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-primary font-bold hover:underline"
      >
        <ArrowLeft size={18} /> Go Back
      </button>
    </div>
  );
}
