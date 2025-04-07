import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import Logo from '@/assets/logo.png';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About Us" },
		{ href: "/education", label: "Education" },
		{ href: "/blog", label: "Blog" },
		{ href: "/events", label: "Events" },
		{ href: "/community", label: "Community" },
		{ href: "/contact-us", label: "Contact Us" },
	];
	const closeMenu = () => {
		setIsMenuOpen(false);
	}

	return (
		<header className={`absolute top-0 left-0 z-50 w-full transition-colors duration-300 ${isMenuOpen ? 'bg-gray-950' : 'bg-gray-950/30'}`}>
			<div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
				{/* Logo */}
				<div className="flex-shrink-0">
					<a href="/" onClick={closeMenu}>
						<img src={Logo} alt="Logo" className='w-[72px] h-auto' />
					</a>
				</div>
				<nav className="hidden md:flex space-x-8">
					{navLinks.map((link) => (
						<a
							key={link.label} href={link.href}
							className='transition-colors hover:text-lime-400 uppercase text-white font-base font-semibold tracking-wide'>
							{link.label}
						</a>
					))}
				</nav>

				{/* Order now button */}
				{/* Desktop Order now button */}
				<div className="hidden md:flex flex-shrink-0 ml-4"> {/* Prevent shrinking */}
					{/* Pass your actual variant/size props */}
					<Button variant={'order'} size={'order'}>Order Now</Button>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden flex items-center">
					<button
						className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-lime-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500' // Added focus ring
						onClick={toggleMenu}
						aria-label='Toggle Menu'
						aria-expanded={isMenuOpen} // Indicate state for screen readers
					>
						<span className="sr-only">Open main menu</span> {/* For screen readers */}
						{isMenuOpen ? (
							<X className="block h-6 w-6" aria-hidden="true" />
						) : (
							<Menu className="block h-6 w-6" aria-hidden="true" />
						)}
					</button>
				</div>
			</div>

			<div
				className={`absolute left-0 top-full w-full bg-gray-950 md:hidden transition-all duration-300 ease-in-out transform ${isMenuOpen
						? 'opacity-100 translate-y-0'
						: 'opacity-0 -translate-y-5 pointer-events-none' // Start slightly up and fade out
					}`}
			>
				<div className="container mx-auto py-6 px-4 sm:px-6">
					<nav className="flex flex-col items-center space-y-5"> {/* Increased spacing */}
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className='text-base font-medium transition-colors hover:text-lime-400 text-white uppercase text-center block w-full py-2' // block ensures full width clickable area, added padding
								onClick={closeMenu} // Close menu when a link is clicked
							>
								{link.label}
							</a>
						))}
						<Button
							variant={'order'}
							size={'order'}
							className='w-full max-w-xs mt-4 uppercase' // Full width button (constrained)
							onClick={closeMenu}
						>
							Order Now
						</Button>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header;