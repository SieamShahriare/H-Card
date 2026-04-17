# My QR Code Modal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a modal on the Profile page to display the user's Health ID QR code when the "My QR Code" button is clicked.

**Architecture:** Use local React state (`useState`) in `Profile.tsx` to toggle the modal visibility. The modal UI will mirror the design of the report viewer in `MedicalHistory.tsx`, including backdrop blur, animations, and a scannable QR code display on a white background.

**Tech Stack:** React (TypeScript), TailwindCSS, Lucide-React (Icons).

---

### Task 1: Setup Asset and State in Profile.tsx

**Files:**
- Modify: `src/screens/Profile.tsx`

- [ ] **Step 1: Add import for QR code asset**

Add near existing imports:
```tsx
import qrCode from '../assets/qrCode.png';
import { X } from 'lucide-react'; // Ensure X is imported
```

- [ ] **Step 2: Add modal state**

Inside the `Profile` component:
```tsx
const [showQrModal, setShowQrModal] = React.useState(false);
```

- [ ] **Step 3: Update "My QR Code" button to trigger modal**

Find the button with `t('screens.profile.qrCode')` and update its `onClick`:
```tsx
<button 
  onClick={() => setShowQrModal(true)}
  className="px-6 py-2.5 bg-primary text-white rounded-full font-bold text-xs flex items-center gap-2 shadow-md active:scale-95 transition-transform"
>
  <QrCode size={16} /> {t('screens.profile.qrCode')}
</button>
```

- [ ] **Step 4: Commit**

```bash
git add src/screens/Profile.tsx
git commit -m "feat: add state and trigger for QR code modal in Profile"
```

---

### Task 2: Implement QR Code Modal UI

**Files:**
- Modify: `src/screens/Profile.tsx`

- [ ] **Step 1: Add Modal JSX at the bottom of the Profile component**

Insert before the final `</div>` of the `Profile` component:
```tsx
{showQrModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
    <div className="relative bg-surface w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
      {/* Header */}
      <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface">
        <h3 className="font-bold text-on-surface">My Health ID QR</h3>
        <button 
          onClick={() => setShowQrModal(false)}
          className="p-2 hover:bg-surface-container-high rounded-full transition-colors"
        >
          <X size={20} className="text-on-surface" />
        </button>
      </div>

      {/* QR Code Body */}
      <div className="p-8 bg-white flex items-center justify-center">
        <img 
          src={qrCode} 
          alt="Health ID QR Code" 
          className="w-full aspect-square"
        />
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-outline-variant bg-surface">
        <button 
          onClick={() => setShowQrModal(false)}
          className="w-full py-4 bg-primary text-on-primary rounded-2xl font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
        >
          {t('screens.medicalHistory.close')}
        </button>
      </div>
    </div>
  </div>
)}
```

- [ ] **Step 2: Add backdrop click to close**

Add `onClick` to the backdrop div (the first `div` of the modal):
```tsx
<div 
  onClick={() => setShowQrModal(false)}
  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
>
  <div 
    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
    className="relative bg-surface w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
  >
    {/* ... rest of modal ... */}
  </div>
</div>
```

- [ ] **Step 3: Commit**

```bash
git add src/screens/Profile.tsx
git commit -m "feat: implement QR code modal UI in Profile screen"
```

---

### Task 3: Verification

- [ ] **Step 1: Verify modal opens on "My QR Code" click**
- [ ] **Step 2: Verify modal closes on 'X' click**
- [ ] **Step 3: Verify modal closes on "Close" button click**
- [ ] **Step 4: Verify modal closes on backdrop click**
- [ ] **Step 5: Verify QR code is clearly visible on white background**
