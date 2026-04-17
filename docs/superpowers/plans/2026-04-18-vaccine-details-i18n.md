# Vaccine Details Bangla Support Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enable full Bangla support for the Vaccine Details page, including both static UI labels and dynamic vaccine/hospital data.

**Architecture:** Update types to include `_bn` fields for user-facing strings, update mock data with Bangla content, add translation keys to `translations.ts`, and update the `VaccineDetails.tsx` component to use the `LanguageContext`.

**Tech Stack:** React (TypeScript), Tailwind CSS, Lucide Icons.

---

### Task 1: Update Type Definitions

**Files:**
- Modify: `src/types.ts`

- [ ] **Step 1: Add Bangla fields to Hospital interface**
Modify `Hospital` to include `name_bn`, `address_bn`, `status_bn`, `specialties_bn` (array), and `tags_bn` (array).

- [ ] **Step 2: Add Bangla fields to VaccineRecord interface**
Modify `VaccineRecord` to include `title_bn`, `description_bn`, `benefits_bn`, `doses_bn`, and `effectiveness_bn`.

- [ ] **Step 3: Define/Update DiscoveryVaccine interface**
Add `title_bn`, `description_bn`, `benefits_bn`, `category_bn`, `metaLabel_bn`, `metaValue_bn`, `doses_bn`, and `effectiveness_bn`.

- [ ] **Step 4: Commit types changes**
```bash
git add src/types.ts
git commit -m "types: add comprehensive bangla fields to interfaces"
```

### Task 2: Update Mock Data

**Files:**
- Modify: `src/data.ts`

- [ ] **Step 1: Update HOSPITALS with Bangla data**
Add all `_bn` fields for all hospitals.

- [ ] **Step 2: Update VACCINES with Bangla data**
Add all `_bn` fields for all vaccine records.

- [ ] **Step 3: Update DISCOVERY_VACCINES with Bangla data**
Add all `_bn` fields for all discovery vaccines.

- [ ] **Step 4: Commit data changes**
```bash
git add src/data.ts
git commit -m "data: populate comprehensive bangla content for hospitals and vaccines"
```

### Task 3: Update Translations

**Files:**
- Modify: `src/translations.ts`

- [ ] **Step 1: Add vaccineDetails keys to English (en) translations**
Add the `vaccineDetails` section within `screens` as defined in the design spec.

- [ ] **Step 2: Add vaccineDetails keys to Bangla (bn) translations**
Add the `vaccineDetails` section within `screens` as defined in the design spec.

- [ ] **Step 3: Commit translation changes**
```bash
git add src/translations.ts
git commit -m "i18n: add vaccine details translation keys"
```

### Task 4: Implement I18n in VaccineDetails Component

**Files:**
- Modify: `src/screens/VaccineDetails.tsx`

- [ ] **Step 1: Import LanguageContext and translations**
- [ ] **Step 2: Implement dynamic field selection based on language**
Use `lang === 'bn' ? item.field_bn : item.field` for titles, descriptions, benefits, doses, effectiveness, and hospital details.
- [ ] **Step 3: Replace static English strings with translation keys**
- [ ] **Step 4: Implement dynamic string replacement for {title} in benefitsSubtitle**
Use `.replace('{title}', vaccine[lang === 'bn' ? 'title_bn' : 'title'])`.
- [ ] **Step 5: Verify the UI updates correctly when switching languages**
- [ ] **Step 6: Commit component changes**
```bash
git add src/screens/VaccineDetails.tsx
git commit -m "feat: implement bangla support in VaccineDetails component"
```

### Task 5: Final Verification

- [ ] **Step 1: Run build to ensure no type errors**
Run: `npm run build` or `tsc`
- [ ] **Step 2: Manual verification of all strings on the Vaccine Details page in both EN and BN**
- [ ] **Step 3: Ensure hospital status, specialties, and vaccine doses/effectiveness are localized**
