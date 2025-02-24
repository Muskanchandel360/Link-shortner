import React, { useState } from 'react'
import { fetchURL } from '../context/LinkService'

const Form = () => {
  const [text , setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchURL(text)
    setText("")
  }
  return (
    <>
        <h1 className='text-3xl md:text-5xl font-black  text-white text-center'>Short Your URL's</h1>
  <form  onSubmit= {handleSubmit} className='w-full'>
    <input  onChange = {e => setText(e.target.value)} value = {text} type="text" placeholder='Enter Your URL' className='p-5 rounded-l-lg w-3/4' />
    <button className='bg-green-700 p-5 rounded-r-lg w-1/4 hover:bg-green-900 duration-150'>
      <p className=' font-black text-white uppercase'>Short
         </p>
    </button>
  </form>

    </>
  )
}

export default Form
