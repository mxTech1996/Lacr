'use client';
import { useCart } from 'ecommerce-mxtech';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function StickyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { products } = useCart();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black' : 'bg-transparent absolute'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <span className='text-red-500 text-2xl font-bold'>
            LACR <span className='text-red-400'>ADMIN</span>
          </span>
        </div>
        <ul className='hidden md:flex gap-6 text-white font-semibold'>
          <a href='/#services'>Services</a>
          <a href='/#intro'>About Us</a>
          <a href='/#benefits'>Benefits</a>
          <a href='/#products'>Products</a>
          <a href='/#testimonials'>Testimonials</a>
        </ul>
        <div className='flex items-center gap-4'>
          <Link href={'/my-cart'} className='relative'>
            <FaShoppingCart className='text-red-500 text-2xl' />
            <span className='absolute -top-2 -right-2 bg-white text-red-500 text-xs rounded-full px-1'>
              {products.length}
            </span>
          </Link>
          <button
            onClick={() => (window.location.href = '/more-information')}
            className='bg-red-500 text-white px-4 py-2 rounded'
          >
            CONTACT US
          </button>
        </div>
      </div>
    </nav>
  );
}
