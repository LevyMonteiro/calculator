import './styles/App.css'
import { useState } from 'react'
import { Keyboard } from './components/keyboard'
import { Display } from './components/display'
import { Footer } from './components/footer'

const operators = ["AC", "/", "x", "+", "-", "="];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {

  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('');
  const [calcData, setCalcData] = useState('')
    
  const handleSubmit = () => {

  }
  
  const handleClear = () => {
    setInput('0')
    setOutput('')
    setCalcData('')
  }

  const handleBackspace = () => {
    if(input === '0' || input.length === 1) {
      setInput('0')
    } else if(input.length) {
      setInput(input.slice(0, -1))
      setCalcData(calcData.slice(0, -1))
    }
  }
  
  const handleNumber = (value) => {
    
    if(!calcData.length) {
      setCalcData(`${value}`)
      setInput(`${value}`)
    } else if(input === '0' && value !== 0 ) {
      setInput(`${value}`)
      setCalcData(`${value}`)
    } else if(value === 0 && (calcData === '0' || input === '0')) {
      setCalcData(`${calcData}`)
    } else {
      setInput(`${input}${value}`)
      setCalcData(`${calcData}${value}`)
    }
  }
  
  const handleOperator = (value) => {
  
  }
  
  const handleDecimal = () => {
  
  }

  const handleInput = (value) => {
    
    const operator = operators.find(op => op === value)
    const number = numbers.find(num => num === value)

    switch (value) {
      case '=': 
        handleSubmit();
        break;
      case 'AC':
        handleClear();
        break;
      case 'backspace':
        handleBackspace();
        break;
      case number:
        handleNumber(value);
        break;
      case operator:
        handleOperator(value);
        break;
      case '.':
        handleDecimal();
        break;
    }
  }

  return (
    <div className='container'>
      <div className="calculator">
        <Display input={input} output={output} />
        <Keyboard handleInput={handleInput}/>
      </div>
      <Footer />
    </div>
  )
}

export default App