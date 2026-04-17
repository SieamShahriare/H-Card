export const translations = {
  en: {
    common: {
      back: "Back",
      save: "Save",
      cancel: "Cancel",
      loading: "Loading...",
      error: "An error occurred",
    },
    nav: {
      home: "Home",
      records: "Medical Records",
      history: "History",
      vaccines: "Immunization",
      prescriptions: "Prescriptions",
      insurance: "Insurance",
      appointments: "Appointments",
      visits: "Your Visits",
      profile: "My Profile",
      notifications: "Notifications",
      centers: "Find Centers",
      vaccineInfo: "Vaccine Info",
      book: "Book Appointment",
    },
    screens: {
      home: {
        greeting: "Good Morning,",
        welcome: "Welcome back!",
      },
      profile: {
        title: "My Profile",
        language: "Language",
        english: "English",
        bangla: "Bangla",
        bloodGroup: "Blood Group",
        age: "Age",
        years: "Yrs",
        accountSettings: "Account Settings",
        logout: "Log Out",
        version: "Version",
      },
    }
  },
  bn: {
    common: {
      back: "পেছনে",
      save: "সংরক্ষণ",
      cancel: "বাতিল",
      loading: "লোড হচ্ছে...",
      error: "একটি ত্রুটি ঘটেছে",
    },
    nav: {
      home: "হোম",
      records: "মেডিকেল রেকর্ডস",
      history: "ইতিহাস",
      vaccines: "টিকাদান",
      prescriptions: "প্রেসক্রিপশন",
      insurance: "বীমা",
      appointments: "অ্যাপয়েন্টমেন্ট",
      visits: "আপনার ভিজিট",
      profile: "আমার প্রোফাইল",
      notifications: "নোটিফিকেশন",
      centers: "কেন্দ্র খুঁজুন",
      vaccineInfo: "টিকার তথ্য",
      book: "অ্যাপয়েন্টমেন্ট বুক করুন",
    },
    screens: {
      home: {
        greeting: "সুপ্রভাত,",
        welcome: "স্বাগতম!",
      },
      profile: {
        title: "আমার প্রোফাইল",
        language: "ভাষা",
        english: "English",
        bangla: "বাংলা",
        bloodGroup: "রক্তের গ্রুপ",
        age: "বয়স",
        years: "বছর",
        accountSettings: "অ্যাকাউন্ট সেটিংস",
        logout: "লগ আউট",
        version: "ভার্সন",
      },
    }
  }
};

export type Language = 'en' | 'bn';
export type TranslationKey = string; // Will use dot-notation
