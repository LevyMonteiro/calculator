export default function Display({ input, output, calcData }) {
  return (
    <div id='Display' className='w-full flex flex-col gap-1 p-2'>
      <h1 className='text-2xl xs:text-3xl text-center font-bold relative -top-[12px]'>
        Calculator
      </h1>
      <p className='min-h-6 text-end text-yellow opacity-85'>
        {calcData || output}
      </p>
      <h2 className='text-end text-2xl'>{input}</h2>
    </div>
  );
}
