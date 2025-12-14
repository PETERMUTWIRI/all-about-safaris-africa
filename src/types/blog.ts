export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string; // ✅ Full content for modal
  author: string;
  date: string;
  likes: string;
  comments: string;
  image: string;
  slug: string;
  category: string; // ✅ Add category
  readTime: string; // ✅ Add read time
}