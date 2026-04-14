import { User, Hospital, Doctor, Appointment, Medication, VaccineRecord } from './types';

export const MOCK_USER: User = {
  name: "Shakhwat Hossain",
  id: "BD-1992-0822-01",
  bloodGroup: "O+",
  age: "33", // Updated for 2026
  nid: "19922695101000088",
  dob: "12 August 1992",
  district: "Dhaka",
  upazila: "Dhanmondi",
  allergies: ["Penicillin", "Dust"],
  chronicConditions: ["Hypertension", "Type 2 Diabetes", "Acid Reflux"],
  emergencyContact: {
    name: "Ayesha Rahman",
    relation: "Spouse",
    phone: "+880 1711-223344"
  }
};

export const HOSPITALS: Hospital[] = [
  {
    id: "h1",
    name: "Evercare Hospital",
    address: "Bashundhara R/A, Dhaka",
    district: "Dhaka",
    distance: "2.4 km",
    time: "15 mins",
    status: "Available",
    type: "Private",
    specialties: ["Cardiology", "Orthopedics", "General Medicine"],
    tags: ["JCI ACCREDITED", "24/7 EMERGENCY"]
  },
  {
    id: "h2",
    name: "Square Hospital",
    address: "Panthapath, Dhaka",
    district: "Dhaka",
    distance: "1.2 km",
    time: "8 mins",
    status: "Available",
    type: "Private",
    specialties: ["Cardiology", "Internal Medicine", "Gastroenterology"],
    tags: ["TOP RATED", "SPECIALIST CARE"]
  },
  {
    id: "h3",
    name: "Dhaka Medical College Hospital",
    address: "Secretariat Road, Ramna, Dhaka",
    district: "Dhaka",
    distance: "3.5 km",
    time: "20 mins",
    status: "Busy",
    type: "Public",
    specialties: ["All Specialties", "Vaccination Center"],
    tags: ["GOVT CERTIFIED", "VACCINE HUB"]
  },
  {
    id: "h4",
    name: "United Hospital",
    address: "Gulshan 2, Dhaka",
    district: "Dhaka",
    distance: "5.8 km",
    time: "25 mins",
    status: "Available",
    type: "Private",
    specialties: ["Cardiology", "Internal Medicine", "Surgery"],
    tags: ["MULTISPECIALTY"]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "d1",
    name: "Dr. Tahmid Rahman",
    specialty: "Senior Consultant, Cardiology",
    hospitalId: "h2",
    experience: "15+ Years",
    availability: "Mon, Wed, Fri",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "d2",
    name: "Dr. Anisur Rahman",
    specialty: "Orthopedic Surgeon",
    hospitalId: "h1",
    experience: "12+ Years",
    availability: "Sun, Tue, Thu",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "d3",
    name: "Dr. Rakibul Islam",
    specialty: "Internal Medicine",
    hospitalId: "h4",
    experience: "10+ Years",
    availability: "Daily",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "d4",
    name: "Dr. Nafisa Islam",
    specialty: "Endocrinologist",
    hospitalId: "h3",
    experience: "10+ Years",
    availability: "Mon - Thu",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80"
  }
];

