import React from 'react';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Blog</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white shadow-lg">
            <Image
              src="/img/blog-1.jpg"
              alt="Blog 1"
              width={500}
              height={300}
              className="h-auto w-full"
            />
            <div className="p-6">
              <h3 className="mb-4 text-xl font-bold">Adventures Trip</h3>
              <p>
                I’ve always wanted to try something adventurous, and this trip
                didn’t disappoint. Climbing the rugged trails and soaking in
                the stunning views was an experience I’ll cherish forever. It
                was the perfect mix of challenge and fun
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-lg">
            <Image
              src="/img/blog-2.jpg"
              alt="Blog 2"
              width={500}
              height={300}
              className="h-auto w-full"
            />
            <div className="p-6">
              <h3 className="mb-4 text-xl font-bold">Adventures Trip</h3>
              <p>
                What an unforgettable experience! The team went above and
                beyond to make sure everything was perfect. From camping under
                the stars to exploring hidden waterfalls, every moment felt
                like a dream come true.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-lg">
            <Image
              src="/img/blog-3.jpg"
              alt="Blog 3"
              width={500}
              height={300}
              className="h-auto w-full"
            />
            <div className="p-6">
              <h3 className="mb-4 text-xl font-bold">Adventures Trip</h3>
              <p>
                This adventure trip exceeded all my expectations! From
                ziplining through lush forests to kayaking in crystal-clear
                waters, every activity was pure magic. The guides were
                amazing, and I felt safe while having the time of my life
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
