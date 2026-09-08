export type PageRoute = 
  | 'home'
  | 'work'
  | 'category-gallery'
  | 'case-study'
  | 'expertise'
  | 'about'
  | 'reels'
  | 'contact';

export type WorkCategoryKey =
  | 'ecommerce'
  | 'marketplace'
  | 'branding'
  | 'social'
  | 'motion'
  | 'catalogues';

export interface CategoryInfo {
  id: WorkCategoryKey;
  title: string;
  eyebrow: string;
  subtitle: string;
  description: string;
  heroImage: string;
  tabs: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client?: string;
  categoryKey: WorkCategoryKey;
  categoryLabel: string;
  year: string;
  thumbnail: string;
  aspect?: 'tall' | 'wide' | 'square';
  tag?: string; // e.g. 'Lifestyle', 'White Background', 'Amazon A+', 'Packaging'
  shortDescription: string;
  caseStudy?: CaseStudyDetails;
}

export interface CaseStudyDetails {
  client: string;
  category: string;
  year: string;
  role: string;
  deliverables: string[];
  intro: string;
  brief: string;
  visualChallenge: string;
  creativeApproach: string;
  heroImage: string;
  beforeAfter?: {
    beforeImage: string;
    beforeLabel: string;
    afterImage: string;
    afterLabel: string;
  };
  gallery: {
    url: string;
    caption?: string;
    layout: 'full' | 'half' | 'third';
  }[];
  marketplaceMockups?: string[];
  packagingDetails?: string[];
  videoUrl?: string;
  nextProjectId?: string;
  prevProjectId?: string;
}

export interface ReelItem {
  id: string;
  title: string;
  category: string;
  categoryKey: 'ai-reels' | 'interior-motion' | 'product-ads' | 'social-videos' | 'motion-graphics';
  duration: string;
  year: string;
  posterImage: string;
  videoPreviewUrl?: string;
  aspect: 'vertical' | 'horizontal';
  brief: string;
  deliverables: string[];
}

export interface TransformationComparison {
  title: string;
  originalShot: string;
  whiteBackground: string;
  lifestyleVisual: string;
  description: string;
}
