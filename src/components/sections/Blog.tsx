import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "swiper/swiper-bundle.css";

const blogPosts = [
  {
    id: 9,
    image: "/images/blogs/post_9.png",
    title:
      "The Hidden Tech Divide: Why 90% of Developers Will Be 'Average' in the AI Era",
    blogURL:
      "https://www.linkedin.com/pulse/hidden-tech-divide-why-90-developers-average-ai-era-jabez-samson-3hk2c",
  },
  {
    id: 8,
    image: "/images/blogs/post_8.png",
    title:
      "We're Not Building Software for Humans Anymore — We're Building It for AI Agents",
    blogURL:
      "https://www.linkedin.com/pulse/were-building-software-humans-anymore-ai-agents-jabez-samson-soxuc",
  },
  {
    id: 7,
    image: "/images/blogs/post_7.png",
    title:
      "The Silent Death of 'Search' — Why AI Answers Are Replacing Websites Without Anyone Noticing",
    blogURL:
      "https://www.linkedin.com/pulse/silent-death-search-why-ai-answers-replacing-websites-jabez-samson-lem6c",
  },
  {
    id: 6,
    image: "/images/blogs/post_6.png",
    title: "The Rise of GEO: Optimizing for AI-Powered Search in 2025",
    blogURL:
      "https://www.linkedin.com/pulse/rise-geo-optimizing-ai-powered-search-2025-jabez-samson-wqcac",
  },
  {
    id: 5,
    image: "/images/blogs/post_5.jpg",
    title:
      "Semantic Search vs Traditional Keyword Matching: The Birth of Generative AI Chatbots",
    blogURL:
      "https://www.linkedin.com/pulse/semantic-search-vs-traditional-keyword-matching-birth-jabez-samson-yycbc",
  },
  {
    id: 4,
    image: "/images/blogs/post_4.png",
    title:
      "Building My Portfolio with TypeScript: A Journey of Learning with AI",
    blogURL:
      "https://www.linkedin.com/pulse/building-my-portfolio-typescript-journey-learning-ai-jabez-samson-ms7cc",
  },
  {
    id: 3,
    image: "/images/blogs/post_3.jpg",
    title: "Why Every Developer Should Build a Portfolio Early",
    blogURL:
      "https://www.linkedin.com/pulse/why-every-developer-should-build-portfolio-early-jabez-samson-ag4mc",
  },
  {
    id: 2,
    image: "/images/blogs/post_2.png",
    title: "The Cure for Overwhelm: Break Work Into Tiny Wins",
    blogURL:
      "https://www.linkedin.com/pulse/cure-overwhelm-break-work-tiny-wins-jabez-samson-gutac",
  },
  {
    id: 1,
    image: "/images/blogs/post_1.png",
    title: "Why Modern Web Experience Is More About Empathy Than Code",
    blogURL:
      "https://www.linkedin.com/pulse/why-modern-web-experience-more-empathy-than-code-jabez-samson-52rfc",
  },
];

export function BlogSection() {
  const swiperRef = useRef(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (firstCardRef.current) {
      setCardHeight(firstCardRef.current.offsetHeight);
    }
  }, []);

  return (
    <section
      id="blog"
      className="relative py-16 md:py-20 lg:py-24 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-foreground"
        >
          Latest Blog Posts
        </motion.h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-purple-400 to-secondary rounded-full mx-auto mb-16 animate-gradient bg-[length:200%_auto]" />
        <div className="relative w-full flex justify-center items-center">
          <div className="w-full sm:w-[80%] mx-auto relative flex min-h-[1px]">
            <Swiper
              modules={[Navigation]}
              navigation={
                blogPosts.length > 3
                  ? {
                      nextEl: ".blog-swiper-next",
                      prevEl: ".blog-swiper-prev",
                    }
                  : false
              }
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              spaceBetween={24}
              loop={true}
              className="w-full h-full"
              ref={swiperRef}
            >
              {blogPosts.map((post, idx) => (
                <SwiperSlide
                  key={post.id}
                  className="flex"
                  style={cardHeight ? { height: cardHeight } : {}}
                >
                  <motion.div
                    ref={idx === 0 ? firstCardRef : undefined}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="group bg-card/60 border border-primary/20 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center hover:border-primary/40 transition-all duration-300 relative w-full"
                  >
                    <div className="w-full aspect-[16/9] overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 w-full flex-1 flex flex-col gap-3">
                      <div>
                        <h3
                          className="font-bold text-md md:text-lg mb-2 text-white/80 line-clamp-2 overflow-hidden text-ellipsis"
                          title={post.title}
                        >
                          {post.title}
                        </h3>
                      </div>
                      <a
                        href={post.blogURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary via-accent to-purple-500 text-white font-semibold shadow-lg focus:outline-none focus:ring-primary/40 cursor-pointer w-max"
                        style={{ zIndex: 11 }}
                      >
                        Read article
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 13V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {blogPosts.length > 3 && (
            <>
              <button
                className="blog-swiper-prev absolute top-1/2 -translate-y-1/2 sm:-translate-y-1/2 -translate-y-8 z-30 bg-gradient-to-br from-primary to-accent text-white rounded-full p-2 sm:p-2 shadow-lg hover:scale-110 transition-all duration-200 cursor-pointer"
                aria-label="Previous"
                style={{ left: "calc(10% - 2rem)" }}
              >
                <svg
                  className="w-5 h-5 sm:w-7 sm:h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="blog-swiper-next absolute top-1/2   -translate-y-1/2 sm:-translate-y-1/2 -translate-y-8 z-30 bg-gradient-to-br from-primary to-accent text-white rounded-full p-2 sm:p-2 shadow-lg hover:scale-110 transition-all duration-200 cursor-pointer"
                aria-label="Next"
                style={{ right: "calc(10% - 2rem)" }}
              >
                <svg
                  className="w-5 h-5 sm:w-7 sm:h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
      {/* Gradient highlight orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl pointer-events-none" />
    </section>
  );
}
