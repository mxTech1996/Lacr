import { dataSite } from '@/data';

export default function HeroSection() {
  const url = dataSite.image_hero;
  return (
    <section
      className='relative bg-cover bg-center min-h-screen flex items-center justify-start px-8'
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className='max-w-2xl text-left text-white'>
        <h1 className='text-5xl font-extrabold mb-6'>
          Run with Passion <br /> and Purpose
        </h1>
        <p className='text-lg mb-8'>
          Lace-up your shoes, set your goals, and let&apos;s run together
          towards a healthier, happier, and faster you.
        </p>
        <button className='bg-red-500 hover:bg-red-600 px-6 py-3 rounded text-white font-semibold'>
          LET&apos;S RUN
        </button>
      </div>
    </section>
  );
}
