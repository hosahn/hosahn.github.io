import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      before: z.coerce.date().optional(),
      after: z.coerce.date().optional(),
      categories: z.array(z.string()).default([]),
      thumbnail: image().optional(),
    }),
});

export const collections = { blog };
