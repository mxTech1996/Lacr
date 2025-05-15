import { dataSite } from '@/data';
import { FaArrowRight } from 'react-icons/fa';

const newsItems = dataSite.services;

export default function ServicesSection() {
  return (
    <section id='services' className='bg-black text-white py-12 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-4xl font-bold'>Our Services</h2>
          {/* <button className='bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded'>
            View More
          </button> */}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className='relative group overflow-hidden rounded-lg shadow-md'
            >
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-64 object-cover transform group-hover:scale-105 transition'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end'>
                {/* <p className='text-pink-500 text-sm mb-2'>{item.date}</p> */}
                <h3 className='text-lg font-bold mb-2'>{item.title}</h3>
                <p className='text-pink-500 flex items-center gap-1 hover:underline'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
