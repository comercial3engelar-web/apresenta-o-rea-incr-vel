export type SlideType = 
  | 'cover' 
  | 'standard' 
  | 'numbers' 
  | 'timeline' 
  | 'critical' 
  | 'summary';

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: {
    text?: string;
    bullets?: string[];
    subSections?: {
      title: string;
      items: string[];
    }[];
  };
  chartData?: any[];
  highlight?: string;
  responsible?: string;
}

export interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
}