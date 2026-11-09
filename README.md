# Kwame & Adwoa - Wedding Invitation (Mandap Dark Red Template Clone)

A responsive, high-performance wedding invitation website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Faithfully cloned and enhanced from [ChungDoi's Mandap Dark Red Demo](https://chungdoi.com/templates/mandap-darkred/demo?open=1).

---

## 🌟 Key Features

1. **Responsive Design**:
   - Mobile: optimized for 360px–480px screens with touch gestures and responsive fonts.
   - Tablet & Desktop: centered luxury royal card presentation (up to 900px) with subtle golden borders and backdrop illumination.
2. **Interactive Opening Envelope (`?open=1`)**:
   - Royal wax seal with pulsing heartbeat animation.
   - Falling ambient flower petal animations.
   - Clicking **"Open Invitation"** triggers celebration confetti (`canvas-confetti`) and smoothly reveals the invitation card.
   - Supports direct open with URL query parameter `?open=1`.
3. **Background Wedding Music Player**:
   - Floating audio widget with sound wave bars and mute/play controls.
   - Synthesizes soothing traditional wedding melody via Web Audio API for 100% offline reliability.
4. **Hero & Ceremony Sections**:
   - Traditional Indian Mandap arch frame, hanging temple bells, Om sacred glyph, and Kolam / Rangoli motifs.
   - Couple announcement: *Kwame Asante & Adwoa Boateng*.
   - Parents announcements and ceremony timings at *Holy Spirit Cathedral*.
5. **3D Coverflow Photo Gallery & Lightbox**:
   - 6 high-resolution wedding photos with 3D perspective depth, swipe gestures, and pagination dots.
   - Fullscreen Lightbox modal with thumbnail ribbon, keyboard navigation, and zoom.
6. **Live Countdown Timer & Interactive Calendar**:
   - Real-time countdown to **December 15, 2027 at 19:00**.
   - Custom calendar for December 2027 with day 15 highlighted with a red heart.
   - **Add to Calendar**: One-click Google Calendar integration and iCal (`.ics`) file download.
7. **Reception & Venue Map**:
   - Kempinski Hotel Gold Coast City, Accra, Ghana.
   - Embedded Google Map with **"Get directions"** navigation button.
8. **Dress Code Section**:
   - Party Attire with color swatches (Burgundy `#651212`, Crimson `#8d3a3a`, Blush Rose `#ffb2b2`).
9. **Wedding Day Schedule Timeline**:
   - 8 chronological milestones from 18:00 to 01:30 with golden timeline connecting nodes and authentic event illustrations (wreath, swan, royal chair).
10. **Interactive Guestbook with AI Wish Generator**:
    - Real-time submission with instant updates and confetti burst.
    - 🪄 **AI Wish Generator** providing personalized heartfelt messages.
    - Pre-populated wishes from family and friends with like reactions.
11. **Interactive Gift Box / Registry**:
    - 3D bobbing gift box with sparkles and floating mini envelopes.
    - Modal with Groom's Bank Details & QR code and Bride's Wise payment link & QR code.
    - One-click copy account number and download QR codes.
12. **RSVP Attendance Modal**:
    - Triggered by **"Confirm Attendance"** button.
    - Form supporting attendance choice, guest count, dietary preferences, and submission confirmation.
13. **Floating Navigation Pill Bar**:
    - Quick-jump anchors to Ceremony, Photos, Schedule, RSVP, Wishes, and Gifts, plus native Web Share / Link Copy.

---

## 🚀 Getting Started

### 1. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) or [http://localhost:3000/?open=1](http://localhost:3000/?open=1) in your browser.

### 2. Production Build & Start
```bash
npm run build
npm start
```

