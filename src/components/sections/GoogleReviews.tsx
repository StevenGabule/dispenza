import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
	id: number;
	title: string;
	rating: number;
	content: string;
	author: string;
	avatar: string;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		rating: 5,
		title: "Exceptional Service",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique eros sed felis imperdiet, ac congue nibh laoreet. Suspendisse accumsan eros orci, at molestie massa elementum ut. Mauris molestie hendrerit quam. Praesent sed mi efficitur, dignissim nibh sed, sagittis eros.",
		author: "John Doe",
		avatar: "./images/common/avatar-person.png"
	},
	{
		id: 2,
		rating: 5,
		title: "Another Service Made Pleasant",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan iaculis ligula, eu fringilla elit tempus quis. In nec dapibus mi. Nulla facilisi. Donec hendrerit pulvinar arcu, et mollis sem malesuada ac.",
		author: "John Doe",
		avatar: "./images/common/avatar-person.png"
	},
	{
		id: 3,
		rating: 5,
		title: "Exceptional Service",
		content: "Praesent sit amet elit nunc. In mauris ante, tempor in dolor et, imperdiet facilisis odio. Sed faucibus urna id turpis molestie, non mollis nulla sollicitudin. Curabitur efficitur leo et suscipit egestas. Donec dictum efficitur diam ut accumsan.",
		author: "John Doe",
		avatar: "./images/common/avatar-person.png"
	},
	{
		id: 4,
		rating: 5,
		title: "Excellent Experience",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique eros sed felis imperdiet, ac congue nibh laoreet. Suspendisse accumsan eros orci, at molestie massa elementum ut.",
		author: "John Doe",
		avatar: "./images/common/avatar-person.png"
	},
	{
		id: 222,
		rating: 5,
		title: "Another Service Made Pleasant",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan iaculis ligula, eu fringilla elit tempus quis. In nec dapibus mi. Nulla facilisi. Donec hendrerit pulvinar arcu, et mollis sem malesuada ac.",
		author: "John Doe",
		avatar: "./images/common/avatar-person.png"
	},
	{
		id: 34,
		rating: 5,
		title: "Exceptional Service",
		content: "Praesent sit amet elit nunc. In mauris ante, tempor in dolor et, imperdiet facilisis odio. Sed faucibus urna id turpis molestie, non mollis nulla sollicitudin. Curabitur efficitur leo et suscipit egestas. Donec dictum efficitur diam ut accumsan.",
		author: "John Doe",
		avatar: "./images/common/avatar-person.png"
	},
	{
		id: 42,
		rating: 5,
		title: "Excellent Experience",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique eros sed felis imperdiet, ac congue nibh laoreet. Suspendisse accumsan eros orci, at molestie massa elementum ut.",
		author: "John Doe",
		avatar: "./images/common/avatar-person.png"
	}
];

const CustomerReviews: React.FC = () => {
	const prevRef = React.useRef<HTMLButtonElement>(null);
	const nextRef = React.useRef<HTMLButtonElement>(null);

	return (
		<section className="py-12 bg-white">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h3 className="text-green-600 text-xl font-medium mb-2">OUR HAPPY CUSTOMERS</h3>
					<h2 className="text-4xl md:text-5xl font-bold text-green-700">WHAT CUSTOMERS HAVE WRITTEN ABOUT US</h2>
				</div>

				{/* Google Reviews Logo and Rating */}
				<div className="flex flex-col items-center justify-center mb-10">
					{/* Google Logo */}
					<div className="mb-2">
						<img
							src="./images/common/google-review.png"
							alt="Google Reviews"
							className="h-12"
						/>
					</div>

					{/* Star Rating */}
					<div className="flex items-center mb-2">
						<div className="flex">
							{[1, 2, 3, 4, 5].map((star) => (
								<svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
								</svg>
							))}
						</div>
					</div>

					{/* Rating Text */}
					<div className="text-gray-600">
						<span className="font-medium">4.9 Rating</span> | <span>626 Google Reviews</span>
					</div>
				</div>

				<div className="testimonials-carousel relative w-full mx-auto mb-10">
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={30}
						// Default settings (mobile first)
						slidesPerView={1}
						className="pb-12"
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 20
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 30
							}
						}}
						navigation={{
							prevEl: prevRef.current,
							nextEl: nextRef.current,
						}}
						pagination={{ clickable: true, el: '.swiper-pagination' }}
						onInit={(swiper) => {
							if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
								const navigation = swiper.params.navigation;
								navigation.prevEl = prevRef.current;
								navigation.nextEl = nextRef.current;
							}
							swiper.navigation.init();
							swiper.navigation.update();
						}}
					>
						{testimonials.map((testimonial) => (
							<SwiperSlide key={testimonial.id}>
								<div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
									{/* Star Rating */}
									<div className="flex mb-3">
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												className="w-5 h-5 text-yellow-400"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
											</svg>
										))}
									</div>

									{/* Title */}
									<h3 className="text-lg font-medium text-gray-700 mb-2">"{testimonial.title}"</h3>

									{/* Content */}
									<p className="text-gray-500 mb-6 flex-grow">{testimonial.content}</p>

									{/* Author */}
									<div className="flex items-center mt-auto">
										<div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
											<img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
										</div>
										<span className="text-gray-700 font-medium">{testimonial.author}</span>
									</div>
								</div>
							</SwiperSlide>
						))}   {/* Custom Pagination */}
						<div className="swiper-pagination-custom text-center mt-4 relative z-10"></div>
					</Swiper>

					{/* Custom Navigation Arrows */}
					<button ref={prevRef}
						className={'swiper-button-prev absolute top-1/2 py-3 -translate-y-1/2 left-[-15px] md:left-[-20px] z-10  flex items-center justify-center rounded-full bg-white shadow-lg !text-purple-600  focus:outline-none hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed !w-auto !h-auto !p-[1%]'}
					>
						<ChevronLeft strokeWidth={3} />
					</button>

					<button ref={nextRef}
						className={'swiper-button-next absolute top-1/2 -translate-y-1/2 right-[-15px] md:right-[-20px] z-10  flex items-center justify-center rounded-full bg-white shadow-lg !text-purple-600  focus:outline-none hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed  !w-auto !h-auto !p-[1%]'}>
						<ChevronRight strokeWidth={3} /> {/* Adjust size/strokeWidth if needed */}
					</button>
				</div>

				{/* View All Reviews Button */}
				<div className="text-center">
					<a href="#" className="inline-block px-8 py-3 bg-black text-white font-medium text-sm rounded-full hover:bg-gray-800 transition-colors uppercase tracking-wider">
						View Reviews
					</a>
				</div>

				{/* BBB Accreditation Footer */}
				<div className="max-w-6xl mx-auto px-4 py-16 border-t border-gray-100">
					<div className="flex flex-col md:flex-row items-center justify-center gap-6">
						{/* BBB Logo and Accredited Business */}
						<div className="flex-shrink-0">
							<img
								src="./images/common/customer-review-rating.png"
								alt="BBB Accredited Business"
								className="h-16 md:h-20"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CustomerReviews