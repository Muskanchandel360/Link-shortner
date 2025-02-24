import React from 'react'

const LinkItem = ({link}) => {
  return (
    <div className= "bg-white  my-2 flex items-center justify-between p-5 border rounded-md">
    <span>    
      <a href={link.data} target='_blank' className='font-bold text-2xl text-blue-700'>{link.data}</a>
     <p className=' max-w-sm font-bold text-xs text-blue-700 my-3'>{link.originalLink}</p>
    </span>  
    <button className='py-1.5  px-3 rounded-lg bg-slate-900 hover:bg-slate-800 duration-150'>
      <p className='text-white font-bold'>Copy</p>
    </button>
    </div>
      )
}

export default LinkItem
