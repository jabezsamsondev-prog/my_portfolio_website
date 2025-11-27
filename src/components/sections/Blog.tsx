import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useRef } from "react";

const blogPosts = [
	{
		id: 1,
		image: "/images/blogs/post_1.png",
		title: "Why Modern Web Experience Is More About Empathy Than Code",
		description:
			"A short, clear guide that explains why empathy matters more than raw code when designing modern web experiences — practical, human-first advice for developers, designers and product people.",
		blogURL:
			"https://www.linkedin.com/pulse/why-modern-web-experience-more-empathy-than-code-jabez-samson-52rfc",
	},
	{
		id: 2,
		image: "/images/blogs/post_2.png",
		title: "The Cure for Overwhelm: Break Work Into Tiny Wins",
		description:
			"A simple, relatable guide on escaping overwhelm with small, meaningful steps — written for professionals, creators and anyone trying to move forward without burning out.",
		blogURL:
			"https://www.linkedin.com/pulse/cure-overwhelm-break-work-tiny-wins-jabez-samson-gutac",
	},
	{
		id: 3,
		image: "/images/blogs/post_3.jpg",
		title: "Why Every Developer Should Build a Portfolio Early",
		description:
			"A straightforward, human-first explanation of why all developers — junior or senior — should build a portfolio early instead of waiting for the “perfect moment.”",
		blogURL:
			"https://www.linkedin.com/pulse/why-every-developer-should-build-portfolio-early-jabez-samson-ag4mc",
	},
];

export function BlogSection() {
	const swiperRef = useRef(null);

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
					className="text-center text-[32px] font-bold mb-4 bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent"
				>
					Latest Blog Posts
				</motion.h2>
				<div className="h-1 w-20 bg-accent rounded-full mx-auto mb-10" />
				<div className="relative w-full flex justify-center items-center">
					<Swiper
						modules={[Navigation]}
						navigation={blogPosts.length > 3}
						slidesPerView={1}
						breakpoints={{
							640: { slidesPerView: 1 },
							768: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
						}}
						spaceBetween={24}
						className="w-full sm:w-[80%] mx-auto"
						ref={swiperRef}
					>
						{blogPosts.map((post) => (
							<SwiperSlide key={post.id}>
								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									className="group bg-card/60 border border-primary/20 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center hover:border-primary/40 transition-all duration-300 relative min-h-[300px]"
								>
									<div className="w-full aspect-rectangle overflow-hidden relative">
										<img
											src={post.image}
											alt={post.title}
											className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
										/>
										<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
											<a
												href={post.blogURL}
												target="_blank"
												rel="noopener noreferrer"
												className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
												style={{ zIndex: 11 }}
											>
												<button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary via-accent to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-primary/40 cursor-pointer">
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
												</button>
											</a>
										</div>
									</div>
									<div className="p-6 w-full flex-1 flex flex-col justify-between">
										<h3 className="font-bold text-md md:text-lg mb-2 bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
											{post.title}
										</h3>
										<p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
											{post.description}
										</p>
									</div>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
			{/* Gradient highlight orb */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl pointer-events-none" />
		</section>
	);
}
