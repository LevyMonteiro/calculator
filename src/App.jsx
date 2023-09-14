import './styles/App.css'
import { useState } from 'react'
import { Keyboard } from './components/keyboard'
import { Display } from './components/display'
import { Footer } from './components/footer'

const operators = ["AC", "/", "*", "+", "-", "="];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {

  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('');
  const [calcData, setCalcData] = useState('')
  
  const handleInput = (value) => {
     
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
      if(operators.some(op => op == input)) {
        setCalcData(`${calcData}${input}`)
        setInput(`${value}`)
      } else {
        if (input === '0' && value === 0) {
          setInput('0')
        } else if(input === '0' && value !== 0 ) {
          setInput(`${value}`)
        } else {
          setInput(`${input}${value}`)
        }
      }
    }
          
    const handleOperator = (value) => {
    
    }
    
    const handleDecimal = () => {
      if(!calcData.length || input === '0') {
        setInput(`0${value}`)
        setCalcData(`0${value}`)
      } else if(input.split('').some(elm => elm === value)) {
        setInput(input)
        setCalcData(calcData)
      }
    }

  
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
        <Display input={input} calcData={calcData} />
        <Keyboard handleInput={handleInput}/>
      </div>
      <Footer />
    </div>
  )
}

export default App