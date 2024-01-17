export default function Display({ input, output, calcData }) {
  return (
    <div className='display'>
      <h1>Calculator</h1>
      <p className='calcData'>{calcData || output}</p>
      <h2 className='input'>{input}</h2>
    </div>
  );
}
