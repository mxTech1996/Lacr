'use client';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';

const events = dataSite.products;
export default function ProductsSection() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <section id='products' className='bg-black text-white py-12 px-4'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Our Products</h2>
        <div className='flex flex-col gap-8'>
          {events.map((event, index) => {
            const isInCart = validateProductInCart(event.id);
            const handleClick = () => {
              handleAddOrRemoveProduct(event.id);
            };

            return (
              <div
                key={index}
                className='flex flex-col md:flex-row bg-gray-900 rounded-lg overflow-hidden'
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className='w-full md:w-1/3 object-cover'
                />
                <div className='flex flex-row justify-between md:w-full p-6'>
                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold mb-2'>{event.name}</h3>
                    {/* <div className='flex items-center gap-2 mb-1'>
                    $ {event.price}
                  </div> */}

                    <div className='flex items-center gap-2 mb-4'>
                      {event.description}
                    </div>
                  </div>
                  <div className='bg-pink-600 p-4 rounded-lg text-center flex-1'>
                    <p className='text-sm'>Price</p>
                    <p className='text-2xl font-bold mb-2'>${event.price}</p>
                    <button
                      onClick={handleClick}
                      className={`${
                        isInCart ? 'bg-red-500' : 'bg-black'
                      } text-white px-4 py-2 rounded`}
                    >
                      {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
