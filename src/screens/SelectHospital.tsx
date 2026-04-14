import React from 'react';
import { Search, MapPin, Navigation } from 'lucide-react';
import { Screen } from '../types';

export default function SelectHospital({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="space-y-6 pb-8">
      <section className="relative h-64 w-full overflow-hidden rounded-3xl shadow-sm">
        <img src="https://lh3.googleusercontent.com/aida-public/AIn_v_id9E_D3_E5tX7V9_W1_V5_T3_Z2_B1_Y9_Y_j_v_y_j_q_m_i_a_7_S_g_O_y_2_4_R_n_T_n_1_I_K_b_y_0_y_F_u_0_u_2_x_n_6_o_F_r_A_Q_i_D_k_E_7_M_a_f_J_r_y_P_e_C_A_w_J_m_p_k_X_5_O_G_J_x_2_i_t_n_i_T_j_R_w_B_c_N_M_T_4_V_B_J_S_k_F_B_D_x_9_s_K_C_a_h_Z_d_d_b_g_l_I_d_2_e_1_q_x_u_G_S_n_i_r_k_Q_6_g_n_m_8_d_R_y_L_W_j_x_3_X_r_m_4_Y_C_V_4_r_0_q_A_e_F_O_f_5_X_l_f_H_z_k_W_m_m_F_U_x_H_n_u_A_Q_2_F_a_I_B_7_U_l_L_S_q_z_J_P_i_F_J_O_K_7_P_y_L_s_u_y_F_o_Y_4_x_Y_9_E_L_k_u_w_v_w_p_C_q_L_8_n_I_x_x_d_9_X_t_t_u_C_J_t_J_t_w_G_y_v_k_h" alt="Map" className="w-full h-full object-cover opacity-80" />
        <div className="absolute top-1/4 left-1/3 flex flex-col items-center">
          <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">Evercare</div>
          <MapPin className="text-primary fill-current" size={24} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center">
          <div className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">Square</div>
          <MapPin className="text-secondary fill-current" size={24} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-on-surface mb-4">Hospitals with Cardiology Specialists</h2>
        <div className="relative flex items-center group mb-6">
          <div className="absolute left-4 text-on-surface-variant">
            <Search size={20} />
          </div>
          <input type="text" placeholder="Search hospital name" className="w-full h-14 pl-12 pr-4 bg-surface-container-high border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-on-surface-variant/60" />
        </div>

        <div className="space-y-4">
          <HospitalCard name="Evercare Hospital" location="Bashundhara, Dhaka" distance="2.4 km" tags={['AVAILABLE TODAY', 'JCI ACCREDITED']} onClick={() => setScreen('select-doctor')} />
          <HospitalCard name="Square Hospital" location="Panthapath, Dhaka" distance="4.1 km" tags={['NEXT SLOT: MON']} onClick={() => setScreen('select-doctor')} />
          <HospitalCard name="United Hospital" location="Gulshan, Dhaka" distance="5.8 km" tags={['TOP RATED']} onClick={() => setScreen('select-doctor')} />
        </div>
      </section>
    </div>
  );
}

function HospitalCard({ name, location, distance, tags, onClick }: any) {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-5 flex flex-col gap-4 shadow-sm border border-outline-variant/10">
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="h-14 w-14 rounded-xl bg-surface-container-high flex items-center justify-center overflow-hidden text-primary">
            <MapPin size={28} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-on-surface">{name}</h3>
            <p className="text-sm text-on-surface-variant">{location}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
          <Navigation size={14} className="text-primary" />
          <span className="text-xs font-bold text-primary">{distance}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        {tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold tracking-wider text-on-surface-variant uppercase">{tag}</span>
        ))}
      </div>
      <button onClick={onClick} className="w-full h-12 bg-primary text-white rounded-xl font-bold tracking-wide hover:brightness-110 active:scale-95 transition-all">
        Select Hospital
      </button>
    </div>
  );
}
