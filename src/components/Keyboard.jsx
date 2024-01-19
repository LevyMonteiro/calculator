import { useEffect } from 'react';

export default function Keyboard({ handleInput }) {
  const calcData = [
    {
      id: 'clear',
      value: 'Delete',
      icon: 'AC',
      cs: 'col-span-2',
      bg: 'bg-red',
    },
    {
      id: 'backspace',
      value: 'Backspace',
      icon: '<i class="fa-solid fa-delete-left"></i>',
      bg: 'bg-red',
    },
    {
      id: 'divide',
      value: '/',
      icon: '<i class="fa-solid fa-divide"></i>',
      bg: 'bg-blue',
    },
    { id: 'seven', value: '7' },
    { id: 'eight', value: '8' },
    { id: 'nine', value: '9' },
    {
      id: 'multiply',
      value: '*',
      icon: '<i class="fa-solid fa-xmark"></i>',
      bg: 'bg-blue',
    },
    { id: 'four', value: '4' },
    { id: 'five', value: '5' },
    { id: 'six', value: '6' },
    {
      id: 'subtract',
      value: '-',
      icon: '<i class="fa-solid fa-minus"></i>',
      bg: 'bg-blue',
    },
    { id: 'one', value: '1' },
    { id: 'two', value: '2' },
    { id: 'three', value: '3' },
    {
      id: 'add',
      value: '+',
      icon: '<i class="fa-solid fa-plus"></i>',
      bg: 'bg-blue',
    },
    { id: 'zero', value: '0' },
    { id: 'decimal', value: '.' },
    {
      id: 'equals',
      value: '=',
      icon: '<i class="fa-solid fa-equals"></i>',
      cs: 'col-span-2',
      bg: 'bg-blue',
    },
  ];

  useEffect(() => {
    const handleKeydown = (event) => {
      handleInput(event.key);
    };
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });

  return (
    <div
      id='keyboard'
      className='w-full grid grid-cols-4 gap-1 sm:gap-[5px] text-base sm:text-xl'
    >
      {calcData.map((data) => (
        <button
          className={`${data.cs ? data.cs : ''} ${
            data.bg ? data.bg : 'bg-neutral-700'
          } flex justify-center items-center h-12 xs:h-14 sm:h-16 hover:brightness-110 rounded-[4px]`}
          key={data.id}
          id={data.id}
          dangerouslySetInnerHTML={{
            __html: data.icon ? data.icon : data.value,
          }}
          onClick={() => handleInput(data.value)}
        />
      ))}
    </div>
  );
}
