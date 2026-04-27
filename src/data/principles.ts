import type { Principle } from '@types/principle';

const corePrinciples: Omit<Principle, 'id' | 'slug'>[] = [
  { title: 'UX is a multidisciplinary practice', summary: 'It combines research, strategy, information architecture, and interaction design.', category: 'strategy', featured: true },
  { title: 'There is no UX without research', summary: 'Make decisions with evidence and user interviews instead of internal assumptions.', category: 'research', featured: true },
  { title: 'Content shapes the experience', summary: 'Microcopy and visual hierarchy influence comprehension, confidence, and trust.', category: 'content', featured: true },
  { title: 'Accessibility is not optional', summary: 'Design for diverse abilities and meet inclusive standards from the start.', category: 'accessibility', featured: true },
  { title: 'Prototype, measure, iterate', summary: 'Reduce product risk by validating ideas continuously.', category: 'interaction', featured: true }
];

const categories: Principle['category'][] = ['research', 'content', 'interaction', 'accessibility', 'strategy'];

// Generates 151 static items so Astro can prerender 151 pages at build time.
export const principles: Principle[] = Array.from({ length: 151 }, (_, index) => {
  const id = index + 1;
  const fromCore = corePrinciples[index % corePrinciples.length];

  return {
    id,
    slug: `principle-${String(id).padStart(3, '0')}`,
    title: id <= corePrinciples.length ? fromCore.title : `UX Principle #${id}`,
    summary:
      id <= corePrinciples.length
        ? fromCore.summary
        : `Advanced principle ${id} for improving performance, conversion, and consistent experiences across digital products.`,
    category: categories[index % categories.length],
    featured: id <= 10
  };
});

export const featuredPrinciples = principles.filter((principle) => principle.featured).slice(0, 12);
