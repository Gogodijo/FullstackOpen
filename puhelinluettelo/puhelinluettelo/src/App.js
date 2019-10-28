import React, { useState } from 'react'
import Person from './components/Persons'
//import Filter from './components/Filer'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState()
  const [ newNumber, setNewNumber] = useState()

  const handlePersonChange = (event) => {

    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {

    setNewNumber(event.target.value)
  }

  const addPerson  = (event) =>{
    event.preventDefault()
      if (newName !== ""){
        if (!persons.find((person) => { return person.name === newName })) {
          console.log(persons)
          const personObject = {
            name: newName,
            number: newNumber
          }
          setPersons(persons.concat(personObject))
        } else {
          const message = `${newName} already on the list`
          window.alert(message)
        }
        
      }
  }

  //const personsToShow = () => persons.map( persons => <Person
  //  key = {persons.name}
  //  person = {persons} /> )

  return (
    <div>

      <h2>Phonebook</h2>
      <form on onSubmit={addPerson}>
        <div>
          Name: <input
            value = {newName}
            onChange = {handlePersonChange}
           />
           <br />
           Number: <input
            value = {newNumber}
            onChange = {handleNumberChange}
           />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
            <Person  />
        </div>
    </div>
  )

}

export default App