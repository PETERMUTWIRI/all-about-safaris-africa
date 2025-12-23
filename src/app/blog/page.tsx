import { BlogClient } from '@/components/BlogClient';
import { BlogPost } from '@/types/blog';

export const metadata = {
  title: 'Travel Blog | All About Safaris Africa',
  description: 'Expert safari guides share stories, tips, and conservation news from 15+ years in the field.',
};

// Realistic blog posts from 2019-2025 (company founded 2009)
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Witnessing the Great Migration: A Front-Row Seat to Nature's Drama",
    excerpt: "After 15 years guiding safaris, the Great Migration still takes my breath away. Here's how to experience it like a pro.",
    content: `The first time I saw the Great Migration, I was a young guide fresh out of training. It was 2012, and I thought I knew what to expect. I was wrong.\n\n
    Nothing prepares you for the sound – millions of hooves thundering across the plains, a vibration you feel in your chest. The dust rising like a golden fog, obscuring the endless herds that stretch to the horizon.\n\n
    Last season, I watched a mother wildebeest give birth in real-time, the entire process lasting mere minutes before the newborn was on its feet, already running with the herd. It's moments like these that remind you why safari isn't just a vacation – it's a transformation.\n\n
    **Pro Tips:**\n    - Book Mara River crossings in August-September\n    - Sunrise game drives offer best lighting\n    - Patience is key – wait near the riverbanks\n    \n    The Great Migration isn't just a wildlife event. It's a testament to nature's raw power and resilience. After guiding hundreds of trips, I still get goosebumps every time.`,
    author: "Martin Kihuria",
    date: "12 Aug 2024",
    likes: "2.3K",
    comments: "142",
    image: "/images/blog-1.jpg",
    slug: "great-migration-guide-2024",
    category: "Wildlife Safari",
    readTime: "6 min read"
  },
  {
    id: 2,
    title: "The Secret Life of Leopard: Tracking Africa's Ghost Cat",
    excerpt: "Most safari-goers miss leopards entirely. Our lead guide shares advanced tracking techniques from 12 years in the bush.",
    content: `Leopards are called 'ghost cats' for good reason. During my 12 years as a lead safari guide, I've spent countless hours tracking these elusive predators through acacia thickets and riverine forests.\n\n
    Unlike lions that broadcast their presence with roaring, leopards operate in near silence. The key is learning to read the signs: fresh tracks in sandy soil, the alarm calls of vervet monkeys, or a sudden absence of smaller game.\n\n
    Last month near the Talek River, I spotted a female leopard dragging a freshly killed impala up a sausage tree. Watching her hoist the carcass 15 feet into the branches – away from hyenas and lions – was a masterclass in survival strategy.\n\n
    **Advanced Tracking Tips:**\n    - Listen for guinea fowl alarm calls\n    - Scan tree branches at dawn/dusk\n    - Look for dragged prey trails\n    - Check riverine thickets during midday heat\n    \n    The most rewarding leopard sighting is the one you earn through patience and pattern recognition. These cats are solitary for a reason – survival demands stealth.`,
    author: "John Karanja",
    date: "05 Oct 2023",
    likes: "1.8K",
    comments: "89",
    image: "/images/blog-2.jpg",
    slug: "tracking-leopards-african-ghost-cat",
    category: "Wildlife Tips",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Conservation Wins: How Tourism Saved the Mountain Gorilla",
    excerpt: "From 620 individuals in 1989 to over 1,000 today – the gorilla conservation story proves sustainable tourism works.",
    content: `When I first visited Bwindi Impenetrable Forest in 2015, the mountain gorilla population was just beginning its remarkable recovery. Today, standing in the presence of a 400-pound silverback is both humbling and hopeful.\n\n
    The numbers tell a powerful story: in 1989, only 620 mountain gorillas remained worldwide. Through concerted conservation efforts funded largely by safari tourism, that number has grown to over 1,000 today.\n\n
    Our partnership with local communities has been crucial. In Uganda's Bwindi region, former poachers now work as trackers and porters. Each gorilla family visited generates approximately $500,000 annually for local communities – creating a powerful incentive to protect rather than poach.\n\n
    **Conservation Impact:**\n    - 15% of safari revenue funds anti-poaching patrols\n    - Community clinics built from tourism dollars\n    - Schools educating next generation of conservationists\n    - Habitat restoration programs expanding\n    \n    When you trek to see gorillas, you're not just having an incredible experience – you're directly contributing to their survival. That's the power of responsible safari tourism.`,
    author: "Sarah Kiptoo",
    date: "18 Mar 2022",
    likes: "3.1K",
    comments: "267",
    image: "/images/blog-3.jpg",
    slug: "gorilla-conservation-success-story",
    category: "Conservation",
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "Hot Air Balloon Safari: Africa from Above",
    excerpt: "Floating silently above the Masai Mara at sunrise – here's why balloon safaris are worth every penny.",
    content: `The silence is what strikes you first. At 6:15 AM, 1,000 feet above the Masai Mara, the only sounds are the occasional blast of the balloon's burner and the distant calls of awakening wildlife below.\n\n
    I've guided traditional game drives for 15 years, but nothing compares to the perspective from a hot air balloon. From this vantage point, the Great Migration transforms from scattered herds into a living, flowing river of life across the savannah.\n\n
    Last August, I watched a leopard stalk a gazelle from above – the entire drama playing out like a nature documentary. The leopard's stealth, the gazelle's vigilance, the moment of the chase. All visible from our silent vantage point.\n\n
    **Balloon Safari Tips:**\n    - Book 2-3 days to account for weather cancellations\n    - Dress warmly – it's cold at altitude\n    - Best months: July-October during migration\n    - Bring a telephoto lens for aerial photography\n    \n    The champagne breakfast that follows, set up in the middle of the savannah as wildlife grazes nearby, is the perfect coda to an unforgettable experience. Balloon safaris aren't cheap, but they're priceless.`,
    author: "Martin Kihuria",
    date: "22 Jul 2021",
    likes: "1.9K",
    comments: "156",
    image: "/images/hot-air-ballon.jpg",
    slug: "hot-air-balloon-safari-guide",
    category: "Adventure",
    readTime: "5 min read"
  },
  {
    id: 5,
    title: "Packing for Safari: The Ultimate Checklist from 15 Years of Experience",
    excerpt: "Don't let poor packing ruin your safari. Here's everything you actually need (and what to leave behind).",
    content: `After 15 years and 500+ safaris, I've seen every packing mistake possible. The tourist who brought a full suitcase of evening gowns. The photographer who forgot spare batteries. The family that didn't pack enough sunscreen.\n\n
    Safari packing is about being prepared, not being overloaded. The key is layers – mornings can be 10°C, afternoons 30°C. Neutral colors (khaki, olive, tan) are essential. Bright colors scare wildlife, dark colors attract tsetse flies.\n\n
    **Essential Gear:**\n    - Binoculars (8x42 or 10x42) – every person needs their own\n    - Telephoto lens (200mm minimum, 400mm ideal)\n    - Headlamp with red light mode\n    - Buff or bandana for dust protection\n    - 50+ SPF sunscreen and lip balm\n    - Wide-brim hat with chin strap\n    \n    **What NOT to Bring:**\n    - Bright colors (red, white, yellow)\n    - Strong perfumes (attracts insects)\n    - Hard suitcases (soft duffels only)\n    - Drone cameras (illegal in most parks)\n    \n    Pro tip: Pack a small daypack for game drives with water, camera gear, and a windbreaker. Most lodges provide laundry service, so you need less than you think.`,
    author: "Sarah Kiptoo",
    date: "09 Nov 2020",
    likes: "4.2K",
    comments: "423",
    image: "/images/featured-lamu.jpg",
    slug: "ultimate-safari-packing-checklist",
    category: "Travel Tips",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "The Future of Safari: Sustainable Tourism in a Changing Climate",
    excerpt: "How climate change is reshaping African safaris and what responsible operators are doing about it.",
    content: `The first time I noticed climate change impacting our safaris was 2019. The rains came late, the grass stayed brown longer, and wildlife patterns shifted dramatically. This wasn't seasonal variation – this was systemic change.\n\n
    Over the past decade, we've had to adapt every aspect of our operations. Migration routes have shifted as water sources dried up. Some species populations have declined while others thrived in the new conditions.\n\n
    **Climate Adaptations:**\n    - Re-routed game drives to follow new wildlife patterns\n    - Built water catchment systems at our camps\n    - Partnered with climate scientists for research\n    - Offset 100% of carbon through verified programs\n    \n    The good news: safari tourism is part of the solution. Every traveler contributes to conservation funding. Protected areas remain intact because tourism makes them economically valuable. Without safaris, these lands would be converted to agriculture.\n\n    Looking ahead to 2025-2030, we're investing in electric safari vehicles, solar-powered camps, and community-based conservation. The future of safari is green, or there won't be a safari future at all.`,
    author: "Martin Kihuria",
    date: "15 Feb 2019",
    likes: "3.7K",
    comments: "312",
    image: "/images/commitment-conservation.jpg",
    slug: "sustainable-safari-future-climate",
    category: "Conservation",
    readTime: "11 min read"
  },
];

export default function BlogPage() {
  return (
    // ✅ DARK BACKGROUND WRAPPER - ensures consistency behind navbar
    <div className="min-h-screen bg-neutral-950">
      <BlogClient posts={blogPosts} />
    </div>
  );
}