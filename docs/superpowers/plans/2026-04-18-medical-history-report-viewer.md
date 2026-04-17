# Medical History Report Viewer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enable users to view clinical report images for the first three medical history records.

**Architecture:** Update the `Appointment` type to include an optional `reportImage` field, link the assets in `data.ts`, and implement a modal viewer in the `MedicalHistory` screen.

**Tech Stack:** React, TypeScript, Tailwind CSS, Lucide React.

---

### Task 1: Update Data Model and Link Assets

**Files:**
- Modify: `src/types.ts`
- Modify: `src/data.ts`

- [ ] **Step 1: Update Appointment interface**

```typescript
// src/types.ts
export interface Appointment {
  // ... existing fields
  reportImage?: string; // Add this line
}
```

- [ ] **Step 2: Import report images and link them to appointments**

```typescript
// src/data.ts
import rep1 from './assets/rep1.png';
import rep2 from './assets/rep2.png';
import rep3 from './assets/rep3.png';

// In APPOINTMENTS array:
// a3: { ..., reportImage: rep1 }
// a4: { ..., reportImage: rep2 }
// a5: { ..., reportImage: rep3 }
```

- [ ] **Step 3: Commit data changes**

```bash
git add src/types.ts src/data.ts
git commit -m "feat: add reportImage field to Appointment and link assets"
```

---

### Task 2: Implement Report Modal in MedicalHistory

**Files:**
- Modify: `src/screens/MedicalHistory.tsx`

- [ ] **Step 1: Add state and modal UI**

```tsx
// src/screens/MedicalHistory.tsx
import { X } from 'lucide-react'; // Add X import

// Inside MedicalHistory component:
const [selectedReport, setSelectedReport] = useState<string | null>(null);

// At the end of MedicalHistory return, before closing div:
{selectedReport && (
  <div 
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    onClick={() => setSelectedReport(null)}
  >
    <div className="relative max-w-4xl w-full max-h-[90vh] bg-surface rounded-3xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
      <button 
        onClick={() => setSelectedReport(null)}
        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-10"
      >
        <X size={24} />
      </button>
      <img 
        src={selectedReport} 
        alt="Clinical Report" 
        className="w-full h-full object-contain"
      />
    </div>
  </div>
)}
```

- [ ] **Step 2: Update TimelineItem to handle view report**

```tsx
// Update TimelineItem component definition:
function TimelineItem({ 
  hospital, 
  date, 
  doctor, 
  tag, 
  tagColor, 
  reportsLabel, 
  dotColor,
  reportImage,
  onViewReport 
}: any) {
  // ...
  <button 
    onClick={() => reportImage && onViewReport(reportImage)}
    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-colors active:scale-95 ${
      reportImage 
        ? 'bg-secondary/10 text-secondary hover:bg-secondary/20' 
        : 'bg-outline-variant/10 text-outline cursor-not-allowed'
    }`}
  >
    <Eye size={14} /> View PDF
  </button>
  // ...
}
```

- [ ] **Step 3: Pass reportImage and handler to TimelineItem**

```tsx
// Inside MedicalHistory map:
<TimelineItem 
  // ...
  reportImage={app.reportImage}
  onViewReport={setSelectedReport}
/>
```

- [ ] **Step 4: Commit UI changes**

```bash
git add src/screens/MedicalHistory.tsx
git commit -m "feat: implement report modal viewer in MedicalHistory"
```

---

### Task 3: Verification

- [ ] **Step 1: Verify clicking "View PDF" opens the modal**
- [ ] **Step 2: Verify the correct image (rep1, rep2, rep3) is displayed for the first three cards**
- [ ] **Step 3: Verify modal closes on X click or backdrop click**
- [ ] **Step 4: Verify "View PDF" is disabled/styled differently for cards without images**
