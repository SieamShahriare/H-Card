import { User, Hospital, Doctor, Appointment, Medication, VaccineRecord } from './types';
import pfp from './assets/pfp.png';
import rep1 from './assets/rep1.png';
import rep2 from './assets/rep2.png';
import rep3 from './assets/rep3.png';

export const MOCK_USER: User = {
  name: "Shakhwat Khan",
  id: "1992-0822-01",
  image: pfp,
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
    name_bn: "এভারকেয়ার হাসপাতাল",
    address: "Bashundhara R/A, Dhaka",
    address_bn: "বসুন্ধরা আর/এ, ঢাকা",
    district: "Dhaka",
    distance: "2.4 km",
    time: "15 mins",
    status: "Available",
    status_bn: "উপলব্ধ",
    type: "Private",
    specialties: ["Cardiology", "Orthopedics", "General Medicine"],
    specialties_bn: ["হৃদরোগ বিদ্যা", "অর্থোপেডিকস", "জেনারেল মেডিসিন"],
    tags: ["JCI ACCREDITED", "24/7 EMERGENCY"],
    tags_bn: ["জেসিআই স্বীকৃত", "২৪/৭ জরুরি"]
  },
  {
    id: "h2",
    name: "Square Hospital",
    name_bn: "স্কয়ার হাসপাতাল",
    address: "Panthapath, Dhaka",
    address_bn: "পান্থপথ, ঢাকা",
    district: "Dhaka",
    distance: "1.2 km",
    time: "8 mins",
    status: "Available",
    status_bn: "উপলব্ধ",
    type: "Private",
    specialties: ["Cardiology", "Internal Medicine", "Gastroenterology"],
    specialties_bn: ["হৃদরোগ বিদ্যা", "ইন্টারনাল মেডিসিন", "গ্যাস্ট্রোএন্টারোলজি"],
    tags: ["TOP RATED", "SPECIALIST CARE"],
    tags_bn: ["শীর্ষ রেটেড", "বিশেষজ্ঞ যত্ন"]
  },
  {
    id: "h3",
    name: "Dhaka Medical College Hospital",
    name_bn: "ঢাকা মেডিকেল কলেজ হাসপাতাল",
    address: "Secretariat Road, Ramna, Dhaka",
    address_bn: "সচিবালয় রোড, রমনা, ঢাকা",
    district: "Dhaka",
    distance: "3.5 km",
    time: "20 mins",
    status: "Busy",
    status_bn: "ব্যস্ত",
    type: "Public",
    specialties: ["All Specialties", "Vaccination Center"],
    specialties_bn: ["সব বিশেষজ্ঞ", "টিকাদান কেন্দ্র"],
    tags: ["GOVT CERTIFIED", "VACCINE HUB"],
    tags_bn: ["সরকারি স্বীকৃত", "টিকা হাব"]
  },
  {
    id: "h4",
    name: "United Hospital",
    name_bn: "ইউনাইটেড হাসপাতাল",
    address: "Gulshan 2, Dhaka",
    address_bn: "গুলশান ২, ঢাকা",
    district: "Dhaka",
    distance: "5.8 km",
    time: "25 mins",
    status: "Available",
    status_bn: "উপলব্ধ",
    type: "Private",
    specialties: ["Cardiology", "Internal Medicine", "Surgery"],
    specialties_bn: ["হৃদরোগ বিদ্যা", "ইন্টারনাল মেডিসিন", "সার্জারি"],
    tags: ["MULTISPECIALTY"],
    tags_bn: ["মাল্টিস্পেশালিটি"]
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
    advice: "Continue daily walking. Reduced sodium intake. Follow-up ECG in 6 months.",
    reportImage: rep1
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
    advice: "Blood work came back normal. Recommended antihistamine for allergy relief.",
    reportImage: rep2
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
    advice: "Paracetamol 500mg, bed rest, and increased fluid intake. PCR test was negative.",
    reportImage: rep3
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
    title_bn: "বিসিজি (যক্ষ্মা)",
    description: "Bacillus Calmette-Guérin (BCG) vaccine is primarily used against tuberculosis (TB). In countries where TB or leprosy is common, one dose is recommended in healthy babies as close to the time of birth as possible.",
    description_bn: "বিসিজি টিকা মূলত যক্ষ্মার বিরুদ্ধে ব্যবহৃত হয়। যে দেশগুলোতে যক্ষ্মা বা কুষ্ঠ রোগ সাধারণ, সেখানে সুস্থ শিশুদের জন্মের পর যত দ্রুত সম্ভব এক ডোজ টিকা দেওয়ার সুপারিশ করা হয়।",
    date: "15 March 2025",
    hospitalId: "h3",
    status: "Completed",
    doses: "Single Dose",
    doses_bn: "একক ডোজ",
    effectiveness: "80% Protection",
    effectiveness_bn: "৮০% সুরক্ষা",
    benefits: [
      "Protects infants against severe forms of TB.",
      "Reduces the risk of leprosy infection.",
      "Safe and cost-effective preventive measure."
    ],
    benefits_bn: [
      "শিশুদের যক্ষ্মার গুরুতর রূপ থেকে রক্ষা করে",
      "কুষ্ঠ সংক্রমণের ঝুঁকি কমায়",
      "নিরাপদ এবং সাশ্রয়ী প্রতিরোধমূলক ব্যবস্থা।"
    ]
  },
  {
    id: "v2",
    title: "OPV (Polio) - Dose 3",
    title_bn: "ওপিভি (পোলিও) - ডোজ ৩",
    description: "Oral Poliovirus Vaccines (OPV) are the predominant vaccine used in the fight to eradicate polio. There are different types of oral poliovirus vaccine, which may contain one, two, or three types of attenuated poliovirus.",
    description_bn: "মুখে খাওয়ার পোলিও টিকা পোলিও নির্মূলে প্রধান অস্ত্র। বিভিন্ন ধরনের ওরাল পোলিও টিকা রয়েছে, যাতে এক, দুই বা তিন ধরনের দুর্বল পোলিওভাইরাস থাকতে পারে।",
    date: "02 January 2025",
    hospitalId: "h3",
    status: "Completed",
    doses: "3 Dose Series",
    doses_bn: "৩ ডোজের সিরিজ",
    effectiveness: "99% Protection",
    effectiveness_bn: "৯৯% সুরক্ষা",
    benefits: [
      "Prevents paralytic poliomyelitis.",
      "Provides community immunity via oral shedding.",
      "Easy administration without needles."
    ],
    benefits_bn: [
      "পক্ষাঘাতগ্রস্ত পোলিওমায়োলাইটিস প্রতিরোধ করে",
      "ওরাল শেডিংয়ের মাধ্যমে সম্প্রদায়ের রোগ প্রতিরোধ ক্ষমতা প্রদান করে",
      "সূঁচ ছাড়াই সহজ প্রয়োগ।"
    ]
  },
  {
    id: "v3",
    title: "Hepatitis B",
    title_bn: "হেপাটাইটিস বি",
    description: "Protecting your liver from infectious diseases is a cornerstone of long-term wellness. The Hepatitis B vaccine is a safe and effective way to prevent infection.",
    description_bn: "আপনার লিভারকে সংক্রামক রোগ থেকে রক্ষা করা দীর্ঘমেয়াদী সুস্থতার একটি ভিত্তি। হেপাটাইটিস বি টিকা সংক্রমণ প্রতিরোধের একটি নিরাপদ এবং কার্যকর উপায়।",
    date: "12 November 2024",
    hospitalId: "h1",
    status: "Completed",
    doses: "3 Dose Series",
    doses_bn: "৩ ডোজের সিরিজ",
    effectiveness: "95% Protection",
    effectiveness_bn: "৯৫% সুরক্ষা",
    benefits: [
      "Prevents chronic liver disease and liver cancer.",
      "Essential for high-risk regions and international travel.",
      "Safe for adults, children, and infants."
    ],
    benefits_bn: [
      "দীর্ঘস্থায়ী লিভারের রোগ এবং লিভার ক্যান্সার প্রতিরোধ করে",
      "উচ্চ-ঝুঁকিপূর্ণ অঞ্চল এবং আন্তর্জাতিক ভ্রমণের জন্য প্রয়োজনীয়",
      "প্রাপ্তবয়স্ক, শিশু এবং নবজাতকদের জন্য নিরাপদ।"
    ]
  },
  {
    id: "v4",
    title: "Hepatitis B (Dose 2)",
    title_bn: "হেপাটাইটিস বি (ডোজ ২)",
    description: "The second dose of the Hepatitis B series is critical for establishing long-term immunity. Missing this dose can significantly reduce the vaccine's effectiveness.",
    description_bn: "হেপাটাইটিস বি সিরিজের দ্বিতীয় ডোজ দীর্ঘমেয়াদী রোগ প্রতিরোধ ক্ষমতা তৈরির জন্য অত্যন্ত গুরুত্বপূর্ণ। এই ডোজটি বাদ দিলে টিকার কার্যকারিতা উল্লেখযোগ্যভাবে কমে যেতে পারে।",
    dueDate: getDate(5),
    hospitalId: "h1",
    status: "Pending",
    urgent: true,
    doses: "3 Dose Series",
    doses_bn: "৩ ডোজের সিরিজ",
    effectiveness: "95% Protection (after series)",
    effectiveness_bn: "৯৫% সুরক্ষা (সিরিজের পর)",
    benefits: [
      "Strengthens the immune response from the first dose.",
      "Closes the window of vulnerability to infection.",
      "Required for full certificate of vaccination."
    ],
    benefits_bn: [
      "প্রথম ডোজ থেকে প্রাপ্ত রোগ প্রতিরোধ ক্ষমতাকে শক্তিশালী করে",
      "সংক্রমণের ঝুঁকির পথ বন্ধ করে",
      "সম্পূর্ণ টিকাদান সনদের জন্য প্রয়োজনীয়।"
    ]
  },
  {
    id: "v5",
    title: "Influenza (Annual)",
    title_bn: "ইনফ্লুয়েঞ্জা (বার্ষিক)",
    description: "Annual flu shots are recommended for everyone 6 months and older. Flu viruses change every year, so the vaccine is updated annually to match circulating strains.",
    description_bn: "৬ মাস এবং তার বেশি বয়সী সকলের জন্য বার্ষিক ফ্লু শট সুপারিশ করা হয়। ফ্লু ভাইরাস প্রতি বছর পরিবর্তিত হয়, তাই প্রচলিত স্ট্রেইনগুলোর সাথে মিল রাখতে টিকাটি প্রতি বছর আপডেট করা হয়।",
    dueDate: getDate(20),
    hospitalId: "h3",
    status: "Pending",
    doses: "Annual Dose",
    doses_bn: "বার্ষিক ডোজ",
    effectiveness: "40-60% Protection",
    effectiveness_bn: "৪০-৬০% সুরক্ষা",
    benefits: [
      "Reduces the risk of flu-related hospitalization.",
      "Protects against seasonal respiratory complications.",
      "Helps protect vulnerable people in the community."
    ],
    benefits_bn: [
      "ফ্লু-সম্পর্কিত হাসপাতালে ভর্তির ঝুঁকি কমায়",
      "ঋতুভিত্তিক শ্বাসকষ্টের জটিলতা থেকে রক্ষা করে",
      "সম্প্রদায়ের দুর্বল ব্যক্তিদের রক্ষা করতে সাহায্য করে।"
    ]
  }
];

