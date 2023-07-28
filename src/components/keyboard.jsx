import '../styles/keyboard.css'

const Keyboard = ({ calcData }) => {
   
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
        />))
      }
    </div>
  )
}

export { Keyboard }