import React from 'react';
import { Search, MapPin, Plus, Minus, Navigation, Home as HomeIcon, Activity, AlertCircle, ArrowRight } from 'lucide-react';
import { HOSPITALS } from '../data';
import { Screen } from '../types';

export default function Hospitals({ setScreen }: { setScreen: (s: Screen, params?: { hospitalId: string }) => void }) {
  const publicHospitals = HOSPITALS.filter(h => h.type === 'Public');

  return (
    <div className="space-y-8 pb-8">
      {/* Search & Editorial Header */}
      <section>
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-background mb-4">Find your vaccine center</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">Select a government-certified facility to schedule your immunization. All listed locations provide real-time availability updates.</p>
        </div>
        
        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search className="text-outline" size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search by hospital name or area..." 
            className="w-full h-16 pl-14 pr-6 rounded-3xl bg-surface-container-high border-none focus:ring-2 focus:ring-secondary/20 transition-all text-sm placeholder:text-outline"
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px] rounded-3xl overflow-hidden shadow-sm border border-outline-variant/15">
        <div className="absolute inset-0 bg-surface-container-low flex items-center justify-center">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AIn_v_id9E_D3_E5tX7V9_W1_V5_T3_Z2_B1_Y9_Y_j_v_y_j_q_m_i_a_7_S_g_O_y_2_4_R_n_T_n_1_I_K_b_y_0_y_F_u_0_u_2_x_n_6_o_F_r_A_Q_i_D_k_E_7_M_a_f_J_r_y_P_e_C_A_w_J_m_p_k_X_5_O_G_J_x_2_i_t_n_i_T_j_R_w_B_c_N_M_T_4_V_B_J_S_k_F_B_D_x_9_s_K_C_a_h_Z_d_d_b_g_l_I_d_2_e_1_q_x_u_G_S_n_i_r_k_Q_6_g_n_m_8_d_R_y_L_W_j_x_3_X_r_m_4_Y_C_V_4_r_0_q_A_e_F_O_f_5_X_l_f_H_z_k_W_m_m_F_U_x_H_n_u_A_Q_2_F_a_I_B_7_U_l_L_S_q_z_J_P_i_F_J_O_K_7_P_y_L_s_u_y_F_o_Y_4_x_Y_9_E_L_k_u_w_v_w_p_C_q_L_8_n_I_x_x_d_9_X_t_t_u_C_J_t_J_t_w_G_y_v_k_h" 
            alt="City Map" 
            className="w-full h-full object-cover opacity-60 grayscale-[10%]"
          />
          
          {/* Pins */}
          <div className="absolute top-1/3 left-1/4 group cursor-pointer">
            <div className="bg-primary text-white p-2 rounded-full shadow-lg transition-transform group-hover:scale-110">
              <MapPin size={20} className="fill-current" />
            </div>
          </div>
          <div className="absolute top-1/2 right-1/3 group cursor-pointer">
            <div className="bg-primary text-white p-2 rounded-full shadow-lg transition-transform group-hover:scale-110">
              <MapPin size={20} className="fill-current" />
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button className="bg-white p-2.5 rounded-2xl shadow-lg text-primary hover:bg-surface-container-high transition-colors">
            <Navigation size={20} />
          </button>
          <button className="bg-white p-2.5 rounded-2xl shadow-lg text-primary hover:bg-surface-container-high transition-colors">
            <Plus size={20} />
          </button>
          <button className="bg-white p-2.5 rounded-2xl shadow-lg text-primary hover:bg-surface-container-high transition-colors">
            <Minus size={20} />
          </button>
        </div>
      </section>

      {/* Hospital List Header */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-on-background">Nearby Facilities</h3>
          <p className="text-sm text-on-surface-variant font-medium mt-1">Found {publicHospitals.length} centers within 5km</p>
        </div>
        <button className="text-secondary font-bold flex items-center gap-1 hover:underline text-sm">
          View all <ArrowRight size={16} />
        </button>
      </div>

      {/* Hospital Cards */}
      <div className="space-y-4">
        {publicHospitals.map(h => (
          <HospitalCard 
            key={h.id}
            icon={<HomeIcon size={24} />}
            name={h.name}
            address={h.address}
            distance={h.distance}
            time={h.time}
            status={h.status}
            statusColor={h.status === 'Available' ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}
            onSelect={() => setScreen('schedule-appointment', { hospitalId: h.id })}
          />
        ))}
      </div>
    </div>
  );
}

function HospitalCard({ icon, name, address, distance, time, status, statusColor, onSelect }: any) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-surface-container-low rounded-2xl text-primary">
          {icon}
        </div>
        <div className={`${statusColor} px-3 py-1 rounded-full`}>
          <span className="text-[9px] font-extrabold uppercase tracking-widest">{status}</span>
        </div>
      </div>
      <h4 className="text-lg font-bold text-on-background leading-tight mb-1">{name}</h4>
      <p className="text-on-surface-variant text-xs mb-6 flex items-center gap-1">
        <MapPin size={12} /> {address}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-surface-container-low">
        <div className="text-xs text-on-surface-variant">
          <p className="font-bold text-on-background">{distance}</p>
          <p>{time}</p>
        </div>
        <button 
          onClick={onSelect}
          className="bg-primary text-white px-6 py-2.5 rounded-2xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all"
        >
          Choose
        </button>
      </div>
    </div>
  );
}
