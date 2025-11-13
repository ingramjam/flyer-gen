"use client";

import { useState } from 'react';
import { FlyerCanvas } from './FlyerCanvas';
import { ToolPanel } from './ToolPanel';
import { FlyerData, FlyerElement } from '@/types/flyer';

interface FlyerEditorProps {
  initialData?: FlyerData;
}

export function FlyerEditor({ initialData }: FlyerEditorProps) {
  const [flyerData, setFlyerData] = useState<FlyerData>(
    initialData || {
      template: {
        id: 'default',
        name: 'Basic Template',
        description: 'A basic flyer template',
        thumbnail: '',
        elements: []
      },
      customElements: []
    }
  );

  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const addElement = (element: Omit<FlyerElement, 'id'>) => {
    const newElement: FlyerElement = {
      ...element,
      id: `element-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };

    setFlyerData(prev => ({
      ...prev,
      customElements: [...prev.customElements, newElement]
    }));
  };

  const updateElement = (id: string, updates: Partial<FlyerElement>) => {
    setFlyerData(prev => ({
      ...prev,
      customElements: prev.customElements.map(el =>
        el.id === id ? { ...el, ...updates } : el
      )
    }));
  };

  const deleteElement = (id: string) => {
    setFlyerData(prev => ({
      ...prev,
      customElements: prev.customElements.filter(el => el.id !== id)
    }));
    if (selectedElement === id) {
      setSelectedElement(null);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <ToolPanel 
        onAddElement={addElement}
        selectedElement={selectedElement ? flyerData.customElements.find(el => el.id === selectedElement) || null : null}
        onUpdateElement={updateElement}
      />
      <div className="flex-1 flex items-center justify-center p-8">
        <FlyerCanvas
          flyerData={flyerData}
          selectedElement={selectedElement}
          onSelectElement={setSelectedElement}
          onUpdateElement={updateElement}
          onDeleteElement={deleteElement}
        />
      </div>
    </div>
  );
}