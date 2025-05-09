import React from 'react';

const BBBAccreditation: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-8 border-t border-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* BBB Logo and Accredited Business */}
        <div className="flex-shrink-0">
          <img 
            src="./images/bbb-accredited.png" 
            alt="BBB Accredited Business" 
            className="h-16 md:h-20" 
          />
        </div>
        
        {/* Customer Review Rating */}
        <div className="flex flex-col">
          <h3 className="text-gray-600 text-lg mb-2">Customer Review Rating</h3>
          <div className="flex items-center mb-1">
            {/* Star Rating */}
            <div className="flex mr-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  className="w-6 h-6 text-green-500" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            {/* Rating Number */}
            <span className="text-2xl font-bold text-gray-800">4.99/5</span>
          </div>
          
          {/* Review Count */}
          <p className="text-gray-500 text-sm">
            Average of <span className="font-medium">129</span> Customer Reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default BBBAccreditation;