// Helper to generate relative dates
const getDate = (daysOffset: number) => {
  const d = new Date("2026-04-15"); // Static base date for demo
  d.setDate(d.getDate() + daysOffset);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

const getDateTime = (daysOffset: number, time: string) => {
  return `${getDate(daysOffset)} • ${time}`;
};

export const APPOINTMENTS: Appointment[] = [
  {
    id: "a1",
    type: "Cardiology Checkup",
    hospitalId: "h2",
    doctorId: "d1",
    date: getDate(5),
    time: "10:30 AM",
    status: "confirmed"
  },
  {
    id: "a2",
    type: "Internal Medicine",
    hospitalId: "h4",
    doctorId: "d3",
    date: getDate(12),
    time: "04:15 PM",
    status: "pending"
  },
  {
    id: "a3",
    type: "Follow-up ECG",
    hospitalId: "h2",
    doctorId: "d1",
    date: getDate(-180),
    time: "11:00 AM",
    status: "completed",
    symptoms: "Occasional chest tightness during exercise, mild fatigue.",
    advice: "Continue daily walking. Reduced sodium intake. Follow-up ECG in 6 months."
  },
  {
    id: "a4",
    type: "Routine Checkup",
    hospitalId: "h4",
    doctorId: "d3",
    date: getDate(-280),
    time: "03:30 PM",
    status: "completed",
    symptoms: "Routine health checkup, seasonal allergy symptoms.",
    advice: "Blood work came back normal. Recommended antihistamine for allergy relief."
  },
  {
    id: "a5",
    type: "Fever & Cold Consultation",
    hospitalId: "h3",
    doctorId: "d4",
    date: getDate(-450),
    time: "10:00 AM",
    status: "completed",
    symptoms: "High fever (102F), body ache, and dry cough for 3 days.",
    advice: "Paracetamol 500mg, bed rest, and increased fluid intake. PCR test was negative."
  },
  {
    id: "a6",
    type: "Diabetes Monitoring",
    hospitalId: "h3",
    doctorId: "d4",
    date: getDate(-520),
    time: "09:15 AM",
    status: "completed",
    symptoms: "Routine HbA1c check and fasting glucose monitoring.",
    advice: "HbA1c is 6.8%. Continue Metformin 500mg. Focus on low-carb diet."
  },
  {
    id: "a7",
    type: "Ankle Strain Treatment",
    hospitalId: "h1",
    doctorId: "d2",
    date: getDate(-600),
    time: "11:45 AM",
    status: "completed",
    symptoms: "Swelling and pain in right ankle after a fall.",
    advice: "Grade 1 strain. RICE therapy for 1 week. Avoid heavy lifting."
  }
];

export const MEDICATIONS: Medication[] = [
  {
    id: "m1",
    name: "Napa Extend",
    purpose: "Pain & Fever Management",
    dosage: "500 mg",
    frequency: "Twice Daily",
    duration: "10 Days",
    remaining: "4 Days",
    doctorId: "d3",
    hospitalId: "h4",
    status: "active"
  },
  {
    id: "m2",
    name: "Seclo 20mg",
    purpose: "Gastric Acid Control",
    dosage: "20 mg",
    frequency: "Once Daily (Morning)",
    duration: "Long-term",
    refill: "In 15 Days",
    doctorId: "d4",
    hospitalId: "h3",
    status: "active"
  },
  {
    id: "m3",
    name: "Lisinopril",
    purpose: "Hypertension Control",
    dosage: "10 mg",
    frequency: "Once Daily",
    duration: "Ongoing",
    refill: "In 5 Days",
    doctorId: "d1",
    hospitalId: "h2",
    status: "active"
  },
  {
    id: "m4",
    name: "Amoxicillin 500mg",
    purpose: "Bacterial Infection",
    dosage: "500 mg",
    frequency: "Three Times Daily",
    duration: "7 Days",
    doctorId: "d3",
    hospitalId: "h4",
    status: "completed",
    endDate: "12 Jan 2026"
  },
  {
    id: "m5",
    name: "Ibuprofen 400mg",
    purpose: "Pain & Inflammation",
    dosage: "400 mg",
    frequency: "As Needed",
    duration: "5 Days",
    doctorId: "d2",
    hospitalId: "h1",
    status: "completed",
    endDate: "20 Dec 2025"
  },
  {
    id: "m6",
    name: "Vitamin D3",
    purpose: "Supplements",
    dosage: "2000 IU",
    frequency: "Once Daily",
    duration: "3 Months",
    doctorId: "d4",
    hospitalId: "h3",
    status: "completed",
    endDate: "15 Nov 2025"
  }
];

export const VACCINES: VaccineRecord[] = [
  {
    id: "v1",
    title: "BCG (Tuberculosis)",
    description: "Bacillus Calmette-Guérin (BCG) vaccine is primarily used against tuberculosis (TB). In countries where TB or leprosy is common, one dose is recommended in healthy babies as close to the time of birth as possible.",
    date: "15 March 2025",
    hospitalId: "h3",
    status: "Completed",
    doses: "Single Dose",
    effectiveness: "80% Protection",
    benefits: [
      "Protects infants against severe forms of TB.",
      "Reduces the risk of leprosy infection.",
      "Safe and cost-effective preventive measure."
    ]
  },
  {
    id: "v2",
    title: "OPV (Polio) - Dose 3",
    description: "Oral Poliovirus Vaccines (OPV) are the predominant vaccine used in the fight to eradicate polio. There are different types of oral poliovirus vaccine, which may contain one, two, or three types of attenuated poliovirus.",
    date: "02 January 2025",
    hospitalId: "h3",
    status: "Completed",
    doses: "3 Dose Series",
    effectiveness: "99% Protection",
    benefits: [
      "Prevents paralytic poliomyelitis.",
      "Provides community immunity via oral shedding.",
      "Easy administration without needles."
    ]
  },
  {
    id: "v3",
    title: "Hepatitis B",
    description: "Protecting your liver from infectious diseases is a cornerstone of long-term wellness. The Hepatitis B vaccine is a safe and effective way to prevent infection.",
    date: "12 November 2024",
    hospitalId: "h1",
    status: "Completed",
    doses: "3 Dose Series",
    effectiveness: "95% Protection",
    benefits: [
      "Prevents chronic liver disease and liver cancer.",
      "Essential for high-risk regions and international travel.",
      "Safe for adults, children, and infants."
    ]
  },
  {
    id: "v4",
    title: "Hepatitis B (Dose 2)",
    description: "The second dose of the Hepatitis B series is critical for establishing long-term immunity. Missing this dose can significantly reduce the vaccine's effectiveness.",
    dueDate: getDate(5),
    hospitalId: "h1",
    status: "Pending",
    urgent: true,
    doses: "3 Dose Series",
    effectiveness: "95% Protection (after series)",
    benefits: [
      "Strengthens the immune response from the first dose.",
      "Closes the window of vulnerability to infection.",
      "Required for full certificate of immunization."
    ]
  },
  {
    id: "v5",
    title: "Influenza (Annual)",
    description: "Annual flu shots are recommended for everyone 6 months and older. Flu viruses change every year, so the vaccine is updated annually to match circulating strains.",
    dueDate: getDate(20),
    hospitalId: "h3",
    status: "Pending",
    doses: "Annual Dose",
    effectiveness: "40-60% Protection",
    benefits: [
      "Reduces the risk of flu-related hospitalization.",
      "Protects against seasonal respiratory complications.",
      "Helps protect vulnerable people in the community."
    ]
  }
];

export const DISCOVERY_VACCINES = [
  {
    id: "dv1",
    title: "COVID-19 Booster",
    description: "Updated monovalent vaccine targeting current variants. Recommended for adults 65+ and immunocompromised individuals.",
    category: "Seasonal",
    tag: "Highly Recommended",
    tagColor: "bg-emerald-100 text-emerald-900",
    metaLabel: "Availability",
    metaValue: "Immediate",
    metaValueColor: "text-emerald-700",
    doses: "Single Booster",
    effectiveness: "High Protection",
    benefits: [
      "Reduces risk of severe illness.",
      "Protects against emerging variants.",
      "Maintains community immunity."
    ]
  },
  {
    id: "dv2",
    title: "Influenza (Flu)",
    description: "Annual quadrivalent flu shot. Best taken during the autumn months for maximum protection through winter.",
    category: "Seasonal",
    tag: "Seasonal",
    tagColor: "bg-blue-100 text-blue-900",
    metaLabel: "Availability",
    metaValue: "In Stock",
    metaValueColor: "text-emerald-700",
    doses: "Annual Dose",
    effectiveness: "40-60% Protection",
    benefits: [
      "Prevents seasonal flu complications.",
      "Reduces sick days during winter.",
      "Protects vulnerable populations."
    ]
  },
  {
    id: "dv3",
    title: "Hepatitis B",
    description: "Protect against liver infection. Required for healthcare workers and recommended for all infants at birth.",
    category: "Pediatric",
    metaLabel: "Doses Needed",
    metaValue: "3 Dose Series",
    metaValueColor: "text-on-surface",
    doses: "3 Dose Series",
    effectiveness: "95% Protection",
    benefits: [
      "Prevents chronic liver disease.",
      "Lifelong protection once completed.",
      "Safe for all age groups."
    ]
  },
  {
    id: "dv4",
    title: "HPV",
    description: "Human Papillomavirus vaccine. Prevents infections that can lead to certain types of cancer later in life.",
    category: "Pediatric",
    metaLabel: "Eligibility",
    metaValue: "Ages 9-26",
    metaValueColor: "text-on-surface",
    doses: "2-3 Dose Series",
    effectiveness: "Near 100% (Pre-exposure)",
    benefits: [
      "Prevents cervical and other cancers.",
      "Long-lasting protection.",
      "Highly effective if given early."
    ]
  },
  {
    id: "dv5",
    title: "Yellow Fever",
    description: "Required for travel to certain countries in Africa and South America. Provides lifelong protection.",
    category: "Travel",
    tag: "Travel Mandatory",
    tagColor: "bg-orange-100 text-orange-900",
    metaLabel: "Validity",
    metaValue: "Lifetime",
    metaValueColor: "text-on-surface",
    doses: "Single Dose",
    effectiveness: "99% Protection",
    benefits: [
      "Essential for international travel.",
      "Lifetime immunity with one shot.",
      "Required for entry in many regions."
    ]
  },
  {
    id: "dv6",
    title: "Typhoid",
    description: "Recommended for travelers to areas with poor sanitation. Protects against Salmonella Typhi.",
    category: "Travel",
    metaLabel: "Type",
    metaValue: "Injectable/Oral",
    metaValueColor: "text-on-surface",
    doses: "Single/Multiple",
    effectiveness: "50-80% Protection",
    benefits: [
      "Protects against water-borne disease.",
      "Recommended for low-sanitation areas.",
      "Prevents severe systemic infection."
    ]
  }
];
