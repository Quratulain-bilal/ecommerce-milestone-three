"use client";

import * as React from "react";
import Link from "next/link"; // Import Link for navigation

const blogData = [
  {
    imageUrl:
      "https://images.pexels.com/photos/3810730/pexels-photo-3810730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Top Fashion Trends for 2023",
    readTime: "5 min",
    date: "12th Oct 2023",
    clockIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0927156daf4d21463dcbe5a0e9d739b7dbd6c63654dc4a738c6f4be0a3f0c614?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    calendarIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a29bbeb707fa74be6d844742fd199890d731af70675e9a4a92c7a56e354106?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    content:
      "As we step into 2023, fashion is all about bold colors, oversized silhouettes, and sustainable materials. This blog explores the top trends that are making waves this year, including the resurgence of Y2K fashion, the popularity of athleisure, and the rise of eco-friendly brands. Discover how to incorporate these trends into your wardrobe and stay stylish all year round.",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/7202266/pexels-photo-7202266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Sustainable Fashion: A Growing Trend",
    readTime: "4 min",
    date: "15th Oct 2023",
    clockIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e6009bf57db232ab5d21bb6de522226539cab62712208d2d3af3a4c299901b33?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    calendarIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fac26e7ebece53d89fc358df901494282e07e7adfcc63cd9acbc9ea6a3fe442c?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    content:
      "Sustainable fashion is no longer just a trend; it's a movement. This blog discusses the importance of sustainability in the fashion industry and highlights brands that are leading the way in eco-friendly practices. From upcycled materials to ethical labor practices, learn how you can make more conscious choices in your fashion purchases and contribute to a healthier planet.",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/22634668/pexels-photo-22634668/free-photo-of-a-young-man-and-woman-posing-in-matching-shirts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "The Key to Elevating Your Outfit",
    readTime: "6 min",
    date: "20th Oct 2023",
    clockIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9a371776e9ac028bd0b007f26c8e463ff88af157ad65855ad9ea028370239cfc?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    calendarIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a29bbeb707fa74be6d844742fd199890d731af70675e9a4a92c7a56e354106?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    content:
      "Accessories can make or break an outfit. This blog delves into the art of accessorizing, offering tips on how to choose the right accessories to complement your look. From statement jewelry to stylish bags and shoes, learn how to elevate your outfits and express your personal style through the right finishing touches.",
  },
];

interface BlogCardProps {
  imageUrl: string;
  title: string;
  readTime: string;
  date: string;
  clockIconUrl: string;
  calendarIconUrl: string;
  content: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  title,
  readTime,
  date,
  clockIconUrl,
  calendarIconUrl,
  content,
}) => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div className="flex flex-col items-center w-full text-black p-4">
      <img
        loading="lazy"
        src={imageUrl}
        alt={title}
        className="object-cover self-stretch w-full h-64 rounded-xl" // Increased height
      />
      <div className="self-stretch mx-7 mt-4 text-xl font-bold">{title}</div>
      <div className="mt-2.5 text-lg font-medium">
        <button
          className="bg-black text-white border-2 border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          tabIndex={0}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Learn More"}
        </button>
      </div>
      {showMore && (
        <div className="mt-4 text-base font-light max-md:max-w-full">
          {content}
        </div>
      )}
      <div className="shrink-0 mt-2 h-0.5 border-2 border-black border-solid w-[115px]" />
      <div className="flex gap-3 mt-5 max-w-full text-base w-[222px]">
        <div className="flex gap-2.5 font-light">
          <img
            loading="lazy"
            src={clockIconUrl}
            alt="Clock Icon"
            className="object-contain shrink-0 my-auto aspect-square w-[18px]"
          />
          <div>{readTime}</div>
        </div>
        <div className="flex gap-2 font-medium">
          <img
            loading="lazy"
            src={calendarIconUrl}
            alt="Calendar Icon"
            className="object-contain shrink-0 my-auto aspect-square w-[18px]"
          />
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
};

const BlogList: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-2">Our Blogs</h2>
      <p className="text-lg text-center mb-6">
        Stay updated with the latest trends and insights in the fashion world
        through our curated blog posts. Each article offers valuable information
        to help you navigate the ever-evolving landscape of style and
        sustainability.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
