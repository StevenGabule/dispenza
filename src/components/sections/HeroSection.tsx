import { Button } from '../ui/button';

const HeroSection = () => {
  const backgroundImagePath = '/images/backgrounds/hero-for-homepage.jpg';
  const cloudImagePath = '/images/backgrounds/hero-for-homepage-clouds.jpg';

  return (
    <section className="relative max-h-[1920px] w-full py-[15%]">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImagePath}')` }}
        aria-hidden="true"
      />

      <img src={cloudImagePath} alt="" className="absolute bottom-0 left-0 w-full h-auto md:h-1/3 lg:h-1/2 object-cover pointer-events-none" />

      {/* Content Container */}
      <div className="relative flex h-full items-center justify-center text-center pt-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <h1 className="mb-4 md:mb-6 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-wide text-white">
              WELCOME TO
              <br />
              LEGACY DISPENSARY
            </h1>
            <p className="mb-8 text-base font-normal tracking-wide text-white hidden md:block">
              YOUR PREMIER CANNABIS DESTINATION!
            </p>
            <Button variant="order" size="order" className="px-6 hidden md:inline-block">
              ORDER NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;