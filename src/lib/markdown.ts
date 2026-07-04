import fs from 'fs';
import path from 'path';

export function getArticleContent(slug: string): string {
  const articlesDirectory = path.join(process.cwd(), 'src/data/articles');
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return fileContents;
  } catch {
    return '';
  }
}
