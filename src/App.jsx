import { useState } from 'react'
import './styles/App.css'
import { Keyboard } from './components/keyboard'
import { calcData } from './context/calculatorData'

const App = () => {

  return (
    <div className='container'>
      <div className="calculator">
        <Keyboard calcData={ calcData }/>
      </div>
    </div>
  )
}

export default App