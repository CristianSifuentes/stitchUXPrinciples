// Shared interface demonstrates explicit typing across pages/components.
export interface Principle {
  id: number;
  slug: string;
  title: string;
  summary: string;
  category: 'research' | 'content' | 'interaction' | 'accessibility' | 'strategy';
  featured?: boolean;
}

export interface SeoProps {
  title: string;
  description: string;
  image?: string;
}
