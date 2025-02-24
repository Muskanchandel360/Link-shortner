import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import LinkContainer from './components/LinkContainer'
import { LinkProvider } from './context/LinkContext'

const App = () => {
  return (
    <LinkProvider>
        <Navbar/>

<div className=' p-8 md:p-24 py-48 md:py-56 bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen flex items-center justify-center flex-col space-y-10'>

<Form/>
<LinkContainer/>


</div>
</LinkProvider>
  )
}

export default App