export const DISCOVERY_VACCINES = [
  {
    id: "dv1",
    title: "COVID-19 Booster",
    title_bn: "কোভিড-১৯ বুস্টার",
    description: "Updated monovalent vaccine targeting current variants. Recommended for adults 65+ and immunocompromised individuals.",
    description_bn: "বর্তমান ভেরিয়েন্টগুলোকে লক্ষ্য করে আপডেট করা মনোভ্যালেন্ট টিকা। ৬৫ বছরের বেশি বয়সী এবং রোগ প্রতিরোধ ক্ষমতা কম এমন ব্যক্তিদের জন্য সুপারিশকৃত।",
    category: "Seasonal",
    category_bn: "ঋতুভিত্তিক",
    tag: "Highly Recommended",
    tagColor: "bg-emerald-100 text-emerald-900",
    metaLabel: "Availability",
    metaLabel_bn: "প্রাপ্যতা",
    metaValue: "Immediate",
    metaValue_bn: "তাৎক্ষণিক",
    metaValueColor: "text-emerald-700",
    doses: "Single Booster",
    doses_bn: "একক বুস্টার",
    effectiveness: "High Protection",
    effectiveness_bn: "উচ্চ সুরক্ষা",
    benefits: [
      "Reduces risk of severe illness.",
      "Protects against emerging variants.",
      "Maintains community immunity."
    ],
    benefits_bn: [
      "গুরুতর অসুস্থতার ঝুঁকি কমায়",
      "নতুন ভেরিয়েন্ট থেকে রক্ষা করে",
      "সম্প্রদায়ের রোগ প্রতিরোধ ক্ষমতা বজায় রাখে।"
    ]
  },
  {
    id: "dv2",
    title: "Influenza (Flu)",
    title_bn: "ইনফ্লুয়েঞ্জা (ফ্লু)",
    description: "Annual quadrivalent flu shot. Best taken during the autumn months for maximum protection through winter.",
    description_bn: "বার্ষিক কুয়াড্রিভ্যালেন্ট ফ্লু শট। শীতকাল জুড়ে সর্বোচ্চ সুরক্ষার জন্য শরৎকালে নেওয়া সবচেয়ে ভালো।",
    category: "Seasonal",
    category_bn: "ঋতুভিত্তিক",
    tag: "Seasonal",
    tagColor: "bg-blue-100 text-blue-900",
    metaLabel: "Availability",
    metaLabel_bn: "প্রাপ্যতা",
    metaValue: "In Stock",
    metaValue_bn: "স্টকে আছে",
    metaValueColor: "text-emerald-700",
    doses: "Annual Dose",
    doses_bn: "বার্ষিক ডোজ",
    effectiveness: "40-60% Protection",
    effectiveness_bn: "৪০-৬০% সুরক্ষা",
    benefits: [
      "Prevents seasonal flu complications.",
      "Reduces sick days during winter.",
      "Protects vulnerable populations."
    ],
    benefits_bn: [
      "ঋতুভিত্তিক ফ্লুর জটিলতা প্রতিরোধ করে",
      "শীতকালে অসুস্থতার কারণে কর্মদিবস নষ্ট হওয়া কমায়",
      "অসহায় জনগোষ্ঠীকে রক্ষা করে।"
    ]
  },
  {
    id: "dv3",
    title: "Hepatitis B",
    title_bn: "হেপাটাইটিস বি",
    description: "Protect against liver infection. Required for healthcare workers and recommended for all infants at birth.",
    description_bn: "লিভার সংক্রমণ থেকে রক্ষা পান। স্বাস্থ্যকর্মীদের জন্য প্রয়োজনীয় এবং জন্মের সময় সকল শিশুদের জন্য সুপারিশকৃত।",
    category: "Pediatric",
    category_bn: "পেডিয়াট্রিক",
    metaLabel: "Doses Needed",
    metaLabel_bn: "প্রয়োজনীয় ডোজ",
    metaValue: "3 Dose Series",
    metaValue_bn: "৩ ডোজের সিরিজ",
    metaValueColor: "text-on-surface",
    doses: "3 Dose Series",
    doses_bn: "৩ ডোজের সিরিজ",
    effectiveness: "95% Protection",
    effectiveness_bn: "৯৫% সুরক্ষা",
    benefits: [
      "Prevents chronic liver disease.",
      "Lifelong protection once completed.",
      "Safe for all age groups."
    ],
    benefits_bn: [
      "দীর্ঘস্থায়ী লিভারের রোগ প্রতিরোধ করে",
      "একবার সম্পন্ন হলে আজীবন সুরক্ষা",
      "সব বয়সের জন্য নিরাপদ।"
    ]
  },
  {
    id: "dv4",
    title: "HPV",
    title_bn: "এইচপিভি",
    description: "Human Papillomavirus vaccine. Prevents infections that can lead to certain types of cancer later in life.",
    description_bn: "হিউম্যান প্যাপিলোমাভাইরাস টিকা। এমন সংক্রমণ প্রতিরোধ করে যা পরবর্তী জীবনে নির্দিষ্ট ধরনের ক্যান্সারের কারণ হতে পারে।",
    category: "Pediatric",
    category_bn: "পেডিয়াট্রিক",
    metaLabel: "Eligibility",
    metaLabel_bn: "যোগ্যতা",
    metaValue: "Ages 9-26",
    metaValue_bn: "৯-২৬ বছর",
    metaValueColor: "text-on-surface",
    doses: "2-3 Dose Series",
    doses_bn: "২-৩ ডোজের সিরিজ",
    effectiveness: "Near 100% (Pre-exposure)",
    effectiveness_bn: "প্রায় ১০০% (আগে নিলে)",
    benefits: [
      "Prevents cervical and other cancers.",
      "Long-lasting protection.",
      "Highly effective if given early."
    ],
    benefits_bn: [
      "জরায়ুমুখ এবং অন্যান্য ক্যান্সার প্রতিরোধ করে",
      "দীর্ঘমেয়াদী সুরক্ষা",
      "আগে দিলে অত্যন্ত কার্যকর।"
    ]
  },
  {
    id: "dv5",
    title: "Yellow Fever",
    title_bn: "ইয়োলো ফিভার",
    description: "Required for travel to certain countries in Africa and South America. Provides lifelong protection.",
    description_bn: "আফ্রিকা এবং দক্ষিণ আমেরিকার নির্দিষ্ট কিছু দেশে ভ্রমণের জন্য প্রয়োজনীয়। আজীবন সুরক্ষা প্রদান করে।",
    category: "Travel",
    category_bn: "ভ্রমণ",
    tag: "Travel Mandatory",
    tagColor: "bg-orange-100 text-orange-900",
    metaLabel: "Validity",
    metaLabel_bn: "বৈধতা",
    metaValue: "Lifetime",
    metaValue_bn: "আজীবন",
    metaValueColor: "text-on-surface",
    doses: "Single Dose",
    doses_bn: "একক ডোজ",
    effectiveness: "99% Protection",
    effectiveness_bn: "৯৯% সুরক্ষা",
    benefits: [
      "Essential for international travel.",
      "Lifetime immunity with one shot.",
      "Required for entry in many regions."
    ],
    benefits_bn: [
      "আন্তর্জাতিক ভ্রমণের জন্য অপরিহার্য",
      "এক শটেই আজীবন রোগ প্রতিরোধ ক্ষমতা",
      "অনেক অঞ্চলে প্রবেশের জন্য প্রয়োজনীয়।"
    ]
  },
  {
    id: "dv6",
    title: "Typhoid",
    title_bn: "টাইফয়েড",
    description: "Recommended for travelers to areas with poor sanitation. Protects against Salmonella Typhi.",
    description_bn: "অস্বাস্থ্যকর স্যানিটেশনযুক্ত এলাকায় ভ্রমণকারীদের জন্য সুপারিশকৃত। সালমোনেলা টাইফি থেকে রক্ষা করে।",
    category: "Travel",
    category_bn: "ভ্রমণ",
    metaLabel: "Type",
    metaLabel_bn: "ধরন",
    metaValue: "Injectable/Oral",
    metaValue_bn: "ইনজেকশন/ওরাল",
    metaValueColor: "text-on-surface",
    doses: "Single/Multiple",
    doses_bn: "একক/একাধিক",
    effectiveness: "50-80% Protection",
    effectiveness_bn: "৫০-৮০% সুরক্ষা",
    benefits: [
      "Protects against water-borne disease.",
      "Recommended for low-sanitation areas.",
      "Prevents severe systemic infection."
    ],
    benefits_bn: [
      "পানিবাহিত রোগ থেকে রক্ষা করে",
      "স্বল্প-স্যানিটেশন এলাকার জন্য সুপারিশকৃত",
      "গুরুতর সিস্টেমিক সংক্রমণ প্রতিরোধ করে।"
    ]
  }
];
