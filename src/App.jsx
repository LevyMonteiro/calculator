import './styles/App.css'
import { useState } from 'react'
import { Keyboard } from './components/keyboard'
import { Display } from './components/display'
import { Footer } from './components/footer'

const App = () => {

  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('');
  const [calcData, setCalcData] = useState('')
    
  const handleSubmit = () => {

  }
  
  const handleClear = () => {
  
  }

  const handleBackspace = () => {

  }
  
  const handleNumber = (value) => {
  
  }
  
  const handleOperator = (value) => {
  
  }
  
  const handleDecimal = () => {
  
  }

  const handleInput = (value) => {
    
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