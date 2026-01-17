import React, { useState } from 'react'
import Button from './Components/Button'
import {
  ToastContainer, toast
} from 'react-toastify';
const App = () => {

  const [count, setCount] = useState(0)
  const handleClick = (type) => {
    if (type === 'dec' && count === 0) {
      toast("Count Cannot go below Zero")
      return
    }
    setCount((prev => {
      if (type === 'inc') return prev + 1;
      if (type === 'dec') return prev - 1
      if (type === 'reset') return 0;
      return prev;
    }))

  }
  return (
    <>
      <section className='min-h-screen flex flex-col mx-auto justify-center items-center gap-4'>
        <div className='text-xl md:text-2xl border border-gray-400 p-2 rounded-xl '>counter: {count}</div>
        <Button onClick={handleClick} />
        <ToastContainer />
      </section>
    </>
  )
}

export default App
