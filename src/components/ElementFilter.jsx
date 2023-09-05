import React, { useState , useEffect} from 'react';

const ElementFilter = (props) => {
  const [element, setElement] = useState('');

  const elementals = [
    'all',
    'bug',
    'dark',
    'dragon',
    'electric',
    'fairy',
    'fighting',
    'fire',
    'flying',
    'ghost',
    'grass',
    'ground',
    'ice',
    'normal',
    'poison',
    'psychic',
    'rock',
    'steel',
    'water',
  ];

  const Uppercase = (word) => {
    const response = word?.charAt(0).toUpperCase() + word?.slice(1);
    return response;
  };

  useEffect(()=>{
    SelectedElement(element)
  },[element])

  const SelectedElement = (e) => {
    props.onFilter(e);
  };

  return (
    <div className='flex flex-wrap mx-7 mb-7 px-3 '>
      {elementals?.map((elemental) => {
        return (
          <button
            type='button'
            className='border-2 border-white rounded-full px-3 py-1 m-1 shadow-lg flex flex-row gap-3 items-center active:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-blue-500 duration-300'
            key={elemental}
            onClick={()=>setElement(elemental)}
          >
            <div className={'w-5 h-5 rounded-full ' + elemental}></div>
            <div> {Uppercase(elemental)}</div>
          </button>
        );
      })}
      <div></div>
    </div>
  );
};

export default ElementFilter;
