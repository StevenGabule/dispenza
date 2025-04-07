import Header from '@/components/layout/Header';
import '@/styles/globals.scss';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from './components/sections/ProductsSection';
import SocialMediaSection from './components/sections/SocialMediaSection';
import FAQSection from './components/sections/FAQSection';
import FavoriteBrands from './components/sections/FavoriteBrands';
import CustomerReviews from './components/sections/GoogleReviews';
import StoreInfoSection from './components/sections/StoreInfoSection';
import SubFooter from './components/layout/SubFooter';
import DisclaimerFooter from './components/sections/DisclaimerFooter';

function App() {

  return (
    <div className='min-h-screen flex flex-col bg-background'>
      <Header />

      <main className='flex-1'>
        <HeroSection />
       
        <ProductsSection />

        <SocialMediaSection />

        <FAQSection />

        <FavoriteBrands />

        <CustomerReviews />

        <StoreInfoSection />

        <SubFooter />

        <DisclaimerFooter />
      </main>
    </div>
  )
}

export default App
