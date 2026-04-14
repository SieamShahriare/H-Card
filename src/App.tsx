/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './screens/Home';
import Records from './screens/Records';
import MedicalHistory from './screens/MedicalHistory';
import Vaccines from './screens/Vaccines';
import VaccineDetails from './screens/VaccineDetails';
import Prescriptions from './screens/Prescriptions';
import Insurance from './screens/Insurance';
import Appointments from './screens/Appointments';
import PastAppointments from './screens/PastAppointments';
import Profile from './screens/Profile';
import ComingSoon from './screens/ComingSoon';
import Notifications from './screens/Notifications';
import Hospitals from './screens/Hospitals';
import VaccineDiscovery from './screens/VaccineDiscovery';
import BookAppointment from './screens/BookAppointment';
import SelectHospital from './screens/SelectHospital';
import SelectDoctor from './screens/SelectDoctor';
import ScheduleAppointment from './screens/ScheduleAppointment';
import BookingSuccess from './screens/BookingSuccess';
import { Screen, User } from './types';
import { MOCK_USER } from './data';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [history, setHistory] = useState<Screen[]>(['home']);
  const [selectedVaccineId, setSelectedVaccineId] = useState<string | null>(null);
  const [selectedHospitalId, setSelectedHospitalId] = useState<string | null>(null);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);

  const navigateTo = (screen: Screen, params?: { vaccineId?: string, hospitalId?: string, doctorId?: string }) => {
    if (params?.vaccineId) setSelectedVaccineId(params.vaccineId);
    if (params?.hospitalId) setSelectedHospitalId(params.hospitalId);
    if (params?.doctorId) setSelectedDoctorId(params.doctorId);
    
    setHistory(prev => [...prev, screen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setCurrentScreen(newHistory[newHistory.length - 1]);
    }
  };

  const getTitle = () => {
    switch (currentScreen) {
      case 'home': return 'e-Health Card';
      case 'records': return 'Medical Records';
      case 'medical-history': return 'History';
      case 'vaccines': return 'Immunization';
      case 'vaccine-details': return 'Vaccine Info';
      case 'prescriptions': return 'Prescriptions';
      case 'insurance': return 'Insurance';
      case 'appointments': return 'Appointments';
      case 'past-appointments': return 'Your Visits';
      case 'profile': return 'My Profile';
      case 'notifications': return 'Notifications';
      case 'hospitals': return 'Find Centers';
      case 'vaccine-discovery': return 'Vaccines';
      case 'book-appointment': return 'Book Appointment';
      case 'select-hospital': return 'Select Hospital';
      case 'select-doctor': return 'Select Doctor';
      case 'schedule-appointment': return 'Schedule Appointment';
      case 'booking-success': return 'Booking Success';
      default: return 'Coming Soon';
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home user={MOCK_USER} setScreen={navigateTo} />;
      case 'records':
        return <Records setScreen={navigateTo} />;
      case 'medical-history':
        return <MedicalHistory />;
      case 'vaccines':
        return <Vaccines setScreen={navigateTo} />;
      case 'vaccine-details':
        return <VaccineDetails vaccineId={selectedVaccineId} />;
      case 'prescriptions':
        return <Prescriptions />;
      case 'insurance':
        return <Insurance />;
      case 'appointments':
        return <Appointments setScreen={navigateTo} />;
      case 'past-appointments':
        return <PastAppointments setScreen={navigateTo} />;
      case 'profile':
        return <Profile user={MOCK_USER} />;
      case 'notifications':
        return <Notifications />;
      case 'hospitals':
        return <Hospitals setScreen={navigateTo} />;
      case 'vaccine-discovery':
        return <VaccineDiscovery setScreen={navigateTo} />;
      case 'book-appointment':
        return <BookAppointment setScreen={navigateTo} />;
      case 'select-hospital':
        return <SelectHospital setScreen={navigateTo} />;
      case 'select-doctor':
        return <SelectDoctor setScreen={navigateTo} hospitalId={selectedHospitalId} />;
      case 'schedule-appointment':
        return (
          <ScheduleAppointment 
            setScreen={navigateTo} 
            hospitalId={selectedHospitalId} 
            doctorId={selectedDoctorId}
            vaccineId={selectedVaccineId}
          />
        );
      case 'booking-success':
        return <BookingSuccess setScreen={navigateTo} />;
      default:
        return <ComingSoon onBack={goBack} />;
    }
  };

  const showBack = history.length > 1 && !['home', 'records', 'appointments', 'profile'].includes(currentScreen);

  return (
    <Layout 
      currentScreen={currentScreen} 
      setScreen={(s) => {
        setHistory([s]);
        setCurrentScreen(s);
      }}
      title={getTitle()}
      showBack={showBack}
      onBack={goBack}
      user={MOCK_USER}
    >
      {renderScreen()}
    </Layout>
  );
}
