import React from 'react'
import LinkItem from './LinkItem'
import { useContext } from 'react'
import LinkContext from '../context/LinkContext'

const LinkContainer = () => {
  const {links} = useContext(LinkContext)
  return (
<div className='my-3 p-5  w-full'>
  {
    links.map((link) => (
      <LinkItem key= {link.id} link={link}/>

    ))
  }

</div>
  )
}

export default LinkContainer
