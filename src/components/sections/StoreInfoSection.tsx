import React from 'react';

const StoreInfoSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Store Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-green-700 mb-8 text-center md:text-left">STORE INFO</h2>
            
            <div className="max-w-md mx-auto md:mx-0">
              {/* Business Hours */}
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700">Monday – Thursday 9am – 9pm</p>
                  <p className="text-gray-700">Friday – Saturday 9am – 10pm</p>
                  <p className="text-gray-700">Sunday 10am – 6pm</p>
                </div>
              </div>
              
              {/* Address */}
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-700">1839 Central Ave. Colonie, NY 12205</p>
              </div>

              {/* Email */}
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-700">legacydispensers@gmail.com</p>
              </div>
              
              {/* Phone */}
              <div className="flex items-start mb-8">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-gray-700">(518) 387-3310</p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#menu" className="inline-block px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors uppercase tracking-wider text-sm">
                  View Menu
                </a>
                <a href="https://maps.google.com/?q=1839+Central+Ave.+Colonie,+NY+12205" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-white text-black font-medium rounded-full border-2 border-black hover:bg-gray-100 transition-colors uppercase tracking-wider text-sm">
                  Get Direction
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Google Map Image */}
          <div className="h-[400px] md:h-full rounded-lg overflow-hidden shadow-lg">
            {/* Google Maps static image */}
            <img 
              src="./images/common/google-map-store-location.png" 
              alt="Store Location Map" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreInfoSection;