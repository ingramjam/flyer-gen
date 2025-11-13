import { FlyerTemplate } from '@/types/flyer';

export const templates: FlyerTemplate[] = [
  {
    id: 'healthcare-referral-1',
    name: 'Healthcare Referral - Professional',
    description: 'Clean, professional healthcare referral design based on your PDF layout',
    thumbnail: '/templates/healthcare-referral-1.jpg',
    elements: [
      // Header section with blue background
      {
        id: 'header-bg',
        type: 'shape',
        x: 0,
        y: 0,
        width: 612, // 8.5" at 72dpi
        height: 100,
        style: {
          backgroundColor: '#2563eb',
          borderRadius: 0,
        }
      },
      {
        id: 'header-title',
        type: 'text',
        x: 30,
        y: 20,
        width: 552,
        height: 60,
        content: 'HEALTHCARE REFERRAL PROGRAM',
        style: {
          fontSize: 32,
          fontWeight: 'bold',
          color: '#ffffff',
        }
      },
      
      // Main headline
      {
        id: 'main-headline',
        type: 'text',
        x: 30,
        y: 130,
        width: 552,
        height: 50,
        content: 'Connecting You to Quality Care',
        style: {
          fontSize: 28,
          fontWeight: 'bold',
          color: '#1e40af',
        }
      },
      
      // Left column - Services
      {
        id: 'services-title',
        type: 'text',
        x: 30,
        y: 200,
        width: 280,
        height: 30,
        content: 'Our Services Include:',
        style: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#1f2937',
        }
      },
      {
        id: 'services-list',
        type: 'text',
        x: 30,
        y: 240,
        width: 280,
        height: 180,
        content: '• Primary Care & Family Medicine\n• Specialist Consultations\n• Preventive Health Screenings\n• Chronic Disease Management\n• Mental Health Support\n• Wellness & Nutrition Counseling\n• Laboratory Services\n• Imaging & Diagnostics\n• Urgent Care Services\n• Telehealth Appointments',
        style: {
          fontSize: 14,
          color: '#374151',
        }
      },
      
      // Right column - Image placeholder and benefits
      {
        id: 'image-placeholder',
        type: 'shape',
        x: 330,
        y: 200,
        width: 250,
        height: 120,
        style: {
          backgroundColor: '#dbeafe',
          borderRadius: 8,
        }
      },
      {
        id: 'image-caption',
        type: 'text',
        x: 330,
        y: 330,
        width: 250,
        height: 20,
        content: '[Insert Healthcare Professional Image]',
        style: {
          fontSize: 12,
          color: '#6b7280',
        }
      },
      
      // Benefits section
      {
        id: 'benefits-title',
        type: 'text',
        x: 330,
        y: 360,
        width: 250,
        height: 30,
        content: 'Why Choose Us?',
        style: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#1f2937',
        }
      },
      {
        id: 'benefits-list',
        type: 'text',
        x: 330,
        y: 390,
        width: 250,
        height: 80,
        content: '✓ Board-certified physicians\n✓ Same-day appointments available\n✓ Multilingual staff\n✓ Insurance accepted\n✓ Community-focused care',
        style: {
          fontSize: 13,
          color: '#374151',
        }
      },
      
      // Contact section with background
      {
        id: 'contact-bg',
        type: 'shape',
        x: 30,
        y: 500,
        width: 552,
        height: 100,
        style: {
          backgroundColor: '#f8fafc',
          borderRadius: 8,
        }
      },
      {
        id: 'contact-title',
        type: 'text',
        x: 50,
        y: 520,
        width: 200,
        height: 25,
        content: 'Schedule Your Appointment',
        style: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#1e40af',
        }
      },
      {
        id: 'contact-phone',
        type: 'text',
        x: 50,
        y: 550,
        width: 160,
        height: 40,
        content: 'Phone: (555) 123-CARE\nFax: (555) 123-4568',
        style: {
          fontSize: 14,
          color: '#374151',
        }
      },
      {
        id: 'contact-digital',
        type: 'text',
        x: 220,
        y: 550,
        width: 180,
        height: 40,
        content: 'Email: appointments@healthcare.com\nOnline: www.healthcarecenter.com',
        style: {
          fontSize: 14,
          color: '#374151',
        }
      },
      {
        id: 'contact-address',
        type: 'text',
        x: 410,
        y: 550,
        width: 160,
        height: 40,
        content: '123 Medical Plaza Drive\nHealthcare City, State 12345',
        style: {
          fontSize: 14,
          color: '#374151',
        }
      },
      
      // Footer
      {
        id: 'footer-line',
        type: 'shape',
        x: 30,
        y: 620,
        width: 552,
        height: 2,
        style: {
          backgroundColor: '#e5e7eb',
        }
      },
      {
        id: 'footer-text',
        type: 'text',
        x: 30,
        y: 640,
        width: 552,
        height: 30,
        content: 'Serving our community with excellence since 1985 • Accredited by Joint Commission • All insurance plans accepted',
        style: {
          fontSize: 11,
          color: '#6b7280',
        }
      }
    ]
  },
  {
    id: 'basic-health-referral',
    name: 'Basic Health Referral',
    description: 'Simple and clean design for healthcare referrals',
    thumbnail: '/templates/basic-health.jpg',
    elements: [
      {
        id: 'title',
        type: 'text',
        x: 50,
        y: 50,
        width: 500,
        height: 60,
        content: 'Health Referral Form',
        style: {
          fontSize: 32,
          fontWeight: 'bold',
          color: '#2563eb',
        }
      },
      {
        id: 'content',
        type: 'text',
        x: 50,
        y: 150,
        width: 500,
        height: 200,
        content: 'This is a basic healthcare referral template. Customize this content with your specific referral information.',
        style: {
          fontSize: 16,
          color: '#374151',
        }
      }
    ]
  },
  {
    id: 'kick-it-california',
    name: 'Kick It California',
    description: 'Branded template with California health initiative styling',
    thumbnail: '/templates/kick-it-ca.jpg',
    elements: [
      {
        id: 'header',
        type: 'shape',
        x: 0,
        y: 0,
        width: 612,
        height: 100,
        style: {
          backgroundColor: '#059669',
        }
      },
      {
        id: 'title',
        type: 'text',
        x: 50,
        y: 30,
        width: 500,
        height: 40,
        content: 'Kick It California',
        style: {
          fontSize: 28,
          fontWeight: 'bold',
          color: '#ffffff',
        }
      }
    ]
  },
  {
    id: 'community-outreach',
    name: 'Community Outreach',
    description: 'Perfect for community health events and programs',
    thumbnail: '/templates/community-outreach.jpg',
    elements: [
      {
        id: 'title',
        type: 'text',
        x: 50,
        y: 50,
        width: 500,
        height: 60,
        content: 'Community Health Outreach',
        style: {
          fontSize: 28,
          fontWeight: 'bold',
          color: '#7c3aed',
        }
      }
    ]
  }
];