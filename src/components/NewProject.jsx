import React from 'react';

const NewProject = () => {
  return (
    <div className=' my-24 mx-10 flex flex-col space-y-6 items-center *:text-left *:text-sm *:font-light justify-center '>
      <button className='px-5 rounded-2xl py-3 bg-gray-100 max-w-lg'>
        We need to manage employees in different companies, track their roles,
        and log their activity.
      </button>
      <button className='px-5 rounded-2xl py-3 max-w-lg'>
        Got it! Let’s start with a Users table to store employee details.
      </button>
    
    </div>
  );
};

export default NewProject;
