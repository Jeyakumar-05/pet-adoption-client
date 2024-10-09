import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import myim from '../assests/img/adopt-a-pet.jpg';
import dogImage from '../assests/img/doggoquote.jpg';
import dogsearch from '../assests/img/search.png';
import hours from '../assests/img/24.png';
import pethomee from '../assests/img/pethomee.png';
import { Search, MessageSquareText, PawPrint } from 'lucide-react';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <div>
        {/* Section 1 */}
        <div className='h-screen w-full'>
          <img src={myim} className='h-[80%] w-full justify-center' alt="Adopt a Pet"></img>
        </div>

        {/* Section 2 */}
        <div className="bg-gray-100 py-16 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Re-Home and Adopt a Pet
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            Every Pet Deserves a Good Home. <span className="font-semibold text-gray-800">#Adoptlove</span>
          </p>
          <a href="/adopt" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow">
            Adopt a pet
          </a>
        </div>

        {/* Section 3 */}
        <div className="py-16 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img
                  src={dogImage}
                  alt="Adopt me"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Your Pet Adoption Journey With ThePetNest
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <img
                      src={dogsearch}
                      alt="Search Pet"
                      className="w-12 h-12 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Search Pet
                      </h3>
                      <p className="text-gray-600">
                        Adopt a dog or cat who's right for you. Simply enter your
                        city above to start your search.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <img
                      src={hours}
                      alt="Connect"
                      className="w-12 h-12 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Connect
                      </h3>
                      <p className="text-gray-600">
                        Once you find a pet, click "Adopt" and fill the form to adopt the pet you like.
                        Contact us to learn more about how to meet and adopt the pet.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <img
                      src={pethomee}
                      alt="AdoptLove"
                      className="w-12 h-12 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        AdoptLove
                      </h3>
                      <p className="text-gray-600">
                        The rescue or pet parents will walk you through their
                        adoption process. Prepare your home for the arrival of your
                        fur baby to help them adjust to their new family.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <h1 className="text-3xl font-bold text-gray-800 text-center py-1">
          How it works?
        </h1>

        <div className="flex justify-around items-center text-center py-1">
          <div className="flex flex-col items-center">
            <div className="text-4xl py-2">
              <Search className="h-10 w-10" />
            </div>
            <p className="mt-2 font-bold py-2">Search</p>
            <p className="text-sm">Simply enter your city and start your search</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-4xl py-2">
              <MessageSquareText className="h-10 w-10" />
            </div>
            <h2 className="font-bold py-2">Meet</h2>
            <p className="text-sm">Schedule your appointment to meet the pet you love</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-4xl py-2">
              <PawPrint className="h-10 w-10" />
            </div>
            <h2 className="font-bold py-2">Adopt</h2>
            <p className="text-sm">Finally adopt the dog or cat you love</p>
          </div>
        </div>

        {/* Section 4 - Accordion */}
        <div className="flex items-center justify-center h-[100%] bg-white px-4 pt-16">
  <div className="max-w-screen-xl mx-auto w-full md:w-2/3 lg:w-1/2">
    <div className="space-y-8">
      <div className="border-b border-gray-300 py-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(1)}>
          <h3 className="text-lg font-semibold text-gray-800">Why Should You Adopt a Dog or Cat?</h3>
          <span className={`text-gray-500 text-xl transition-transform transform ${activeIndex === 1 ? 'rotate-45' : ''}`}>
            {activeIndex === 1 ? '-' : '+'}
          </span>
        </div>
        {activeIndex === 1 && (
          <p className="text-gray-700 mt-2">
            Pet adoption is becoming the preferred way to find a new pet. Adoption will always be more convenient than buying from a pet shop or litter, bringing less stress and more savings!
          </p>
        )}
      </div>

      <div className="border-b border-gray-300 py-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(2)}>
          <h3 className="text-lg font-semibold text-gray-800">What is the fee to adopt a pet?</h3>
          <span className={`text-gray-500 text-xl transition-transform transform ${activeIndex === 2 ? 'rotate-45' : ''}`}>
            {activeIndex === 2 ? '-' : '+'}
          </span>
        </div>
        {activeIndex === 2 && (
          <p className="text-gray-700 mt-2">
            No, there is no fee for pet adoption on <a href="#" className="text-blue-600 underline">ThePawNest</a>, However, if you adopt from a different city, the pet owner/rescuer may ask for travel charges. If someone asks for additional fees, you can write to us <a href="/contact" className="text-blue-600 underline">here</a>.
          </p>
        )}
      </div>

      <div className="border-b border-gray-300 py-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(3)}>
          <h3 className="text-lg font-semibold text-gray-800">How old do I need to be to adopt a pet?</h3>
          <span className={`text-gray-500 text-xl transition-transform transform ${activeIndex === 3 ? 'rotate-45' : ''}`}>
            {activeIndex === 3 ? '-' : '+'}
          </span>
        </div>
        {activeIndex === 3 && (
          <p className="text-gray-700 mt-2">
            You need to be at least 18 years old to adopt a pet.
          </p>
        )}
      </div>

      <div className="border-b border-gray-300 py-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(4)}>
          <h3 className="text-lg font-semibold text-gray-800">Can you return an adopted pet?</h3>
          <span className={`text-gray-500 text-xl transition-transform transform ${activeIndex === 4 ? 'rotate-45' : ''}`}>
            {activeIndex === 4 ? '-' : '+'}
          </span>
        </div>
        {activeIndex === 4 && (
          <p className="text-gray-700 mt-2">
            Yes, if the adoption doesn't work out, you can return the pet for re-adoption.
          </p>
        )}
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default Home;