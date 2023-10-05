import { useState } from 'react'

const Calculator = () => {
  const [display, setDisplay] = useState('')
  const numbers = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]
  
  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(display.replace('x', '*').replace('÷', '/'))
        
       setDisplay(result.toString().replace('*', 'x').replace('/', '÷'))
      } catch(err) {
        setDisplay('Error!!!')
      } 
    } else if (value === 'C') {
        setDisplay('')
    } else if (value === 'DEL') {
      setDisplay(display.slice(0, -1))
    } else if (value === '√') {
      const sqroot = Math.sqrt(parseFloat(display))
      setDisplay(sqroot.toString())
    }
    else {
        setDisplay(display + value)
    }
  }
  
  return (
    <div className="calculator flex flex-col h-auto w-96 bg-white">
      <div className="w-full h-32">
        <input className="w-full h-full text-4xl text-right  px-2 font-semibold" type="text" id="input" value={display} readOnly />
      </div>
      
      <div className="grid grid-cols-4 w-full">
        <button className="button" onClick={() => handleClick('C')}>C</button>  
        <button className="button" onClick={() => handleClick('DEL')}>DEL</button>  
        <button className="button" onClick={() => handleClick('%')}>%</button>  
        <button className="button" onClick={() => handleClick('÷')}>÷</button>  
        <button className="button" onClick={() => handleClick('7')}>7</button>  
        <button className="button" onClick={() => handleClick('8')}>8</button>  
        <button className="button" onClick={() => handleClick('9')}>9</button>  
        <button className="button" onClick={() => handleClick('x')}>x</button>  
        <button className="button" onClick={() => handleClick('4')}>4</button>  
        <button className="button" onClick={() => handleClick('5')}>5</button>  
        <button className="button" onClick={() => handleClick('6')}>6</button>  
        <button className="button" onClick={() => handleClick('-')}>-</button>  
        <button className="button" onClick={() => handleClick('1')}>1</button>  
        <button className="button" onClick={() => handleClick('2')}>2</button>  
        <button className="button" onClick={() => handleClick('3')}>3</button>  
        <button className="button" onClick={() => handleClick('+')}>+</button>  
        <button className="button" onClick={() => handleClick('√')}>√</button>  
        <button className="button" onClick={() => handleClick('.')}>.</button>  
        <button className="button" onClick={() => handleClick('0')}>0</button>  
        <button className="button bg-white text-gray-900" onClick={() => handleClick('=')}>=</button>  
      </div>
    </div>
  )
}

export default Calculator
