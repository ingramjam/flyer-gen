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
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">{{description}}</p>
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
  }
];