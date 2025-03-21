import React from 'react';
import Arrow from '../assets/Arrow.svg';
function Entry() {
  return (
    <div className='relative'>
      <div className='bottom-0  mx-2  bg-white py-6 right-0 left-0 fixed flex items-center justify-center  '>
        <div className='w-full lg:w-1/2 flex justify-between ring-1 ring-gray-200 rounded-2xl p-3 shadow-sm '>
          <input
            type='text'
            className=' w-64 md:w-2xl  placeholder:text-gray-400 ring-0'
            placeholder='Ask anything'
          />
          <button className='rounded-full flex items-center justify-center size-9 bg-black'>
            <img src={Arrow} alt='' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Entry;
