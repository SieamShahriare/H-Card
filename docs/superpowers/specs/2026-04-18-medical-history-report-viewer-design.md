# Design: Medical History Report Viewer

Enable users to view clinical reports (images) for their past medical appointments. The first three completed records in the Medical History will be associated with `rep1.png`, `rep2.png`, and `rep3.png`.

## User Experience
- When a user navigates to the **Medical History** screen, they see a timeline of past appointments.
- For the first three appointments (ID: `a3`, `a4`, `a5`), clicking the **View PDF** button will open a full-screen modal.
- The modal will display the corresponding clinical report image (`rep1.png`, `rep2.png`, or `rep3.png`).
- The user can close the modal using a close button or by clicking the backdrop.

## Technical Architecture

### 1. Data Layer Changes
- **File:** `src/types.ts`
  - Update `Appointment` interface:
    ```typescript
    export interface Appointment {
      // ... existing fields
      reportImage?: string;
    }
    ```
- **File:** `src/data.ts`
  - Import images:
    ```typescript
    import rep1 from './assets/rep1.png';
    import rep2 from './assets/rep2.png';
    import rep3 from './assets/rep3.png';
    ```
  - Update `APPOINTMENTS` array:
    - Add `reportImage: rep1` to `a3`.
    - Add `reportImage: rep2` to `a4`.
    - Add `reportImage: rep3` to `a5`.

### 2. UI Component Changes
- **File:** `src/screens/MedicalHistory.tsx`
  - Add state: `const [selectedReport, setSelectedReport] = useState<string | null>(null);`
  - Modify `TimelineItem` props:
    ```typescript
    interface TimelineItemProps {
      // ... existing props
      reportImage?: string;
      onViewReport: (img: string) => void;
    }
    ```
  - Update `TimelineItem` implementation:
    - Pass `reportImage` and `onViewReport`.
    - Update "View PDF" button `onClick` handler.
  - Implement Modal:
    - Use a fixed-positioned `div` with high `z-index`.
    - Blurred backdrop using `backdrop-blur-sm`.
    - Centered image with responsive sizing.
    - Close icon (X) using `lucide-react`.

### 3. Verification Plan
- **Automated Tests:**
  - Verify that clicking the "View PDF" button on an appointment with a `reportImage` opens the modal.
  - Verify that the modal displays the correct image.
  - Verify that the modal closes when the close button is clicked.
- **Manual Verification:**
  - Navigate to Medical History.
  - Click "View PDF" on the first card (Follow-up ECG).
  - Confirm `rep1.png` is displayed.
  - Repeat for second and third cards.
  - Confirm cards without `reportImage` don't trigger the modal or have a disabled/hidden button state (though for now, we'll just handle the click if the image exists).
