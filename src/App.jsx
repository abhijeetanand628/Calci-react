import { useState } from 'react'
import './App.css'

function App() {
  const[output, setOutput] = useState('');

  const dltAll = () => {
    setOutput('')
  }

  const dlt = () => {
    setOutput(output.slice(0, -1))
  }

  const result = () => {
    try {
      const finalResult = eval(output).toString();
      setOutput(finalResult)
    } catch (error) {
      setOutput('Error')
    }
  }

  return (
    <>
      <div className='w-full h-screen bg-black justify-center flex items-center min-h-screen'>
        <div className='p-5 h-[490px] w-[380px] rounded-xl bg-gray-300'>
          <div className='h-[60px] w-full bg-white focus:outline-none rounded-xl flex items-center font-semibold text-3xl p-2 justify-end'>
            {output}  
          </div>
          <div className='text-black grid grid-cols-4 grid-rows-5 text-3xl gap-y-2 my-3 items-center jutsify-center'>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#212121] flex justify-center items-center cursor-pointer'
            onClick={dltAll}
            >AC</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#212121] flex justify-center items-center cursor-pointer'
            onClick={dlt}
            >C</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#212121] flex justify-center items-center cursor-pointer'
            onClick={() => setOutput(prevOutput => prevOutput + '%')}
            >%</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#212121] flex justify-center items-center cursor-pointer'
            onClick={() => setOutput(prevOutput => prevOutput + '/')}
            >÷</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
            onClick={() => setOutput(prevOutput => prevOutput + 7)}
            >7</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
            onClick={() => setOutput(prevOutput => prevOutput + 8)}
            >8</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => setOutput(prevOutput => prevOutput + 9)}
            >9</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#212121] flex justify-center items-center cursor-pointer'
            onClick={() => setOutput(prevOutput => prevOutput + '*')}
            >×</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => setOutput(prevOutput => prevOutput + 4)}
            >4</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => setOutput(prevOutput => prevOutput + 5)}
            >5</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => setOutput(prevOutput => prevOutput + 6)}
            >6</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#212121] flex justify-center items-center cursor-pointer'
            onClick={() => setOutput(prevOutput => prevOutput + '-')}
            >-</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => setOutput(prevOutput => prevOutput + 1)}
            >1</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => setOutput(prevOutput => prevOutput + 2)}
            >2</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => setOutput(prevOutput => prevOutput + 3)}
            >3</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#212121] flex justify-center items-center cursor-pointer'
            onClick={() => setOutput(prevOutput => prevOutput + '+')}
            >+</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => setOutput(prevOutput => prevOutput + '00')}
            >00</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => setOutput(prevOutput => prevOutput + 0)}
            >0</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-[#414141] flex justify-center items-center cursor-pointer'
             onClick={() => setOutput(prevOutput => prevOutput + '.')}
            >.</span>
            <span className='h-[70px] w-[70px] rounded-full text-white font-semibold bg-orange-500 flex justify-center items-center cursor-pointer'
            onClick={result}
            >=</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
