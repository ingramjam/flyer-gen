export interface FlyerTemplate {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  elements: FlyerElement[];
}

export interface FlyerElement {
  id: string;
  type: 'text' | 'image' | 'shape';
  x: number;
  y: number;
  width: number;
  height: number;
  content?: string;
  src?: string;
  style?: {
    fontSize?: number;
    fontWeight?: string;
    color?: string;
    backgroundColor?: string;
    borderRadius?: number;
  };
}

export interface FlyerData {
  template: FlyerTemplate;
  customElements: FlyerElement[];
}