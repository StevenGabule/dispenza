import React from 'react';
import { Instagram } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const SocialMediaSection: React.FC = () => {
	const slides = [
		{
			id: 1,
			image: "./images/follows/follow-us-pic1.png",
			alt: "Person standing in cannabis store"
		},
		{
			id: 2,
			image: "./images/follows/follow-us-pic2.png",
			alt: "People in cannabis dispensary"
		},
		{
			id: 3,
			image: "./images/follows/follow-us-pic3.png",
			alt: "Cannabis product with money"
		},
		{
			id: 4,
			image: "./images/follows/follow-us-pic4.png",
			alt: "Delivery van"
		},
		{
			id: 5,
			image: "./images/follows/follow-us-pic5.png",
			alt: "Cannabis product closeup"
		},
		{
			id: 6,
			image: "./images/follows/follow-us-pic2.png",
			alt: "People in cannabis dispensary"
		},
		{
			id: 7,
			image: "./images/follows/follow-us-pic3.png",
			alt: "Cannabis product with money"
		},
		{
			id: 8,
			image: "./images/follows/follow-us-pic4.png",
			alt: "Delivery van"
		},
		{
			id: 9,
			image: "./images/follows/follow-us-pic5.png",
			alt: "Cannabis product closeup"
		}
	];

	return (
		<div className="w-full bg-gradient-to-b from-lime-50 to-lime-100 py-10 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-8">
					<h2 className="text-4xl font-bold text-olive-600 mb-3">FOLLOW US ON OUR SOCIALS</h2>
					<p className="text-gray-700 max-w-2xl mx-auto">
						Join our cannabis community on social media for exclusive updates, promotions, and latest product releases!
					</p>
					<a
						href="#"
						className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded mt-6 hover:bg-gray-800 transition-colors"
					>
						<Instagram size={20} />
						FOLLOW OUR INSTAGRAM
					</a>
				</div>
			</div>

			<section className="w-full py-8 ">
				<Swiper
					slidesPerView={2.3}
					centeredSlides={true}
					spaceBetween={30}
					loop={true}
					breakpoints={{
						768: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
					}}
				>
					{slides.map((imageUrl, index) => (
						<SwiperSlide key={index} className="!flex !justify-center !items-center">
							<div className="bg-white shadow-md rounded-lg overflow-hidden h-64 w-full">
								<img
									src={imageUrl.image}
									alt={`Slide ${index + 1}`}
									className="object-cover w-full h-full" // Cover the slide area
									loading="lazy" // Improve performance
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</div>
	)
}

export default SocialMediaSection