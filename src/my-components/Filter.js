import React, { useState } from 'react'

const handleSearchChange = (event) => {

const Filter = () => {
  const [ search ,setSearch ] = useState('')

  console.log('输入的名字为：', event.target.value );
    setSearch(event.target.value)
  }

  return (
    <div>
      filter shown with 
      <input value={search} onChange={handleSearchChange} />
    </div>
  )
}

export default Filter