import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { FaYelp, FaTiktok, FaFacebookF, FaYoutube } from "react-icons/fa";

const SubFooter: React.FC = () => {
	const address = {
		line1: '1839 Central Ave.',
		line2: 'Colonie, NY 12205',
	};
	const contact = {
		phone: '123-456-789',
		email: 'legacydispensers@gmail.com',
	};
	const openHours = [
		{ days: 'Monday - Thursday', time: '9am - 9pm' },
		{ days: 'Friday - Saturday', time: '9am - 10pm' },
		{ days: 'Sunday', time: '10am - 6pm' },
	];
	const socialLinks = [
		{ label: 'Youtube', icon: FaYoutube, href: '#' },
		{ label: 'Instagram', icon: Instagram, href: '#' },
		{ label: 'Facebook', icon: FaFacebookF, href: '#' },
		{ label: 'Yelp', icon: FaYelp, href: '#' },
		{ label: 'Placeholder 2', icon: FaTiktok, href: '#' },
	];


	return (
		<footer className="bg-black text-gray-300 py-10 px-4">
			<div className="container mx-auto flex flex-wrap justify-between items-start gap-8">

				{/* Logo Section */}
				<div className="flex-shrink-0 mb-6 lg:mb-0 mx-auto lg:mx-0">
					{/* --- Replace with your actual Logo component or img tag --- */}
					<img
						src="./logo.png" // <-- Replace with your logo path
						alt="Legacy Dispensary Logo"
						className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover bg-white p-1" // Added bg-white and padding to mimic the image's white circle
					/>
					{/* If your logo already includes the white circle, remove bg-white and p-1 */}
				</div>

				{/* Info Sections Wrapper (for better flex wrapping) */}
				<div className="flex flex-wrap justify-between grow gap-8 text-sm">

					{/* Main Shop Section */}
					<div className="w-full sm:w-1/2 lg:w-auto text-center lg:text-left">
						<h4 className="text-base font-semibold uppercase tracking-wider text-white mb-4">Main Shop</h4>
						<div className="flex items-start justify-center lg:justify-start mb-2">
							<MapPin size={18} className="mr-3 mt-1 text-gray-400 flex-shrink-0" />
							<div>
								<p>{address.line1}</p>
								<p>{address.line2}</p>
							</div>
						</div>
					</div>

					{/* Contact Us Section */}
					<div className="w-full sm:w-1/2 lg:w-auto text-center lg:text-left">
						<h4 className="text-base font-semibold uppercase tracking-wider text-white mb-4">Contact Us</h4>
						<a href={`tel:${contact.phone}`} className="flex items-center justify-center lg:justify-start mb-2 hover:text-white transition-colors duration-200 group">
							<Phone size={18} className="mr-3 text-gray-400 flex-shrink-0 group-hover:text-white" />
							<span>{contact.phone}</span>
						</a>
						<a href={`mailto:${contact.email}`} className="flex items-center justify-center lg:justify-start mb-2 hover:text-white transition-colors duration-200 group">
							<Mail size={18} className="mr-3 text-gray-400 flex-shrink-0 group-hover:text-white" />
							<span>{contact.email}</span>
						</a>
					</div>

					{/* Open Hours Section */}
					<div className="w-full sm:w-1/2 lg:w-auto text-center lg:text-left">
						<h4 className="text-base font-semibold uppercase tracking-wider text-white mb-4">Open Hours</h4>
						<div className="flex items-start justify-center lg:justify-start">
							<Clock size={18} className="mr-3 mt-1 text-gray-400 flex-shrink-0" />
							<div>
								{openHours.map((item, index) => (
									<p key={index} className="mb-1 last:mb-0">
										{item.days}: {item.time}
									</p>
								))}
							</div>
						</div>
					</div>

					{/* Follow Us Section */}
					<div className="w-full sm:w-1/2 lg:w-auto text-center lg:text-left">
						<h4 className="text-base font-semibold uppercase tracking-wider text-white mb-4">Follow Us</h4>
						<div className="flex space-x-4 justify-center lg:justify-start">
							{socialLinks.map((link) => {
								const IconComponent = link.icon;
								return (
									<a
										key={link.label}
										href={link.href}
										aria-label={link.label}
										target="_blank" 
										rel="noopener noreferrer" 
										className="transition-colors duration-200 group bg-white text-black p-2 rounded-full"
									>
										<IconComponent size={20} />
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default SubFooter;