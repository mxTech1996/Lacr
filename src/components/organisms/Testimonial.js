import { dataSite } from '@/data';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = dataSite.references;

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 2 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 2
  );

  return (
    <section id='testimonials' className='bg-black text-white py-12 px-4'>
      <div className='max-w-6xl mx-auto text-center'>
        <h3 className='text-pink-500 uppercase text-sm mb-2'>Testimonials</h3>
        <h2 className='text-4xl font-bold mb-8'>What our clients say</h2>

        <div className='flex flex-col md:flex-row gap-6 justify-center items-stretch'>
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-1 border-2 rounded p-6 ${
                index === 0 ? 'border-pink-500' : 'border-gray-800'
              }`}
            >
              <p className='text-lg mb-4'>{testimonial.description}</p>
              <p className='text-pink-500'>{testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className='flex justify-center gap-4 mt-8'>
          <button
            onClick={prev}
            className='bg-pink-500 hover:bg-pink-600 p-2 rounded'
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={next}
            className='bg-pink-500 hover:bg-pink-600 p-2 rounded'
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
