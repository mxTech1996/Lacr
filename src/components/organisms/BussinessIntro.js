import { dataSite } from '@/data';
import React from 'react';

export default function BusinessConsultingIntro() {
  return (
    <section id='intro' className='bg-black text-white py-16 px-6'>
      {/* Top Stats Section */}
      <div className='max-w-6xl mx-auto text-center mb-16'>
        <p className='text-lg mb-4'>
          Our commitment to excellence is reflected in these key performance
          indicators, showcasing the trust and results we deliver to our
          clients.
        </p>
        <div className='flex flex-col md:flex-row justify-center gap-12'>
          <div>
            <h2 className='text-4xl font-bold text-[#F94F6D]'>35+</h2>
            <p>Completed Projects</p>
          </div>
          <div>
            <h2 className='text-4xl font-bold text-[#F94F6D]'>12+</h2>
            <p>Businesses Advised</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        <div className='relative'>
          <div className='text-[#F94F6D] absolute left-0 top-0 text-[100px] font-extrabold leading-none opacity-10'>
            CONSULTING
          </div>
          <img
            src={dataSite.image_hero2}
            alt='Consulting team working'
            className='rounded-lg relative z-10'
          />
        </div>
        <div>
          <h3 className='text-sm uppercase text-[#F94F6D] mb-2'>
            Welcome to [Your Consulting Firm]
          </h3>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            We Are the Experts in Optimizing Your Business Management
          </h2>
          <p className='mb-6 text-gray-300'>
            From startups to large corporations, we help structure, plan, and
            execute strategies that drive growth and profitability.
          </p>
          <button className='bg-[#F94F6D] text-white px-6 py-2 rounded-md hover:bg-[#e13c59] transition'>
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
