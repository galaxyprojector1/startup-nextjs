import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Clarity that moves markets",
    paragraph:
      "Why narrative precision—not volume—creates outsized leverage across capital, media, and customer decisions.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Editorial Team",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Reputation capital in practice",
    paragraph:
      "A practical playbook for building credibility with the stakeholders that matter most—before you need it.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Editorial Team",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Designing content that compounds",
    paragraph:
      "How to turn thought leadership into a system that scales presence, relevance, and authority over time.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Editorial Team",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
