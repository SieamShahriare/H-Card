# Design Spec: My QR Code Modal in Profile Page

## Objective
Implement a modal to display the user's Health ID QR code when the "My QR Code" button is pressed on the Profile page.

## User Story
As a user, I want to show my digital health ID as a QR code to healthcare providers so they can quickly scan my information.

## Architecture
- **Location:** `src/screens/Profile.tsx`
- **State Management:** Local React `useState` to track the modal's open/close state.
- **Assets:** Use `@src/assets/qrCode.png`.

## Components & UI
The design will mirror the clinical report viewer in `MedicalHistory.tsx`:
- **Trigger:** "My QR Code" button on the Profile header.
- **Backdrop:** `fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200`.
- **Modal Container:** `bg-surface w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200`.
- **Header:**
  - Title: "My Health ID QR"
  - Close Button: `X` icon from `lucide-react`.
- **Body:**
  - Inner container: `p-8 bg-white flex items-center justify-center`.
  - Image: `qrCode.png` displayed as a square (`w-full aspect-square`).
- **Footer:**
  - "Close" button: Full-width primary-styled button.

## Transitions & Animations
- Fade-in backdrop.
- Zoom-in container (95% to 100%).

## Accessibility
- Backdrop click to close.
- Accessible close button labels.
- Sufficient contrast for the QR code (white background).

## Testing Strategy
- [ ] Verify clicking "My QR Code" opens the modal.
- [ ] Verify the QR code image (`qrCode.png`) is correctly displayed.
- [ ] Verify clicking the "Close" button or the `X` icon closes the modal.
- [ ] Verify clicking the backdrop closes the modal.
- [ ] Verify responsiveness on small screens.
