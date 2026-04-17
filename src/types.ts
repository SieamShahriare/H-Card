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
  image: string;
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
  name_bn: string;
  address: string;
  address_bn: string;
  district: string;
  distance: string;
  time: string;
  status: 'Available' | 'Limited' | 'Busy';
  status_bn: string;
  type: 'Public' | 'Private';
  specialties: string[];
  specialties_bn: string[];
  tags: string[];
  tags_bn: string[];
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
  reportImage?: string;
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
  title_bn: string;
  description: string;
  description_bn: string;
  date?: string;
  dueDate?: string;
  hospitalId: string;
  status: 'Completed' | 'Pending';
  urgent?: boolean;
  doses: string;
  doses_bn: string;
  effectiveness: string;
  effectiveness_bn: string;
  benefits: string[];
  benefits_bn: string[];
}

export interface DiscoveryVaccine {
  id: string;
  title: string;
  title_bn: string;
  description: string;
  description_bn: string;
  category: string;
  category_bn: string;
  tag?: string;
  tagColor?: string;
  metaLabel: string;
  metaLabel_bn: string;
  metaValue: string;
  metaValue_bn: string;
  metaValueColor?: string;
  doses: string;
  doses_bn: string;
  effectiveness: string;
  effectiveness_bn: string;
  benefits: string[];
  benefits_bn: string[];
}
