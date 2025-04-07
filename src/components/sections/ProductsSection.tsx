import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

interface Product {
	id: number,
	title: string,
	backgroundImage: string,
	productImage: string,
	imagePosition: string,
}

const productCards: Product[] = [
	{
		id: 1,
		title: "FLOWER",
		backgroundImage: "./images/backgrounds/top-left-bg.png",
		productImage: "./images/products/tical.png",
		imagePosition: "right-4 bottom-4 w-2/3 max-w-xs",
	},
	{
		id: 2,
		title: "PRE ROLL",
		backgroundImage: "./images/backgrounds/pre-roll-bg.png",
		productImage: "./images/products/pre-roll-pic1.png",
		imagePosition: "top-0 right-[35%] h-full",
	},
	{
		id: 3,
		title: "DRINKS",
		backgroundImage: "./images/backgrounds/drinks-bg.png",
		productImage: "./images/products/drinks-pic1.png",
		imagePosition: "top-0 right-0 h-full",
	},
	{
		id: 4,
		title: "CONCENTRATES",
		backgroundImage: "./images/backgrounds/concentrates-bg.png",
		productImage: "./images/products/concentrates-pic1.png",
		imagePosition: "top-0 right-0 h-full",
	},
	{
		id: 5,
		title: "EDIBLES",
		backgroundImage: "./images/backgrounds/edibles-bg.png",
		productImage: "./images/products/edibles-pic1.png",
		imagePosition: "top-0 right-[15%] h-full",
	},
	{
		id: 7,
		title: "TINCTURES",
		backgroundImage: "./images/backgrounds/tinctures-bg.png",
		productImage: "./images/products/tinctures-pic1.png",
		imagePosition: "bottom-[-25px] right-[15px] h-full w-[120px]",
	},
	{
		id: 8,
		title: "VAPORIZERS",
		backgroundImage: "./images/backgrounds/vaporizers-bg.png",
		productImage: "./images/products/vaporizers-pic1.png",
		imagePosition: "right-4 bottom-4 w-[450px]",
	},
];

