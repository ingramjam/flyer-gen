interface TemplateField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'phone' | 'email' | 'url' | 'color';
  placeholder: string;
  defaultValue: string;
}

interface SimpleTemplate {
  id: string;
  name: string;
  description: string;
  fields: TemplateField[];
  htmlTemplate: string;
}

export const simpleTemplates: SimpleTemplate[] = [
  {
    id: 'healthcare-referral-simple',
    name: 'Healthcare Referral Flyer',
    description: 'Professional healthcare referral flyer - just fill in your details',
    fields: [
      {
        id: 'clinic_name',
        label: 'Clinic/Practice Name',
        type: 'text',
        placeholder: 'Enter your clinic name',
        defaultValue: 'Community Health Center'
      },
      {
        id: 'main_headline',
        label: 'Main Headline',
        type: 'text',
        placeholder: 'Enter main headline',
        defaultValue: 'Quality Healthcare for Your Family'
      },
      {
        id: 'description',
        label: 'Description',
        type: 'textarea',
        placeholder: 'Brief description of your services',
        defaultValue: 'We provide comprehensive healthcare services with a focus on preventive care and patient wellness. Our experienced team is dedicated to serving our community with compassion and excellence.'
      },
      {
        id: 'services',
        label: 'Services Offered',
        type: 'textarea',
        placeholder: 'List your services (one per line)',
        defaultValue: 'Primary Care & Family Medicine\nSpecialist Referrals\nPreventive Care & Screenings\nChronic Disease Management\nUrgent Care Services\nLaboratory Services'
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'phone',
        placeholder: '(555) 123-4567',
        defaultValue: '(555) 123-CARE'
      },
      {
        id: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'info@clinic.com',
        defaultValue: 'appointments@healthcenter.com'
      },
      {
        id: 'website',
        label: 'Website',
        type: 'url',
        placeholder: 'www.clinic.com',
        defaultValue: 'www.communityhealthcenter.com'
      },
      {
        id: 'address',
        label: 'Address',
        type: 'textarea',
        placeholder: 'Enter your full address',
        defaultValue: '123 Medical Plaza Drive\nHealthcare City, State 12345'
      },
      {
        id: 'hours',
        label: 'Office Hours',
        type: 'textarea',
        placeholder: 'Enter your hours',
        defaultValue: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed'
      },
      {
        id: 'special_note',
        label: 'Special Note/Offer',
        type: 'textarea',
        placeholder: 'Any special offers or important notes',
        defaultValue: 'New patients welcome! Most insurance plans accepted.\nSame-day appointments available.'
      },
      {
        id: 'qr_url',
        label: 'QR Code URL',
        type: 'url',
        placeholder: 'Enter URL for QR code (optional)',
        defaultValue: 'https://www.communityhealthcenter.com'
      },
      {
        id: 'header_bg_color',
        label: 'Header Background Color',
        type: 'color',
        placeholder: '#2563eb',
        defaultValue: '#2563eb'
      },
      {
        id: 'header_text_color',
        label: 'Header Text Color',
        type: 'color',
        placeholder: '#ffffff',
        defaultValue: '#ffffff'
      },
      {
        id: 'accent_color',
        label: 'Accent Color (headings)',
        type: 'color',
        placeholder: '#1e40af',
        defaultValue: '#1e40af'
      },
      {
        id: 'contact_bg_color',
        label: 'Contact Section Background',
        type: 'color',
        placeholder: '#f8fafc',
        defaultValue: '#f8fafc'
      },
      {
        id: 'text_color',
        label: 'Main Text Color',
        type: 'color',
        placeholder: '#1f2937',
        defaultValue: '#1f2937'
      }
    ],
    htmlTemplate: `
      <style>
        .flyer {
          width: 8.5in;
          height: 11in;
          padding: 0;
          margin: 0;
          font-family: Arial, sans-serif;
          background: white;
          position: relative;
        }
        .header {
          background: linear-gradient(135deg, {{header_bg_color}} 0%, {{header_bg_color}} 100%);
          color: {{header_text_color}};
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          font-size: 28px;
          font-weight: bold;
          margin: 0 0 10px 0;
          text-transform: uppercase;
        }
        .header h2 {
          font-size: 20px;
          font-weight: normal;
          margin: 0;
          opacity: 0.9;
        }
        .content {
          padding: 30px;
        }
        .section {
          margin-bottom: 25px;
        }
        .section h3 {
          color: {{accent_color}};
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
          border-bottom: 2px solid #e5f3ff;
          padding-bottom: 5px;
        }
        .main-text {
          color: #1f2937;
          font-size: 16px;
          line-height: 1.6;
        }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .services ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .services li {
          padding: 5px 0;
          border-left: 3px solid {{accent_color}};
          padding-left: 10px;
          margin-bottom: 5px;
        }
        .contact-info {
          background: {{contact_bg_color}};
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 10px;
        }
        .contact-label {
          font-weight: bold;
          color: {{accent_color}};
          margin-right: 10px;
          min-width: 80px;
        }
        .footer {
          position: absolute;
          bottom: 20px;
          left: 30px;
          right: 170px;
          text-align: center;
          padding: 15px;
          background: {{accent_color}};
          color: white;
          border-radius: 8px;
        }
        .qr-code {
          position: absolute;
          bottom: 20px;
          right: 30px;
          width: 120px;
          height: 120px;
          background: white;
          border: 2px solid {{accent_color}};
          border-radius: 8px;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .special-note {
          background: #fef3c7;
          border: 1px solid #f59e0b;
          border-radius: 6px;
          padding: 15px;
          margin: 20px 0;
          color: #92400e;
        }
      </style>
      
      <div class="flyer">
        <div class="header">
          <h1>{{clinic_name}}</h1>
          <h2>{{main_headline}}</h2>
        </div>
        
        <div class="content">
          <div class="section">
            <p class="main-text">{{description}}</p>
          </div>
          
          <div class="services-grid">
            <div class="section services">
              <h3>Our Services</h3>
              <ul>
                {{#each services_list}}
                <li>{{this}}</li>
                {{/each}}
              </ul>
            </div>
            
            <div class="section">
              <h3>Why Choose Us?</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="padding: 5px 0; color: #059669;">✓ Board-certified physicians</li>
                <li style="padding: 5px 0; color: #059669;">✓ Comprehensive care</li>
                <li style="padding: 5px 0; color: #059669;">✓ Modern facilities</li>
                <li style="padding: 5px 0; color: #059669;">✓ Patient-centered approach</li>
                <li style="padding: 5px 0; color: #059669;">✓ Community focused</li>
              </ul>
            </div>
          </div>
          
          <div class="special-note">
            <strong>{{special_note}}</strong>
          </div>
          
          <div class="contact-info">
            <h3 style="margin-top: 0; color: #1e40af;">Contact Information</h3>
            <div class="contact-grid">
              <div>
                <div class="contact-item">
                  <span class="contact-label">Phone:</span>
                  <span>{{phone}}</span>
                </div>
                <div class="contact-item">
                  <span class="contact-label">Email:</span>
                  <span>{{email}}</span>
                </div>
                <div class="contact-item">
                  <span class="contact-label">Web:</span>
                  <span>{{website}}</span>
                </div>
              </div>
              <div>
                <div class="contact-item">
                  <span class="contact-label">Address:</span>
                  <div style="white-space: pre-line;">{{address}}</div>
                </div>
                <div class="contact-item">
                  <span class="contact-label">Hours:</span>
                  <div style="white-space: pre-line;">{{hours}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="qr-code">
          {{qr_code}}
        </div>
      </div>
    `
  },
  
  {
    id: 'basic-health-simple',
    name: 'Basic Health Services',
    description: 'Simple, clean design for basic health services',
    fields: [
      {
        id: 'title',
        label: 'Main Title',
        type: 'text',
        placeholder: 'Health Services',
        defaultValue: 'Health Services'
      },
      {
        id: 'subtitle',
        label: 'Subtitle',
        type: 'text',
        placeholder: 'Your health is our priority',
        defaultValue: 'Your health is our priority'
      },
      {
        id: 'description',
        label: 'Description',
        type: 'textarea',
        placeholder: 'Brief description',
        defaultValue: 'Professional healthcare services for you and your family.'
      },
      {
        id: 'phone',
        label: 'Phone',
        type: 'phone',
        placeholder: '(555) 123-4567',
        defaultValue: '(555) 123-4567'
      }
    ],
    htmlTemplate: `
      <style>
        .simple-flyer {
          width: 8.5in;
          height: 11in;
          padding: 40px;
          font-family: Arial, sans-serif;
          background: white;
          text-align: center;
        }
        .simple-title {
          font-size: 36px;
          color: #2563eb;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .simple-subtitle {
          font-size: 24px;
          color: #64748b;
          margin-bottom: 40px;
        }
        .simple-description {
          font-size: 18px;
          line-height: 1.6;
          color: #374151;
          margin-bottom: 60px;
        }
        .simple-phone {
          font-size: 28px;
          color: #2563eb;
          font-weight: bold;
        }
      </style>
      <div class="simple-flyer">
        <h1 class="simple-title">{{title}}</h1>
        <h2 class="simple-subtitle">{{subtitle}}</h2>
        <p class="simple-description">{{description}}</p>
        <div class="simple-phone">Call: {{phone}}</div>
      </div>
    `
  },
  
  {
    id: 'kick-it-california',
    name: 'Kick It California - Referral Options',
    description: 'Professional referral flyer with content from README.md - ready to customize',
    fields: [
      {
        id: 'headline',
        label: 'Main Headline',
        type: 'text',
        placeholder: 'Enter main headline',
        defaultValue: 'Referral Options'
      },
      {
        id: 'sub_headline',
        label: 'Sub-headline',
        type: 'text',
        placeholder: 'Enter sub-headline',
        defaultValue: 'Easy, flexible ways to connect patients with our free, confidential services.'
      },
      {
        id: 'option1_title',
        label: 'Option 1 Title',
        type: 'text',
        placeholder: 'Option 1 title',
        defaultValue: 'Option 1: Web-Based Referral'
      },
      {
        id: 'option1_description',
        label: 'Option 1 Description',
        type: 'textarea',
        placeholder: 'Describe option 1',
        defaultValue: 'Use our simple and secure web portal to refer patients directly. It\'s fast, efficient, and requires no software installation.\n\n• Free, simple online referral form available at kickitca.org\n• No technical integration required\n• Aggregate-level reporting provided\n• Fast and easy implementation'
      },
      {
        id: 'option2_title',
        label: 'Option 2 Title',
        type: 'text',
        placeholder: 'Option 2 title',
        defaultValue: 'Option 2: Direct Messaging or Standard File Upload'
      },
      {
        id: 'option2_description',
        label: 'Option 2 Description',
        type: 'textarea',
        placeholder: 'Describe option 2',
        defaultValue: 'Integrate with your existing EMR system. Send referrals via secure direct messaging or a standard file upload (e.g., HL7, CSV).\n\n• Free referral submission via EHR through DIRECT\n• One-way push of referral to Kick It California\n• Option to use Secure File Transfer Protocol (SFTP)\n• Aggregate-level reporting provided'
      },
      {
        id: 'option3_title',
        label: 'Option 3 Title',
        type: 'text',
        placeholder: 'Option 3 title',
        defaultValue: 'Option 3: Bi-Directional Closed-Loop Referral'
      },
      {
        id: 'option3_description',
        label: 'Option 3 Description',
        type: 'textarea',
        placeholder: 'Describe option 3',
        defaultValue: 'Our most advanced solution. This API-based integration allows for seamless, bi-directional data exchange, including patient status updates sent back to your EMR.\n\n• $35,000 setup and $5,000 annual maintenance\n• Utilizes standard TCP/IP via VPN tunnels\n• Real-time result messages sent back\n• Streamlined workflow and outcome tracking'
      },
      {
        id: 'cta_text',
        label: 'Call to Action',
        type: 'text',
        placeholder: 'Call to action text',
        defaultValue: 'Ready to Refer or Learn More?'
      },
      {
        id: 'contact_person',
        label: 'Contact Person',
        type: 'text',
        placeholder: 'Contact person name',
        defaultValue: 'Carrie Kirby'
      },
      {
        id: 'contact_email',
        label: 'Contact Email',
        type: 'email',
        placeholder: 'Contact email',
        defaultValue: 'ckirby@health.ucsd.edu'
      },
      {
        id: 'contact_phone',
        label: 'Contact Phone',
        type: 'phone',
        placeholder: 'Contact phone',
        defaultValue: '800-300-1054'
      },
      {
        id: 'website_url',
        label: 'Website URL',
        type: 'url',
        placeholder: 'Website URL',
        defaultValue: 'kickitca.org/partners'
      },
      {
        id: 'qr_url',
        label: 'QR Code URL',
        type: 'url',
        placeholder: 'Enter URL for QR code (optional)',
        defaultValue: 'https://kickitca.org/partners'
      },
      {
        id: 'header_bg_color',
        label: 'Header Background Color',
        type: 'color',
        placeholder: '#ffffff',
        defaultValue: '#ffffff'
      },
      {
        id: 'header_text_color',
        label: 'Header Text Color',
        type: 'color',
        placeholder: '#2563eb',
        defaultValue: '#2563eb'
      },
      {
        id: 'accent_color',
        label: 'Accent Color (headings)',
        type: 'color',
        placeholder: '#f97316',
        defaultValue: '#f97316'
      },
      {
        id: 'text_color',
        label: 'Main Text Color',
        type: 'color',
        placeholder: '#000000',
        defaultValue: '#000000'
      }
    ],
    htmlTemplate: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Kick It California - Referral Options</title>
          <!-- Import Tailwind CSS -->
          <script src="https://cdn.tailwindcss.com"></script>
          <!-- Import Google Font (Inter) -->
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
          
          <style>
              /* Custom styles to match the PDF */
              body {
                  font-family: 'Inter', sans-serif;
                  background-color: #f3f4f6; /* bg-gray-100 */
              }
              
              /* Define the custom colors from the PDF */
              .text-brand-blue { color: #003b5c; }
              .text-brand-orange { color: #f26722; }
              .border-brand-orange { border-color: #f26722; }
              .bg-brand-blue { background-color: #003b5c; }
              
              /* Custom styles to match the PDF */
              body {
                  font-family: 'Inter', sans-serif;
                  background-color: #f3f4f6; /* bg-gray-100 */
              }
              
              /* Define the custom colors from the PDF */
              .text-brand-blue { color: #003b5c; }
              .text-brand-orange { color: #f26722; }
              .border-brand-orange { border-color: #f26722; }
              .bg-brand-blue { background-color: #003b5c; }
              
              /* Custom styles for 8.5x11 layout */
              .flyer-page {
                  width: 8.5in;
                  height: 11in;
                  margin-top: 2rem;
                  margin-bottom: 2rem;
                  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                  
                  /* Flex layout to push footer down */
                  display: flex;
                  flex-direction: column;
                  box-sizing: border-box; /* Ensure padding is included in height/width */
              }

              main {
                  flex-grow: 1; /* This will push the footer to the bottom */
              }

              footer {
                  flex-shrink: 0;
              }

              @media print {
                  body {
                      background-color: #ffffff !important;
                      margin: 0;
                      padding: 0;
                      -webkit-print-color-adjust: exact;
                      print-color-adjust: exact;
                  }
                  .flyer-page {
                      width: 100%;
                      height: 100%;
                      margin: 0;
                      box-shadow: none;
                      border-radius: 0;
                      border: none;
                      
                      /* Re-apply padding for print content */
                      /* p-12 is 3rem (48px), which is ~0.5in. p-8 is 2rem (32px) */
                      /* We'll use p-12's value for a 0.5in margin */
                      padding: 3rem !important; 
                  }
                  
                  /* Hide body scrollbars during print */
                  body, html {
                      overflow: hidden;
                  }
              }
          </style>
      </head>
      <body class="bg-gray-100">

          <!-- Flyer Container -->
          <div class="flyer-page mx-auto bg-white p-8 md:p-12 rounded-lg shadow-2xl">
              
              <!-- Header Section -->
              <header class="flex flex-col sm:flex-row justify-between sm:items-center pb-6 border-b-4" style="border-color: #f26722;">
                  <div>
                      <!-- Logo from the original HTML file -->
                      <img src="https://www.kickitca-wp.ucsd.edu/wp-content/uploads/2021/06/Primary.png" 
                           alt="Kick It California Logo" 
                           class="h-16 w-auto"
                           onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                      <!-- Fallback text for logo -->
                      <div style="display: none;" class="text-2xl font-bold text-brand-blue">KICK IT California</div>
                  </div>
                  <!-- Title from original HTML, styled like PDF -->
                  <h1 class="text-3xl md:text-4xl font-extrabold text-brand-blue mt-4 sm:mt-0 text-left sm:text-right" style="color: #003b5c;">
                      {{headline}}
                  </h1>
              </header>

              <!-- Main Content Grid -->
              <main class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 py-8 md:py-10">
                  
                  <!-- Left Column: Content from original HTML -->
                  <div class="space-y-6">
                      
                      <h2 class="text-2xl font-bold text-brand-blue mb-4" style="color: #003b5c;">{{sub_headline}}</h2>

                      <!-- Option 1 -->
                      <section class="bg-gray-50 p-5 rounded-lg border border-gray-200">
                          <h3 class="text-xl font-bold text-brand-orange mb-3" style="color: #f26722;">{{option1_title}}</h3>
                          <p class="text-gray-700 leading-relaxed whitespace-pre-line">{{option1_description}}</p>
                      </section>

                      <!-- Option 2 -->
                      <section class="bg-gray-50 p-5 rounded-lg border border-gray-200">
                          <h3 class="text-xl font-bold text-brand-orange mb-3" style="color: #f26722;">{{option2_title}}</h3>
                          <p class="text-gray-700 leading-relaxed whitespace-pre-line">{{option2_description}}</p>
                      </section>

                      <!-- Option 3 -->
                      <section class="bg-gray-50 p-5 rounded-lg border border-gray-200">
                          <h3 class="text-xl font-bold text-brand-orange mb-3" style="color: #f26722;">{{option3_title}}</h3>
                          <p class="text-gray-700 leading-relaxed whitespace-pre-line">{{option3_description}}</p>
                      </section>
                  </div>

                  <!-- Right Column: Contact & QR Code -->
                  <div class="space-y-8">

                      <!-- CTA from original HTML -->
                      <section class="bg-brand-orange text-white p-6 rounded-lg shadow-lg text-center" style="background-color: #f26722;">
                          <h2 class="text-2xl font-bold">{{cta_text}}</h2>
                      </section>

                      <!-- Let's Connect Section from PDF -->
                      <section class="bg-brand-blue text-white p-6 rounded-lg shadow-lg" style="background-color: #003b5c;">
                          <h2 class="text-2xl font-bold text-white mb-5 text-center">LET'S CONNECT</h2>
                          <div class="space-y-3 text-lg">
                              <p class="flex items-center">
                                  <span class="font-semibold w-24">Contact:</span>
                                  <span>{{contact_person}}</span>
                              </p>
                              <p class="flex items-center">
                                  <span class="font-semibold w-24">Email:</span>
                                  <a href="mailto:{{contact_email}}" class="hover:underline break-all">{{contact_email}}</a>
                              </p>
                              <p class="flex items-center">
                                  <span class="font-semibold w-24">Phone:</span>
                                  <span>{{contact_phone}}</span>
                              </p>
                          </div>
                      </section>

                      <!-- QR Code Section from original HTML -->
                      <section class="bg-white p-4 rounded-lg border-2 border-brand-orange flex flex-col items-center" style="border-color: #f26722;">
                          {{qr_code}}
                          <div class="text-brand-orange font-bold mt-2" style="color: #f26722;">Scan for More Info</div>
                      </section>

                  </div>

              </main>

              <!-- Footer Section -->
              <footer class="border-t-2 border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0">
                  <div>
                      <a href="https://kickitca.org" target="_blank" rel="noopener noreferrer" class="text-3xl font-extrabold text-brand-blue hover:text-brand-orange transition-colors" style="color: #003b5c;">
                          KICKITCA.ORG
                      </a>
                  </div>
                  
                  <div class="text-left md:text-right">
                      <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">PHONE NUMBERS</h4>
                      <div class="space-y-1">
                          <p class="text-lg font-semibold text-gray-800">
                              <span class="font-normal text-gray-600">ENGLISH:</span> 1-800-300-8086
                          </p>
                          <p class="text-lg font-semibold text-gray-800">
                              <span class="font-normal text-gray-600">SPANISH:</span> 1-800-600-8191
                          </p>
                      </div>
                  </div>
              </footer>

          </div>

      </body>
      </html>
    `
  }
];