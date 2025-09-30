import { useState } from 'react'
import './App.css'

function App() {
  const[output, setOutput] = useState('');
  const[isResultShown, setIsResultShown] = useState(false);

  const handleNumberClick = (value) => {
    if(output === '' && value === '00')
      return;
    
    if(isResultShown)
    {
        setOutput(value)
        setIsResultShown(false);
    }
    else
    {
      setOutput(prevOutput => prevOutput + value);
    }
  }

  const handleOperatorClick = (value) => {
    if(output === '' && (value === '+' || value === '*' || value === '/' || value === '%'))
      return;

    if(isResultShown)
    {
      setOutput(prev => prev + value)
      setIsResultShown(false)
    }
    else
    {
      setOutput(prevOutput => prevOutput + value);
      setIsResultShown(false)
    }
  }

  const dltAll = () => {
    setOutput('')
    setIsResultShown(false)
  }

  const dlt = () => {
    setOutput(output.slice(0, -1))
    setIsResultShown(false)
  }     

  const result = () => {
    try {
      const finalResult = eval(output).toString();
      setOutput(finalResult)
      setIsResultShown(true)
      // setOutput('')
    } catch (error) {
      setOutput('Error')
    }
  }

  return (
    <>
      <div className='w-full h-screen bg-green-500 justify-center flex items-center min-h-screen'>
        <div className='p-5 h-[490px] w-[350px] rounded-xl bg-black'>
          <div className='h-[60px] w-full bg-gray-300 focus:outline-none rounded-xl flex items-center font-semibold text-3xl p-2 justify-end'>
            {output}  
          </div>
          <div className='text-black grid grid-cols-4 grid-rows-5 text-3xl gap-y-2 gap-x-5 my-3 items-center jutsify-center'>
            <span className='h-[70px] w-[70px] text-xl rounded-full text-white font-semibold bg-[#212121] flex justify-center items-center cursor-pointer'
            onClick={dltAll}
            >AC</span>
            <span className='h-[70px] w-[70px] text-xl rounded-full text-white font-semibold bg-[#212121] flex justify-center items-center cursor-pointer'
            onClick={dlt}
            >C</span>
            <span className='h-[70px] w-[70px] text-xl rounded-full text-white font-semibold bg-[#212121] flex justify-center items-center cursor-pointer'
            onClick={() => handleOperatorClick('%')}
            >%</span>
            <span className='h-[70px] w-[70px] text-3xl rounded-full text-white font-semibold bg-[#212121] flex justify-center items-center cursor-pointer'
            onClick={() => handleOperatorClick('/')}
            >÷</span>
            <span className='h-[70px] w-[70px] text-2xl rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
            onClick={() => handleNumberClick('7')}
            >7</span>
            <span className='h-[70px] w-[70px] text-2xl rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
            onClick={() => handleNumberClick('8')}
            >8</span>
            <span className='h-[70px] w-[70px] text-2xl rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => handleNumberClick('9')}
            >9</span>
            <span className='h-[70px] w-[70px] text-2xl rounded-full text-white font-semibold bg-[#212121] flex justify-center items-center cursor-pointer'
            onClick={() => handleOperatorClick('*')}
            >×</span>
            <span className='h-[70px] w-[70px] text-2xl rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => handleNumberClick('4')}
            >4</span>
            <span className='h-[70px] w-[70px] text-2xl rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => handleNumberClick('5')}
            >5</span>
            <span className='h-[70px] w-[70px] text-2xl rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => handleNumberClick('6')}
            >6</span>
            <span className='h-[70px] w-[70px] text-3xl rounded-full text-white font-semibold bg-[#212121] flex justify-center items-center cursor-pointer'
            onClick={() => handleOperatorClick('-')}
            >-</span>
            <span className='h-[70px] w-[70px] text-2xl rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => handleNumberClick('1')}
            >1</span>
            <span className='h-[70px] w-[70px] text-2xl rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => handleNumberClick('2')}
            >2</span>
            <span className='h-[70px] w-[70px] text-2xl rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => handleNumberClick('3')}
            >3</span>
            <span className='h-[70px] w-[70px] text-3xl rounded-full text-white font-semibold bg-[#212121] flex justify-center items-center cursor-pointer'
            onClick={() => handleOperatorClick('+')}
            >+</span>
            <span className='h-[70px] w-[70px] text-2xl rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => handleNumberClick('00')}
            >00</span>
            <span className='h-[70px] w-[70px] text-2xl rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => handleNumberClick('0')}
            >0</span>
            <span className='h-[70px] w-[70px] text-2xl rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => handleNumberClick('.')}
            >.</span>
            <span className='h-[70px] w-[70px] text-3xl rounded-full text-white font-semibold bg-orange-500 flex justify-center items-center cursor-pointer'
            onClick={result}
            >=</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
