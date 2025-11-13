"use client";

import { useRef, useState, useCallback } from 'react';
import { FlyerData, FlyerElement } from '@/types/flyer';

interface FlyerCanvasProps {
  flyerData: FlyerData;
  selectedElement: string | null;
  onSelectElement: (id: string | null) => void;
  onUpdateElement: (id: string, updates: Partial<FlyerElement>) => void;
  onDeleteElement: (id: string) => void;
}

export function FlyerCanvas({
  flyerData,
  selectedElement,
  onSelectElement,
  onUpdateElement,
  onDeleteElement
}: FlyerCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent, elementId: string) => {
    e.stopPropagation();
    // Find element in either template or custom elements
    const element = flyerData.customElements.find(el => el.id === elementId) ||
                    flyerData.template.elements.find(el => el.id === elementId);
    if (!element) return;

    setIsDragging(true);
    setDragOffset({
      x: e.clientX - element.x,
      y: e.clientY - element.y
    });
    onSelectElement(elementId);
  }, [flyerData.customElements, flyerData.template.elements, onSelectElement]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !selectedElement) return;

    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (!canvasRect) return;

    const newX = e.clientX - canvasRect.left - dragOffset.x;
    const newY = e.clientY - canvasRect.top - dragOffset.y;

    onUpdateElement(selectedElement, { x: newX, y: newY });
  }, [isDragging, selectedElement, dragOffset, onUpdateElement]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleCanvasClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onSelectElement(null);
    }
  }, [onSelectElement]);

  return (
    <div 
      ref={canvasRef}
      className="relative bg-white shadow-lg border border-gray-200 overflow-hidden cursor-crosshair"
      style={{ width: '8.5in', height: '11in', transform: 'scale(0.7)' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onClick={handleCanvasClick}
    >
      {/* Template elements (editable) */}
      {flyerData.template.elements.map((element) => (
        <div
          key={element.id}
          className={`absolute cursor-move border-2 ${
            selectedElement === element.id ? 'border-blue-500 bg-blue-50' : 'border-transparent'
          } hover:border-blue-300`}
          style={{
            left: element.x,
            top: element.y,
            width: element.width,
            height: element.height,
            ...element.style
          }}
          onMouseDown={(e) => handleMouseDown(e, element.id)}
        >
          {element.type === 'text' && (
            <div 
              contentEditable
              suppressContentEditableWarning
              className="w-full h-full outline-none p-2 whitespace-pre-line"
              style={{ 
                fontSize: element.style?.fontSize || 16,
                fontWeight: element.style?.fontWeight || 'normal',
                color: element.style?.color || '#000000',
                lineHeight: '1.4'
              }}
              onBlur={(e) => {
                onUpdateElement(element.id, { content: e.target.textContent || '' });
              }}
            >
              {element.content}
            </div>
          )}
          {element.type === 'image' && element.src && (
            <img src={element.src} alt="" className="w-full h-full object-cover" />
          )}
          {element.type === 'shape' && (
            <div 
              className="w-full h-full"
              style={{ 
                backgroundColor: element.style?.backgroundColor || '#3B82F6',
                borderRadius: element.style?.borderRadius || 0
              }}
            />
          )}
          
          {selectedElement === element.id && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded">
              Template Element (Click to edit text)
            </div>
          )}
        </div>
      ))}

      {/* Custom elements (editable) */}
      {flyerData.customElements.map((element) => (
        <div
          key={element.id}
          className={`absolute cursor-move border-2 ${
            selectedElement === element.id ? 'border-blue-500' : 'border-transparent'
          } hover:border-blue-300`}
          style={{
            left: element.x,
            top: element.y,
            width: element.width,
            height: element.height,
            ...element.style
          }}
          onMouseDown={(e) => handleMouseDown(e, element.id)}
        >
          {element.type === 'text' && (
            <div 
              contentEditable
              suppressContentEditableWarning
              className="w-full h-full outline-none p-2 whitespace-pre-line"
              style={{ 
                fontSize: element.style?.fontSize || 16,
                fontWeight: element.style?.fontWeight || 'normal',
                color: element.style?.color || '#000000',
                lineHeight: '1.4'
              }}
              onBlur={(e) => onUpdateElement(element.id, { content: e.target.textContent || '' })}
            >
              {element.content}
            </div>
          )}
          {element.type === 'image' && element.src && (
            <img src={element.src} alt="" className="w-full h-full object-cover" />
          )}
          {element.type === 'shape' && (
            <div 
              className="w-full h-full"
              style={{ 
                backgroundColor: element.style?.backgroundColor || '#3B82F6',
                borderRadius: element.style?.borderRadius || 0
              }}
            />
          )}
          
          {selectedElement === element.id && (
            <button
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteElement(element.id);
              }}
            >
              ×
            </button>
          )}
        </div>
      ))}
    </div>
  );
}