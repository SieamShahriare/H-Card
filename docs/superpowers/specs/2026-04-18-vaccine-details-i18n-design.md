# Design Spec: Bangla Support for Vaccine Details Page

## 1. Overview
Enable full internationalization (i18n) for the Vaccine Details page, supporting both English (EN) and Bangla (BN). This includes static UI labels and all dynamic data content (vaccines, hospitals, status labels).

## 2. Data Model Changes (`src/types.ts` & `src/data.ts`)
Update existing interfaces and mock data to include Bangla equivalents for all user-facing strings.

### 2.1 Interface Updates (`src/types.ts`)
- **Hospital**: Add `name_bn`, `address_bn`, `status_bn`, `specialties_bn` (array), `tags_bn` (array).
- **VaccineRecord**: Add `title_bn`, `description_bn`, `benefits_bn` (array), `doses_bn`, `effectiveness_bn`.
- **DiscoveryVaccine**: Add `title_bn`, `description_bn`, `benefits_bn` (array), `category_bn`, `metaLabel_bn`, `metaValue_bn`, `doses_bn`, `effectiveness_bn`.

### 2.2 Data Updates (`src/data.ts`)
- Populate `name_bn`, `address_bn`, `status_bn`, `specialties_bn`, `tags_bn` for all entries in `HOSPITALS`.
- Populate `title_bn`, `description_bn`, `benefits_bn`, `doses_bn`, `effectiveness_bn` for all entries in `VACCINES`.
- Populate all `_bn` fields for `DISCOVERY_VACCINES`.

## 3. Translation Updates (`src/translations.ts`)
Add a new `vaccineDetails` key to the `screens` object for both `en` and `bn` locales.

### 3.1 English (EN)
```typescript
vaccineDetails: {
  verifiedRecord: "Verified Record",
  recommended: "Recommended",
  dosesLabel: "Doses",
  effectivenessLabel: "Effectiveness",
  whyRecommended: "Why it's recommended",
  L30:   benefitsSubtitle: "Key benefits of maintaining your {title} vaccination status.",
  readyToBook: "Ready to book?",
  bookingSubtitle: "Schedule your next dose today at our nearest partner hospital for verified records.",
  findAppointment: "Find Appointment",
  administeredAt: "ADMINISTERED AT",
  nearestProvider: "NEAREST PROVIDER",
  viewAll: "View All",
}
```

### 3.2 Bangla (BN)
```typescript
vaccineDetails: {
  verifiedRecord: "যাচাইকৃত রেকর্ড",
  recommended: "প্রস্তাবিত",
  dosesLabel: "ডোজ",
  effectivenessLabel: "কার্যকারিতা",
  whyRecommended: "এটি কেন সুপারিশ করা হয়",
  benefitsSubtitle: "{title} টিকাদানের প্রধান সুবিধাগুলো বজায় রাখুন।",
  readyToBook: "বুকিং করতে চান?",
  bookingSubtitle: "আপনার পরবর্তী ডোজের সময় নির্ধারণ করতে আমাদের নিকটতম পার্টনার হাসপাতালে যোগাযোগ করুন।",
  findAppointment: "অ্যাপয়েন্টমেন্ট খুঁজুন",
  administeredAt: "প্রদান করা হয়েছে",
  nearestProvider: "নিকটতম কেন্দ্র",
  viewAll: "সব দেখুন",
}
```

## 4. Component Implementation (`src/screens/VaccineDetails.tsx`)
- Integrate `LanguageContext` using `useLanguage()`.
- Dynamically select data fields based on `lang` (e.g., `vaccine[lang === 'bn' ? 'title_bn' : 'title']`).
- Replace hardcoded English strings with translations from `translations[lang].screens.vaccineDetails`.
- Use a simple string replacement for `{title}` in `benefitsSubtitle`.
- Ensure `hospital.status`, `hospital.name`, `hospital.address`, and all vaccine fields use localized versions.

## 5. Testing Criteria
- Verify that switching language in the Profile screen updates the Vaccine Details page immediately.
- Ensure all labels (static and dynamic) are correctly translated to Bangla.
- Check that layout remains consistent with longer Bangla text strings.
- Verify that hospital status and vaccine doses/effectiveness are localized.
