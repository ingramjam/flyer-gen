"use client";

import { useState } from 'react';
import { FlyerElement } from '@/types/flyer';

interface ToolPanelProps {
  onAddElement: (element: Omit<FlyerElement, 'id'>) => void;
  selectedElement: FlyerElement | null;
  onUpdateElement: (id: string, updates: Partial<FlyerElement>) => void;
}

export function ToolPanel({ onAddElement, selectedElement, onUpdateElement }: ToolPanelProps) {
  const [activeTab, setActiveTab] = useState<'add' | 'edit'>('add');

  const addTextElement = () => {
    onAddElement({
      type: 'text',
      x: 100,
      y: 100,
      width: 200,
      height: 40,
      content: 'Click to edit text',
      style: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'normal'
      }
    });
  };

  const addImageElement = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          onAddElement({
            type: 'image',
            x: 100,
            y: 100,
            width: 200,
            height: 150,
            src: reader.result as string
          });
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const addShapeElement = () => {
    onAddElement({
      type: 'shape',
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      style: {
        backgroundColor: '#3B82F6',
        borderRadius: 8
      }
    });
  };

  const exportToPDF = async () => {
    try {
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).jsPDF;
      
      const canvas = document.querySelector('[style*="8.5in"]') as HTMLElement;
      if (!canvas) return;

      const canvasImage = await html2canvas(canvas, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      });

      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvasImage.toDataURL('image/png');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvasImage.height * pdfWidth) / canvasImage.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('flyer.pdf');
    } catch (error) {
      console.error('Error exporting PDF:', error);
      alert('Error exporting PDF. Please try again.');
    }
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">Kick It California</h1>
        <p className="text-sm text-gray-600">Flyer Template Maker</p>
      </div>

      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-2 px-4 text-sm font-medium ${
            activeTab === 'add' 
              ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => setActiveTab('add')}
        >
          Add Elements
        </button>
        <button
          className={`flex-1 py-2 px-4 text-sm font-medium ${
            activeTab === 'edit'
              ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => setActiveTab('edit')}
        >
          Edit Properties
        </button>
      </div>

      <div className="flex-1 p-4">
        {activeTab === 'add' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Add Elements</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={addTextElement}
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 text-center"
                >
                  <div className="text-2xl mb-1">T</div>
                  <div className="text-xs text-gray-600">Text</div>
                </button>
                <button
                  onClick={addImageElement}
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 text-center"
                >
                  <div className="text-2xl mb-1">🖼️</div>
                  <div className="text-xs text-gray-600">Image</div>
                </button>
                <button
                  onClick={addShapeElement}
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 text-center"
                >
                  <div className="text-2xl mb-1">⬜</div>
                  <div className="text-xs text-gray-600">Shape</div>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'edit' && selectedElement && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Edit {selectedElement.type === 'text' ? 'Text' : selectedElement.type === 'image' ? 'Image' : 'Shape'}
              </h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Width</label>
                  <input
                    type="number"
                    value={selectedElement.width}
                    onChange={(e) => onUpdateElement(selectedElement.id, { width: parseInt(e.target.value) })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Height</label>
                  <input
                    type="number"
                    value={selectedElement.height}
                    onChange={(e) => onUpdateElement(selectedElement.id, { height: parseInt(e.target.value) })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>

                {selectedElement.type === 'text' && (
                  <>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Font Size</label>
                      <input
                        type="number"
                        value={selectedElement.style?.fontSize || 16}
                        onChange={(e) => onUpdateElement(selectedElement.id, { 
                          style: { ...selectedElement.style, fontSize: parseInt(e.target.value) }
                        })}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Color</label>
                      <input
                        type="color"
                        value={selectedElement.style?.color || '#000000'}
                        onChange={(e) => onUpdateElement(selectedElement.id, { 
                          style: { ...selectedElement.style, color: e.target.value }
                        })}
                        className="w-full h-8 border border-gray-300 rounded"
                      />
                    </div>
                  </>
                )}

                {selectedElement.type === 'shape' && (
                  <>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Background Color</label>
                      <input
                        type="color"
                        value={selectedElement.style?.backgroundColor || '#3B82F6'}
                        onChange={(e) => onUpdateElement(selectedElement.id, { 
                          style: { ...selectedElement.style, backgroundColor: e.target.value }
                        })}
                        className="w-full h-8 border border-gray-300 rounded"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Border Radius</label>
                      <input
                        type="number"
                        value={selectedElement.style?.borderRadius || 0}
                        onChange={(e) => onUpdateElement(selectedElement.id, { 
                          style: { ...selectedElement.style, borderRadius: parseInt(e.target.value) }
                        })}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'edit' && !selectedElement && (
          <div className="text-center text-gray-500 py-8">
            <p className="text-sm">Select an element to edit its properties</p>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={exportToPDF}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 font-medium"
        >
          Export to PDF
        </button>
      </div>
    </div>
  );
}