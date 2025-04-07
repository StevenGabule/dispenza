import React from 'react';

const FavoriteBrands: React.FC = () => {
	return (
		<section className="relative py-32 bg-[rgb(207,104,0)] overflow-hidden">
			<div className="absolute inset-0 z-0">
				<img
					src="./images/backgrounds/favorite-branch-bg.png"
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-12">
					<h2 className="text-white text-5xl font-bold tracking-wide mb-2">YOUR FAVORITE BRANDS</h2>
					<p className="text-white text-xl">Favorite brands and budmasters top picks</p>
				</div>
				{/* Brands logos */}
				<div className="max-w-6xl mx-auto mb-12">
					<div className="grid grid-cols-3 gap-6 lg:grid-cols-5">
						{/* Brand 1 */}
						<div className="bg-white rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
							<img src="./images/brands/brand-h.png" alt="Brand logo" className="max-h-16" />
						</div>
						{/* Brand 2 */}
						<div className="bg-white rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
							<img src="./images/brands/brand-west-coast-cure.png" alt="Brand logo" className="max-h-16" />
						</div>
						{/* Brand 3 */}
						<div className="bg-white rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
							<img src="./images/brands/brand-stache.png" alt="Brand logo" className="max-h-16" />
						</div>
						{/* Brand 4 */}
						<div className="bg-white rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 ">
							<img src="./images/brands/brand-stiiizy.png" alt="Brand logo" className="max-h-16" />
						</div>
						{/* Brand 5 */}
						<div className="bg-white rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 ">
							<img src="./images/brands/brand-jeeter.png" alt="Brand logo" className="max-h-16" />
						</div>
					</div>
				</div>

				{/* CTA Button */}
				<div className="text-center">
					<button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
						ORDER NOW
					</button>
				</div>
			</div>
		</section>
	);
};

export default FavoriteBrands;