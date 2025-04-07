import React from 'react';

const DisclaimerFooter: React.FC = () => {
	const currentYear = new Date().getFullYear();
	const licenseNumber = "OCM-CAURD-24-000058";

	return (
		<footer className="bg-yellow-400 text-black py-6 px-4">
			<div className="container mx-auto text-center text-xs leading-relaxed">
				<p className="mb-8 mx-auto md:w-5/6 font-[500] text-center">
					For use only by adults 21 years of age and older. Keep out of reach of children and pets.
					In case of accidental ingestion or overconsumption, contact the Poison Center at <a href="tel:1-800-222-1222" className="hover:underline font-medium">1-800-222-1222</a> or call 9-1-1.
					Please consume responsibly. Cannabis can impair concentration and coordination.
					Do not operate a vehicle or machinery under the influence of cannabis.
					Concerned about your cannabis use? Contact the New York State HOPELine by texting "HopeNY",
					calling <a href="tel:1-877-846-7369" className="hover:underline font-medium">1-877-8-HOPENY</a>,
					or visiting <a href="https://oasas.ny.gov/HOPELine" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">oasas.ny.gov/HOPELine</a>.

					{/* License Text */}
					<span className="block mt-4 font-medium"> {/* Slightly bolder font for the license */}
						License Number - {licenseNumber}
					</span>
				</p>

				{/* Copyright/Privacy Text - Inferring from faint text in image */}
				<p className="text-white text-[10px] uppercase tracking-wider opacity-80"> {/* Slightly darker text, very small, uppercase, subtle */}
					COPYRIGHT © {currentYear} ALL RIGHTS RESERVED | LEGACY DISPENSARY | <a href="/privacy-policy" className="hover:underline">PRIVACY POLICY</a>
				</p>
			</div>
		</footer>
	);
};

export default DisclaimerFooter;