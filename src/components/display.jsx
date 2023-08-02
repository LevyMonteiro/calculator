import '../styles/display.css'

const Display = ({ input, output }) => {
  return (
    <div className="display">
      <h1>Calculator</h1>
      <p className="output">{output}</p>
      <h2 className="input">{input}</h2>
    </div>
  )
}

export { Display }