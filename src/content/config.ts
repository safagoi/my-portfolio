// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    imgUrl: z.string(),
    description: z.string().max(280),
    githubUrl: z.string()
  })
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'projects': projectsCollection,
};