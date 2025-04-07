import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
// FAQ data
const faqs: FaqItem[] = [
  {
    id: "item-1",
    question: "How old do you have to be to enter?",
    answer: "You must 21+ older or 18+ with a State of California issued Medical Card that is verifiable. All customers must have a valid government issued id."
  },
  {
    id: "item-2",
    question: "Do you offer in-store pickup or delivery?",
    answer: "Yes, we offer both in-store pickup and delivery services. Our delivery service is available within a 15-mile radius of our store locations."
  },
  {
    id: "item-3",
    question: "What forms of payment do you accept?",
    answer: "We accept cash, debit cards, and contactless payment options. Unfortunately, due to federal regulations, we cannot accept credit cards at this time."
  },
  {
    id: "item-4",
    question: "How do I pay for my online order?",
    answer: "You can pay for your online order at the time of pickup or delivery. We also offer secure online payment options through our verified payment partners."
  },
  {
    id: "item-5",
    question: "How can I reach a budtender?",
    answer: "You can reach a budtender by calling our store directly, using the chat feature on our website, or by visiting us in person during business hours."
  },
  {
    id: "item-6",
    question: "Do you have a price match policy?",
    answer: "Yes, we offer price matching on identical products from licensed dispensaries. Just show us the competitor's current advertised price, and we'll match it."
  }
];

const FAQSection: React.FC = () => {
  return (
    <div className=" bg-white py-20 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="order-1 md:order-2 grid grid-cols-3 gap-5 items-start content-start">
            {/* Image 1 Container */}
            <div
              className="rounded-full bg-[rgb(207,104,0)] flex flex-col min-h-[150px] overflow-hidden self-end shadow-lg relative"
              style={{
                boxShadow: '0 6px 20px -5px rgba(0,0,0,0.2)',
                filter: 'drop-shadow(0 15px 8px rgba(207,104,0,0.4))'
              }}>
              <img
                src="./images/faqs/faq-pic1.png"
                alt="Decorative image 1"
                className="w-full h-full rounded-full object-cover"
                style={{ transform: 'translateY(10%)' }}
              />
            </div>

            <div
              className='flex flex-col gap-5 w-full'
              style={{ transform: 'translateY(-10%)' }}>
              {/* Image 2.1 Container */}
              <div className="bg-[#CF6800] rounded-full pt-[40%] flex items-center justify-center overflow-hidden"
                style={{
                  boxShadow: '0 6px 20px -5px rgba(0,0,0,0.2)',
                  filter: 'drop-shadow(0 15px 8px rgba(207,104,0,0.4))'
                }}>
                <img
                  src="./images/faqs/faq-pic2.png"
                  alt="Decorative image 2"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Image 2.2 Container */}
              <div className="bg-[#CF6800] rounded-full pt-[10%] overflow-hidden w-full" style={{
                boxShadow: '0 6px 20px -5px rgba(0,0,0,0.2)',
                filter: 'drop-shadow(0 15px 8px rgba(207,104,0,0.4))'
              }}>
                <img
                  src="./images/faqs/faq-pic3.png"
                  alt="Decorative image 2"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className="bg-[#CF6800] rounded-full pt-[30%] self-end mb-3 overflow-hidden w-full relative"
              style={{
                boxShadow: '0 6px 20px -5px rgba(0,0,0,0.2)',
                filter: 'drop-shadow(0 15px 8px rgba(207,104,0,0.4))'
              }}>
              <img
                src="./images/faqs/faq-pic4.png"
                alt="Decorative image 3"
                className=" w-full h-auto rounded-full"
              />
            </div>
          </div>

          <div className="order-2 md:order-1 col-span-2">
            <h2 className="text-3xl font-bold text-center text-orange-700 mb-10 md:mb-12">
              FAQS
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-3"
              defaultValue="item-1" // Keep the first item open by default like the image
            >
              {faqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-2 border-[#CF6800] rounded-lg overflow-hidden data-[state=open]:bg-[#CF6800] data-[state=open]:border-orange-600 transition-colors"
                >
                  <AccordionTrigger className="flex justify-between items-center w-full px-4 py-3 text-left font-semibold text-[#CF6800] bg-white hover:no-underline data-[state=open]:bg-orange-500 data-[state=open]:text-white transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2 pb-4 text-white bg-[#CF6800] data-[state=open]:text-white transition-colors">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection