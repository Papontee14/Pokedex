import React from 'react';

const Header = () => {
  return (
    <div className='px-8 pt-5 pb-3 flex items-center bg-red-600'>
      <h1 className='text-6xl font-bold my-4 text-white font-mono'>Pokedex</h1>
      <img
        src='https://cdn.icon-icons.com/icons2/851/PNG/512/Pokedex_tool_icon-icons.com_67529.png'
        className='ml-5 w-16 h-16'
      />
    </div>
  );
};

export default Header;
