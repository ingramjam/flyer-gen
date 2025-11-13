'use client';

import Link from 'next/link';
import { simpleTemplates } from '@/data/simpleTemplates';

export default function TemplatesPage() {
  const handleTemplateSelect = (templateId: string) => {
    // Store selected template in localStorage for the simple editor
    localStorage.setItem('selectedSimpleTemplate', templateId);
    // Use Next.js router for proper navigation with basePath
    window.location.href = `${process.env.NODE_ENV === 'production' ? '/template-builder' : ''}/editor`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Flyer Templates
        </h1>
        <p className="text-gray-600 mb-8">
          Choose from our collection of healthcare referral flyer templates
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {simpleTemplates.map((template) => (
            <div key={template.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="aspect-[8.5/11] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 text-xs space-y-2">
                  <div className="h-4 bg-blue-600 rounded mb-2"></div>
                  <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                  <div className="space-y-1 mt-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-1 bg-gray-200 rounded w-full"></div>
                    ))}
                  </div>
                  <div className="mt-4 p-2 bg-gray-100 rounded">
                    <div className="h-1 bg-gray-300 rounded mb-1"></div>
                    <div className="h-1 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
                <span className="text-blue-500 text-sm z-10 bg-white px-2 py-1 rounded shadow">Preview</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{template.description}</p>
              <button
                onClick={() => handleTemplateSelect(template.id)}
                className="inline-block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Edit Template
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/editor"
            className="inline-block bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-900"
          >
            Start with Blank Canvas
          </Link>
        </div>
      </div>
    </div>
  );
}