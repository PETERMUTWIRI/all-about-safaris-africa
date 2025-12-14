'use client';

import { BlogContent } from '@/components/BlogContent';
import { BlogModal } from '@/components/BlogModal';
import { useState } from 'react';
import { BlogPost } from '@/types/blog';

export function BlogClient({ posts }: { posts: BlogPost[] }) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <>
      <BlogContent posts={posts} onReadMore={handleReadMore} />
      <BlogModal 
        post={selectedPost} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}