import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    journal: z.string().optional(),
    conference: z.string().optional(),
    year: z.number(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    pdf: z.string().optional(),
    abstract: z.string().optional(),
    tags: z.array(z.string()).optional(),
    type: z.enum(['journal', 'conference', 'preprint', 'chapter', 'thesis', 'review']).default('journal'),
    status: z.enum(['published', 'under-review', 'preprint']).default('published'),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    location: z.string().optional(),
    date: z.date(),
    url: z.string().url().optional(),
    slides: z.string().optional(),
    type: z.enum(['invited', 'conference', 'seminar', 'workshop']).default('conference'),
  }),
});

const teaching = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teaching' }),
  schema: z.object({
    title: z.string(),
    institution: z.string(),
    role: z.string(),
    years: z.string(),
    description: z.string().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    url: z.string().url().optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { publications, talks, teaching, news, team };
