'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import QRCode from 'qrcode';

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
  htmlTemplate: string; // HTML template with {{field_id}} placeholders
}

interface SimpleTemplateEditorProps {
  template: SimpleTemplate;
}

export function SimpleTemplateEditor({ template }: SimpleTemplateEditorProps) {
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [previewHtml, setPreviewHtml] = useState('');
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');

  useEffect(() => {
    // Initialize field values with defaults
    const initialValues: Record<string, string> = {};
    template.fields.forEach(field => {
      initialValues[field.id] = field.defaultValue;
    });
    setFieldValues(initialValues);
  }, [template]);

  useEffect(() => {
    // Generate QR code if URL is provided
    const generateQrCode = async () => {
      const url = fieldValues.qr_url || fieldValues.website || fieldValues.url;
      if (url) {
        try {
          const qrDataUrl = await QRCode.toDataURL(url, {
            width: 120,
            margin: 1,
            color: {
              dark: '#000000',
              light: '#FFFFFF'
            }
          });
          setQrCodeDataUrl(qrDataUrl);
        } catch (error) {
          console.error('Error generating QR code:', error);
          setQrCodeDataUrl('');
        }
      } else {
        setQrCodeDataUrl('');
      }
    };

    generateQrCode();
  }, [fieldValues.qr_url, fieldValues.website, fieldValues.url]);

  useEffect(() => {
    // Generate preview HTML by replacing placeholders
    let html = template.htmlTemplate;
    
    Object.entries(fieldValues).forEach(([fieldId, value]) => {
      if (fieldId === 'services' && value) {
        // Convert services text to HTML list items
        const servicesList = value.split('\n').filter(line => line.trim())
          .map(service => `<li>${service.trim()}</li>`).join('');
        html = html.replace('{{#each services_list}}', '');
        html = html.replace('<li>{{this}}</li>', servicesList);
        html = html.replace('{{/each}}', '');
      } else {
        html = html.replace(new RegExp(`{{${fieldId}}}`, 'g'), value || `[${fieldId}]`);
      }
    });

    // Add QR code if available
    if (qrCodeDataUrl) {
      html = html.replace('{{qr_code}}', `<img src="${qrCodeDataUrl}" alt="QR Code for More Info" class="w-32 h-32"/>`);
    } else {
      html = html.replace('{{qr_code}}', '<div class="w-32 h-32 border-2 border-dashed border-gray-400 flex items-center justify-center text-xs text-gray-500 text-center">QR Code<br/>Enter URL</div>');
    }
    
    setPreviewHtml(html);
  }, [fieldValues, template.htmlTemplate, qrCodeDataUrl]);

  const handleFieldChange = (fieldId: string, value: string) => {
    setFieldValues(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Healthcare Flyer</title>
            <style>
              body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
              .flyer { width: 8.5in; margin: 0 auto; background: white; }
              @media print {
                body { padding: 0; }
                .flyer { width: 100%; margin: 0; }
              }
            </style>
          </head>
          <body>
            <div class="flyer">${previewHtml}</div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const handleExport = () => {
    const blob = new Blob([`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Healthcare Flyer</title>
          <style>
            body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
            .flyer { width: 8.5in; margin: 0 auto; background: white; }
          </style>
        </head>
        <body>
          <div class="flyer">${previewHtml}</div>
        </body>
      </html>
    `], { type: 'text/html' });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'healthcare-flyer.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Editor Panel */}
      <div className="w-1/3 bg-white shadow-lg p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-black">{template.name}</h2>
          <Link 
            href="/" 
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            ← Back to Home
          </Link>
        </div>
        <p className="text-sm text-gray-600 mb-6">{template.description}</p>

        <div className="space-y-4">
          {template.fields.filter(field => field.type !== 'color' && field.id !== 'qr_url').map((field) => (
            <div key={field.id}>
              <label className="block text-sm font-medium text-black mb-1">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  value={fieldValues[field.id] || ''}
                  onChange={(e) => handleFieldChange(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
              ) : field.type === 'color' ? (
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={fieldValues[field.id] || field.defaultValue}
                    onChange={(e) => handleFieldChange(field.id, e.target.value)}
                    className="w-12 h-8 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={fieldValues[field.id] || ''}
                    onChange={(e) => handleFieldChange(field.id, e.target.value)}
                    placeholder={field.placeholder}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                </div>
              ) : (
                <input
                  type={field.type === 'phone' || field.type === 'email' || field.type === 'url' ? field.type : 'text'}
                  value={fieldValues[field.id] || ''}
                  onChange={(e) => handleFieldChange(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
              )}
            </div>
          ))}
          
          {/* Styling Options */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-4">Styling & QR Code</h3>
            <div className="space-y-4">
              {template.fields.filter(field => field.type === 'color' || field.id === 'qr_url').map((field) => (
                <div key={field.id}>
                  <label className="block text-sm font-medium text-black mb-1">
                    {field.label}
                  </label>
                  {field.type === 'color' ? (
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        value={fieldValues[field.id] || field.defaultValue}
                        onChange={(e) => handleFieldChange(field.id, e.target.value)}
                        className="w-12 h-8 border border-gray-300 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={fieldValues[field.id] || ''}
                        onChange={(e) => handleFieldChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      />
                    </div>
                  ) : (
                    <input
                      type="url"
                      value={fieldValues[field.id] || ''}
                      onChange={(e) => handleFieldChange(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            onClick={handlePrint}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Print Flyer
          </button>
          <button
            onClick={handleExport}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Export as HTML
          </button>
        </div>
      </div>

      {/* Preview Panel */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
          <div 
            className="bg-white shadow-lg border border-gray-200"
            style={{ width: '8.5in', minHeight: '11in' }}
            dangerouslySetInnerHTML={{ __html: previewHtml }}
          />
        </div>
      </div>
    </div>
  );
}