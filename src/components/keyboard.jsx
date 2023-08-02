import '../styles/keyboard.css'

const Keyboard = ({ handleInput }) => {
  
  const calcData = [
    { id: "clear", value: "AC" },
    { id: 'backspace', value: "backspace", icon: '<i class="fa-solid fa-delete-left"></i>'},
    { id: "divide", value: "/", icon: '<i class="fa-solid fa-divide"></i>' },
    { id: "seven", value: 7 },
    { id: "eight", value: 8 },
    { id: "nine", value: 9 },
    { id: "multiply", value: "*", icon: '<i class="fa-solid fa-xmark"></i>' },
    { id: "four", value: 4 },
    { id: "five", value: 5 },
    { id: "six", value: 6 },
    { id: "subtract", value: "-", icon: '<i class="fa-solid fa-minus"></i>' },
    { id: "one", value: 1 },
    { id: "two", value: 2 },
    { id: "three", value: 3 },
    { id: "add", value: "+", icon: '<i class="fa-solid fa-plus"></i>' },
    { id: "zero", value: 0 },
    { id: "decimal", value: "." },
    { id: "equals", value: "=", icon: '<i class="fa-solid fa-equals"></i>' },
  ];
 
  return (
    <div className='keyboard'>
      {calcData.map(data => (
        <button
          className='key' 
          key={data.id}
          id={data.id}
          dangerouslySetInnerHTML={{ 
            __html: data.icon ? data.icon
            : data.value.toString()}
          }
          onClick={() => handleInput(data.value)}
        />))
      }
    </div>
  )
}

export { Keyboard }