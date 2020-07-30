import React, { useState } from 'react'
// import Filter from './Filter'
// import Addperson from './Addperson'
// import Numberlist from './Numberlist'

const Phonebook = () => {
  const [ search ,setSearch ] = useState('')
  const [ persons, setPersons ] = useState([
    { name : 'Arto Hellas ', number : '13061417969'}
  ])
  const [ newName ,setNewName ] = useState('')
  const [ newNumber ,setNewNumber ] = useState('')

  const handleSearchChange = (event) => {
    console.log('输入的名字为：', event.target.value );
    setSearch(event.target.value)
  }
  const handleNameChange = (event) => {
    console.log('输入的名字为：', event.target.value );
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log('输入的号码为：', event.target.value );
    setNewNumber(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    console.log('增加的名字为：', newName);
    if(persons.find((person) => person.name === newName)){
      alert(newName + 'is already add to phonebook')
    }else{
      setPersons(persons.concat({name: newName, number: newNumber}))
    }
  }
  const showPerson = search.length ? persons.filter((person) => person.name[0] === search) : persons 
  return (
    <div>
      <h2>Phone Book</h2>
      <div>
        filter shown with <input value={search} onChange={handleSearchChange} />
      </div>
      {/* <Filter /> */}
      <h3>add a person</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {/* <Addperson /> */}
      <h2>Numbers</h2>
      {/* <Numberlist /> */}
      {showPerson.map(person => 
        <p key={person.name}>{person.name} - {person.number}</p>
      )}
    </div>
  )
}

export default Phonebook