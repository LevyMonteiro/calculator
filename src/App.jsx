import './styles/App.css'
import { Keyboard } from './components/keyboard'
import { calcData } from './context/calculatorData'
import { Display } from './components/display'

const App = () => {

  return (
    <div className='container'>
      <div className="calculator">
        <Display />
        <Keyboard calcData={ calcData }/>
      </div>
    </div>
  )
}

export default App