'use client';

import { useEffect, useState } from 'react';
import { SimpleTemplateEditor } from '@/components/flyer/SimpleTemplateEditor';
import { simpleTemplates } from '@/data/simpleTemplates';

export default function EditorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<typeof simpleTemplates[0] | null>(null);

  useEffect(() => {
    // Check for selected template from localStorage
    const selectedTemplateId = localStorage.getItem('selectedSimpleTemplate');
    if (selectedTemplateId) {
      const template = simpleTemplates.find(t => t.id === selectedTemplateId);
      if (template) {
        setSelectedTemplate(template);
      }
      // Clear the selection after loading
      localStorage.removeItem('selectedSimpleTemplate');
    } else {
      // Default to first template
      setSelectedTemplate(simpleTemplates[0]);
    }
  }, []);

  if (!selectedTemplate) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Loading Template...</h2>
          <p className="text-gray-600">Please wait while we load your template.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <SimpleTemplateEditor template={selectedTemplate} />
    </div>
  );
}