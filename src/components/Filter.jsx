import React, { useState } from 'react';

const Filter = (props) => {
  const [text, setText] = useState('');

  const TextChange = (e) => {
    setText(e.target.value);
  };

  const Search = () => {
    props.onSubmit(text.toLowerCase().trim());
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.onSubmit(text.toLowerCase().trim());
    }
  };
  return (
    <div className='m-7 px-3 w-3/12'>
      <div className='py-2 text-2xl font-bold w-48'>Name or ID</div>
      <div className='mb-3'>
        <div className='relative mb-4 flex w-full flex-row items-stretch'>
          <input
            type='search'
            className='m-0 block w-80 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200'
            placeholder='Search'
            aria-label='Search'
            aria-describedby='button-addon2'
            onChange={TextChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className='input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200'
            id='basic-addon2'
            onClick={Search}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
