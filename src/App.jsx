import { useState } from 'react';
import Keyboard from './components/Keyboard';
import Display from './components/Display';
import Footer from './components/Footer';

const operators = ['Delete', '/', '*', '+', '-', '='];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export default function App() {
  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('');
  const [calcData, setCalcData] = useState('');

  const handleInput = (value) => {
    const handleSubmit = () => {
      setOutput(`${calcData}${input}`);
      setCalcData('');
      const total = eval(`${calcData}${input}`);
      setInput(total);
    };

    const handleClear = () => {
      setInput('0');
      setOutput('');
      setCalcData('');
    };

    const handleBackspace = () => {
      if (input === '0' || input.length === 1) {
        setInput('0');
      } else if (input.length) {
        setInput(input.slice(0, -1));
        setCalcData(calcData.slice(0, -1));
      }
    };

    const handleNumber = (value) => {
      if (operators.some((op) => op == input)) {
        setCalcData(`${calcData}${input}`);
        setInput(`${value}`);
      } else if (input === '0' && value === 0) {
        setInput('0');
      } else if (input === '0' && value !== 0) {
        setInput(`${value}`);
      } else {
        setInput(`${input}${value}`);
      }
    };

    const handleOperator = (value) => {
      if (input !== '0' || calcData.length) {
        if (operators.some((op) => input === op)) {
          setInput(value);
        } else {
          setCalcData(`${calcData}${input}`);
          setInput(value);
        }
      } else if (input === '0') {
        setInput('0');
      } else {
        setCalcData(`${calcData}${input}`);
      }
    };

    const handleDecimal = () => {
      if (!calcData.length && input === '0') {
        setInput('0.');
      } else if (input.split('').some((elm) => elm === '.')) {
        setInput(input);
      } else if (operators.find((op) => op === input)) {
        setCalcData(`${calcData}${input}`);
        setInput('0.');
      } else {
        setInput(`${input}.`);
      }
    };

    const operator = operators.find((op) => op === value);
    const number = numbers.find((num) => num === value);

    switch (value) {
      case '=':
      case 'Enter':
        handleSubmit();
        break;
      case 'Delete':
        handleClear();
        break;
      case 'Backspace':
        handleBackspace();
        break;
      case number:
        handleNumber(value);
        break;
      case operator:
        handleOperator(value);
        break;
      case '.':
      case ',':
        handleDecimal();
        break;
    }
  };

  return (
    <div id='app'>
      <div
        id='calculator'
        className='w-72 xs:w-[340px] sm:w-96 flex flex-col justify-center items-center bg-neutral-900 px-3 py-4 xs:px-4 xs:py-6 rounded-xl'
      >
        <Display input={input} calcData={calcData} output={output} />
        <Keyboard handleInput={handleInput} />
      </div>
      <Footer />
    </div>
  );
}
