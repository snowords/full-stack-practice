import React from 'react'
import './error.css'

const Notification = ({ message }) => {
  if(message === null){
    return null
  }
  return (
    <div className='error'>
      {message}
    </div>
  )
}

export default Notification