import type { Principle } from '@types/principle';

const corePrinciples: Omit<Principle, 'id' | 'slug'>[] = [
  { title: 'UX es un conjunto de disciplinas', summary: 'Combina investigación, estrategia, arquitectura de información y diseño de interacción.', category: 'strategy', featured: true },
  { title: 'Sin investigación no hay UX', summary: 'Decide con evidencia y entrevistas en lugar de supuestos internos.', category: 'research', featured: true },
  { title: 'El contenido también diseña', summary: 'La microcopia y jerarquía visual impactan la comprensión y confianza.', category: 'content', featured: true },
  { title: 'La accesibilidad no es opcional', summary: 'Diseña para capacidades diversas y cumple estándares inclusivos.', category: 'accessibility', featured: true },
  { title: 'Prototipa, mide, itera', summary: 'Reduce riesgo de producto validando de forma continua.', category: 'interaction', featured: true }
];

const categories: Principle['category'][] = ['research', 'content', 'interaction', 'accessibility', 'strategy'];

// Generates 151 static items so Astro can prerender 151 pages at build time.
export const principles: Principle[] = Array.from({ length: 151 }, (_, index) => {
  const id = index + 1;
  const fromCore = corePrinciples[index % corePrinciples.length];

  return {
    id,
    slug: `principio-${String(id).padStart(3, '0')}`,
    title: id <= corePrinciples.length ? fromCore.title : `Principio UX #${id}`,
    summary:
      id <= corePrinciples.length
        ? fromCore.summary
        : `Principio avanzado ${id} para optimizar performance, conversión y experiencia consistente en productos digitales.`,
    category: categories[index % categories.length],
    featured: id <= 10
  };
});

export const featuredPrinciples = principles.filter((principle) => principle.featured).slice(0, 12);
