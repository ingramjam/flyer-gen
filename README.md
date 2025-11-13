# flyer-gen
kic flyer template maker
Project: Online Editable Flyer Template (kickitca.org)

## 🚀 Quick Start - How to Demo the Application

### About the Application Structure
This is a **Next.js application**, which means there is **no traditional `index.html` file**. Instead, the application uses React components that are server-rendered and hydrated on the client side.

The main entry point is accessible at the root URL (`/`) which is generated from `src/app/page.tsx`.

### Running the Application

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at: **http://localhost:3000**

3. **Build for Production** (optional)
   ```bash
   npm run build
   npm start
   ```

### 📍 Available Routes and Features

#### **Home Page** - `/` 
The landing page with navigation to the main features.

![Homepage](https://github.com/user-attachments/assets/184b1a5f-e9c2-4edb-bdf0-b17a89edbaf4)

#### **Editor Page** - `/editor`
The main flyer editor where you can:
- ✏️ **Add text elements** - Click to edit inline
- 🖼️ **Add images** - Upload from your computer
- ⬜ **Add shapes** - Customizable rectangles
- 🎨 **Edit properties** - Change size, color, font size, etc.
- 📥 **Export to PDF** - Download your flyer as a PDF

![Editor](https://github.com/user-attachments/assets/a8d8822e-f45c-46e6-b3c6-4ad98c5fc300)

**Demo Functions:**
1. Click "Add Elements" tab to add text, images, or shapes
2. Click on any element to select it
3. Drag elements to reposition them
4. Click "Edit Properties" to modify the selected element
5. Click the X button to delete an element
6. Click "Export to PDF" to download your flyer

![Editor with Elements](https://github.com/user-attachments/assets/52cd6ceb-399b-4b6b-aafe-1b4f9b459878)

#### **Templates Page** - `/templates`
Browse pre-designed flyer templates:
- Basic Health Referral
- Kick It California branded template
- Community Outreach template

![Templates](https://github.com/user-attachments/assets/c050b1d0-f06d-4616-92a0-5ceb1499b3f1)

### 🛠️ Technology Stack
- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS
- **PDF Export:** jsPDF + html2canvas
- **Language:** TypeScript

---

## 1. Overview

This project provides an online, editable flyer template maker specifically designed for Kick It California healthcare referral materials.

## 2. Technical Specifications

**Implemented Features:**
- ✅ Visual flyer editor with drag-and-drop functionality
- ✅ 8.5" x 11" canvas matching standard letter size
- ✅ Add and edit text elements
- ✅ Upload and position images
- ✅ Add customizable shapes
- ✅ Real-time property editing (size, color, font)
- ✅ PDF export functionality
- ✅ Responsive UI with tool panel
- ✅ Template selection page

## 3. Content

Use the following content to build the initial template. Text marked as [editable] should be editable.

<!--
Kick It California – Referral Options

Kick It California connects patients to proven cessation services that double a smoker’s chance of successfully quitting. We empower healthcare organizations to make change through flexible referral options designed to fit your workflow and data needs.

Option 1: Web-Based Referral

• Free, simple online referral form available at kickitca.org• No technical integration required• Aggregate-level reporting provided• Fast and easy implementation

Option 2: Direct Messaging or Standard File Upload

• Free referral submission via EHR through DIRECT or a DIRECT account• One-way push of referral to Kick It California• Option to use Secure File Transfer Protocol (SFTP) for file uploads• Aggregate-level reporting provided• If individual-level reporting is required, please inquire — an additional fee may apply

Option 3: Bi-Directional Closed-Loop Referral

·       $35,000 setup and $5,000 annual maintenance

·       Utilizes standard TCP/IP via VPN tunnels

·       KIC sets up a HL7 2.X interface, which securely transfers patient information via VPN tunnel

·       Real-time result messages sent back on services received

·       Transport options supported include LLP, TCP/IP, SFTP and web services

·       Aggregate reports provided quarterly

·       Streamlined workflow and outcome tracking

Ready to Refer or Learn More?

Contact: Carrie KirbyEmail: ckirby@health.ucsd.eduPhone: 800-300-1054


-->

Header Image: (Placeholder: A professional, clean graphic related to healthcare or technology)

Headline: [editable] Kick It California – Referral Options

Sub-headline: [editable] Easy, flexible ways to connect patients with our free, confidential services.

Body Copy 1: [editable] Option 1: Web-Based Referral

Body Copy 1 Description: [editable] Use our simple and secure web portal to refer patients directly. It's fast, efficient, and requires no software installation.

Body Copy 2: [editable] Option 2: Direct Messaging or Standard File Upload

Body Copy 2 Description: [editable] Integrate with your existing EMR system. Send referrals via secure direct messaging or a standard file upload (e.g., HL7, CSV).

Body Copy 3: [editable] Option 3: Bi-Directional Closed-Loop Referral

Body Copy 3 Description: [editable] Our most advanced solution. This API-based integration allows for seamless, bi-directional data exchange, including patient status updates sent back to your EMR.

CTA (Call to Action): [editable] Ready to Refer or Learn More?

Contact Block:

[editable] Visit: kickitca.org/partners

[editable] Email: referrals@kickitca.org

Footer Logo: (Static kickitca.org logo)

## 7. Acceptance Criteria

<!-- ... existing code ... -->

WHEN I open the PDF, THEN it is a perfect 8.5" x 11" document that matches the on-screen preview.