const ProductsSection = () => {
	const [isMobile, setIsMobile] = useState(false);

	// Check if we're on mobile
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Initial check
		checkIfMobile();

		// Setup listener
		window.addEventListener('resize', checkIfMobile);

		// Cleanup
		return () => {
			window.removeEventListener('resize', checkIfMobile);
		};
	}, []);

	// Product Card Component
	const ProductCard = ({ product }: { product: Product }) => (
		<div
			className="rounded-lg relative overflow-hidden"
			style={{
				backgroundImage: `url('${product.backgroundImage}')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				minHeight: isMobile ? '200px' : '100%',
			}}
		>
			<div className="h-full rounded-lg relative p-6 flex justify-start items-center">
				<div className="relative z-20 flex flex-col items-center">
					<h2 className="text-white text-3xl md:text-4xl font-bold mb-4">{product.title}</h2>
					<button className="bg-[#8DAA22] hover:bg-[#768F1D] text-white font-semibold rounded-full w-32 md:w-40 py-4 md:py-6">
						ORDER NOW
					</button>
				</div>

				{product.productImage && (
					<div className={`absolute z-0 ${product.imagePosition}`}>
						<img
							src={product.productImage}
							alt={`${product.title} product`}
							className="object-contain"
						/>
					</div>
				)}
			</div>
		</div>
	);

	return (
		<section className='py-16 bg-white relative'>
			<div className="absolute inset-0 z-0">
				<img
					src="./images/backgrounds/product-bg.png"
					alt=""
					className="w-full h-full object-cover"
				/>
				{/* add new background */}
			</div>

			<div className="container mx-auto px-4 sm:px-6 relative z-10">
				<h2 className="text-4xl font-bold text-center mb-3 text-[#8CB82B] z-20 ">OUR PRODUCTS</h2>
				<p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>

				{isMobile ? (
					<>
						<Swiper
							spaceBetween={22}
							slidesPerView={1.7}
							centeredSlides={true}
							modules={[Navigation]}
							className="products-swiper"
						>
							{productCards.map((product) => (
								<SwiperSlide key={product.id}>
									<ProductCard product={product} />
								</SwiperSlide>
							))}
						</Swiper>
					</>
				) : (
					<>
						<div className="grid grid-cols-2 gap-4 p-4 border-0 overflow-hidden rounded-lg relative">
							{/* Left column with a single tall card */}
							<Card className="min-h-[500px]  w-full max-w-[680px]"
								style={{
									backgroundImage: "url('./images/backgrounds/top-left-bg.png')",
									backgroundSize: 'cover',
									backgroundPosition: 'center'
								}}>
								<CardContent className="rounded-lg relative p-6 flex justify-start items-center min-h-[500px]">
									<div className="relative z-20 p-6 flex flex-col items-start">
										<h2 className="text-white text-4xl font-bold mb-4">FLOWER</h2>
										<Button className="bg-[#8DAA22] hover:bg-[#768F1D] text-white font-semibold rounded-full w-40 py-6">
											ORDER NOW
										</Button>
									</div>

									<div className="absolute inset-0 z-0 flex items-center justify-center">
										<div className="absolute right-4 bottom-4 w-2/3 max-w-xs">
											<img
												src="./images/products/tical.png"
												alt="Cannabis flower product bag"
												className="object-contain"
											/>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Right column with a top card and two bottom cards */}
							<div className="flex flex-col gap-4 min-h-[500px]">
								{/* Top card takes full width of the right column */}
								<Card className="rounded-lg flex-1" style={{ backgroundImage: "url('./images/backgrounds/pre-roll-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
									<CardContent className="h-full rounded-lg relative p-6 flex justify-start items-center">
										<div className="relative z-20 flex flex-col items-start">
											<h2 className="text-white text-4xl font-bold mb-4">PRE ROLL</h2>
											<Button className="bg-[#8DAA22] hover:bg-[#768F1D] text-white font-semibold rounded-full w-40 py-6">
												ORDER NOW
											</Button>
										</div>

										<div className="absolute top-0 right-0 h-full z-0">
											<img
												src="./images/products/pre-roll-pic2.png"
												alt="Cannabis flower product bag"
												className="h-full object-contain"
											/>
										</div>

										<div className="absolute top-0 right-[35%] h-full z-0">
											<img
												src="./images/products/pre-roll-pic1.png"
												alt="Cannabis flower product bag"
												className="h-full object-contain"
											/>
										</div>

									</CardContent>
								</Card>

								{/* Bottom row with two cards side by side */}
								<div className="grid grid-cols-2 gap-4 flex-1">
									<Card className="bg-yellow-100 rounded-lg  h-full" style={{ backgroundImage: "url('./images/backgrounds/drinks-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
										<CardContent className="h-full rounded-lg relative flex justify-start items-center ">
											<div className="relative z-20 flex flex-col items-start">
												<h2 className="text-white text-4xl font-bold mb-4">DRINKS</h2>
												<Button className="bg-[#8DAA22] hover:bg-[#768F1D] text-white font-semibold rounded-full w-40 py-6">
													ORDER NOW
												</Button>
											</div>
											<div className="absolute top-0 right-0 h-full z-0">
												<img
													src="./images/products/drinks-pic1.png"
													alt="Cannabis flower product bag"
													className="h-full object-contain"
												/>
											</div>
										</CardContent>
									</Card>
									<Card className="bg-purple-100 rounded-lg h-full" style={{ backgroundImage: "url('./images/backgrounds/concentrates-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
										<CardContent className="h-full rounded-lg relative flex justify-start items-center ">
											<div className="relative z-20 flex flex-col items-start">
												<h2 className="text-white text-4xl font-bold mb-4">CONCENTRATES</h2>
												<Button className="bg-[#8DAA22] hover:bg-[#768F1D] text-white font-semibold rounded-full w-40 py-6">
													ORDER NOW
												</Button>
											</div>
											<div className="absolute top-0 right-0 h-full z-0">
												<img
													src="./images/products/concentrates-pic1.png"
													alt="Cannabis flower product bag"
													className="h-full object-contain"
												/>
											</div>
										</CardContent>
									</Card>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4 p-4">
							{/* Right column with a top card and two bottom cards */}
							<div className="flex flex-col gap-4 min-h-[500px]">
								{/* Top card takes full width of the right column */}
								<Card className="rounded-lg flex-1" style={{ backgroundImage: "url('./images/backgrounds/edibles-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
									<CardContent className="h-full rounded-lg relative p-6 flex justify-start items-center">
										<div className="relative z-20 flex flex-col items-start">
											<h2 className="text-white text-4xl font-bold mb-4">EDIBLES</h2>
											<Button className="bg-[#8DAA22] hover:bg-[#768F1D] text-white font-semibold rounded-full w-40 py-6">
												ORDER NOW
											</Button>
										</div>

										<div className="absolute top-0 right-[15%] h-full z-0">
											<img
												src="./images/products/edibles-pic1.png"
												alt="Cannabis flower product bag"
												className="h-full object-contain"
											/>
										</div>

									</CardContent>
								</Card>

								{/* Bottom row with two cards side by side */}
								<div className="grid grid-cols-2 gap-4 flex-1">
									<Card className="bg-yellow-100 rounded-lg  h-full" style={{ backgroundImage: "url('./images/backgrounds/accessories-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
										<CardContent className="h-full rounded-lg relative flex justify-start items-start pt-6">
											<div className="relative z-20 flex flex-col items-start">
												<h2 className="text-white text-4xl font-bold mb-4">ACCESSORIES</h2>
												<Button className="bg-[#8DAA22] hover:bg-[#768F1D] text-white font-semibold rounded-full w-40 py-6">
													ORDER NOW
												</Button>
											</div>
										</CardContent>
									</Card>
									<Card className="bg-purple-100 rounded-lg h-full" style={{ backgroundImage: "url('./images/backgrounds/tinctures-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
										<CardContent className="h-full rounded-lg relative flex justify-start items-start pt-6">
											<div className="relative z-20 flex flex-col items-start">
												<h2 className="text-white text-4xl font-bold mb-4">TINCTURES</h2>
												<Button className="bg-[#8DAA22] hover:bg-[#768F1D] text-white font-semibold rounded-full w-40 py-6">
													ORDER NOW
												</Button>
											</div>
											<div className="absolute bottom-[-25px] right-[15px] h-full z-0 ">
												<img
													src="./images/products/tinctures-pic1.png"
													alt="Cannabis flower product bag"
													className="h-full object-contain  w-[120px]"
												/>
											</div>
										</CardContent>
									</Card>
								</div>
							</div>

							<Card
								className="min-h-[500px]"
								style={{
									backgroundImage: "url('./images/backgrounds/vaporizers-bg.png')",
									backgroundSize: 'cover',
									backgroundPosition: 'center'
								}}>
								<CardContent className="rounded-lg relative p-6 flex justify-start items-center min-h-[500px]">
									<div className="relative z-20 p-6 flex flex-col items-start">
										<h2 className="text-white text-4xl font-bold mb-4">VAPORIZERS</h2>
										<Button className="bg-[#8DAA22] hover:bg-[#768F1D] text-white font-semibold rounded-full w-40 py-6">
											ORDER NOW
										</Button>
									</div>

									<div className="absolute inset-0 z-0 flex items-center justify-center">
										<div className="absolute right-4 bottom-4 w-[450px]">
											<img
												src="./images/products/vaporizers-pic1.png"
												alt="Cannabis flower product bag"
												className="object-contain"
											/>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</>
				)}
			</div>
		</section>
	)
}

export default ProductsSection;