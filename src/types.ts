export type Screen = 
  | 'home' 
  | 'records' 
  | 'medical-history' 
  | 'vaccines' 
  | 'vaccine-details' 
  | 'pending-vaccines' 
  | 'prescriptions' 
  | 'insurance' 
  | 'appointments'
  | 'past-appointments'
  | 'profile' 
  | 'notifications'
  | 'hospitals'
  | 'vaccine-discovery' 
  | 'book-appointment' 
  | 'select-hospital'
  | 'select-doctor' 
  | 'schedule-appointment' 
  | 'booking-success';

export interface User {
  name: string;
  id: string;
  bloodGroup: string;
  age: string;
  nid: string;
  dob: string;
  district: string;
  upazila: string;
  allergies: string[];
  chronicConditions: string[];
  emergencyContact: {
    name: string;
    relation: string;
    phone: string;
  };
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  district: string;
  distance: string;
  time: string;
  status: 'Available' | 'Limited' | 'Busy';
  type: 'Public' | 'Private';
  specialties: string[];
  tags: string[];
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  hospitalId: string;
  experience: string;
  availability: string;
  rating: number;
  image: string;
}

export interface Appointment {
  id: string;
  type: string;
  hospitalId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed';
  symptoms?: string;
  advice?: string;
}

export interface Medication {
  id: string;
  name: string;
  purpose: string;
  dosage: string;
  frequency: string;
  duration: string;
  remaining?: string;
  refill?: string;
  doctorId: string;
  hospitalId: string;
  status: 'active' | 'completed';
  endDate?: string;
}

export interface VaccineRecord {
  id: string;
  title: string;
  description: string;
  date?: string;
  dueDate?: string;
  hospitalId: string;
  status: 'Completed' | 'Pending';
  urgent?: boolean;
  doses: string;
  effectiveness: string;
  benefits: string[];
}
