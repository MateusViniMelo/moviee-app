import type { Author } from "./author";

export interface AnaliseFilme {
  author: string;
  author_details: Author;
  content: string;
  created_at: Date;
  id: string;
  updated_at: Date;
  url: string;
}
