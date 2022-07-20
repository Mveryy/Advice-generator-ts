import axios from 'axios'
import { useEffect, useState } from 'react'

type TAdvice = {
  id: number,
  advice: string
}

export default function App() {
  const [advice, setAdvice] = useState<TAdvice>()

  async function getData() {
    const res = await axios.get('https://api.adviceslip.com/advice')
    setAdvice(res.data.slip)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-[#323a49] w-[90%] max-h-[300px] rounded-2xl text-center h-fit flex flex-col justify-center items-center px-6 relative sm:w-fit sm:max-w-sm sm:scale-125">
        <h1 className='text-[#52ffa8] font-medium text-xs mt-8 uppercase tracking-widest'>Advice #{advice?.id}</h1>
        <p className='text-[#cee3e9] break-words font-bold my-4 text-xl'><q>{advice?.advice}</q></p>
        <img src="./pattern-divider-mobile.svg" className='mb-6 sm:hidden' />
        <img src="./pattern-divider-desktop.svg" className='mb-6 hidden sm:block' />
        <button
          className='bg-[#52ffa8] w-12 h-12 rounded-full 
          sticky bottom-0 -mb-6 hover:scale-110 transition-all'
          onClick={getData}>
          <img src="./icon-dice.svg" alt="dice image" className='m-auto scale-90' />
        </button>
      </div>
    </div>
  )
}
