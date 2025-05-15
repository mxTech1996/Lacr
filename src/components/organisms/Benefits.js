import { dataSite } from '@/data';
import { FaPlay } from 'react-icons/fa';

export default function ConsultingBenefits() {
  return (
    <section id='benefits' className='bg-black text-white py-16 px-6'>
      <div className='max-w-full mx-auto text-center mb-12'>
        <h4 className='text-[#F94F6D] uppercase mb-2'>Consulting Benefits</h4>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          Key Benefits of Working with Our Business Consulting Firm
        </h2>
      </div>

      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-center'>
        {/* Left Benefits */}
        <div className='flex flex-col gap-16'>
          <div className='text-left'>
            <h3 className='font-bold text-xl mb-1'>
              01 {dataSite.info[0].title}
            </h3>
            <p className='text-gray-300'>{dataSite.info[0].description}</p>
          </div>
          <div className='text-left'>
            <h3 className='font-bold text-xl mb-1'>
              03 {dataSite.info[1].title}{' '}
            </h3>
            <p className='text-gray-300'>{dataSite.info[1].description}</p>
          </div>
        </div>

        {/* Center Image with Play Button */}
        <div className='relative flex justify-center items-center'>
          <div className='relative rounded-full overflow-hidden border-4 border-[#F94F6D]'>
            <img
              src={dataSite.services[0].image}
              alt='Consulting Video'
              className='rounded-full'
            />
          </div>
        </div>

        {/* Right Benefits */}
        <div className='flex flex-col gap-16'>
          <div className='text-left'>
            <h3 className='font-bold text-xl mb-1'>
              02 {dataSite.info[2].title}{' '}
            </h3>
            <p className='text-gray-300'>{dataSite.info[2].description}</p>
          </div>
          <div className='text-left'>
            <h3 className='font-bold text-xl mb-1'>
              04 {dataSite.info[3].title}{' '}
            </h3>
            <p className='text-gray-300'>{dataSite.info[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
