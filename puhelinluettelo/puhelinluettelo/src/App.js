import React, { useState } from 'react'
import Filter from './components/Filer'
import MapPersons from './components/MapPersons'
import AddPersonsForm from './components/AddPersonsForm'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState()
  const [ newNumber, setNewNumber] = useState()
  const [ filterName, setNewFilterName] = useState()
  const [ filteredNames, setFilteredNames] = useState([])

  const handleFilter = (event) => {
    setNewFilterName(event.target.value.toLowerCase())
    console.log(event.target.value)
    filterShowNames()
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
    console.log(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const filterShowNames = (event) => {
   // event.preventDefault()
    for(var person of persons){
      if(person.name.toLowerCase().includes(filterName)) {
        const perosnToBeAdded= {
          name: person.name,
          number: person.number
        }
        
        setFilteredNames(filteredNames.concat(perosnToBeAdded))
      }
    }
  }
  const addPerson  = (event) =>{
    event.preventDefault()
      if (newName !== ""){
        if (!persons.find((person) => { return person.name === newName })) {
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

  return (
    <div>

      <h2>Phonebook</h2>

      <Filter filterShowNames = {filterShowNames}
      handleFilter = {handleFilter}
      filterName = {filterName} />
      <h2>Add Perons</h2>
      <AddPersonsForm addPerson = {addPerson}
      newName = {newName}
      newNumber = {newNumber}
      handleNumberChange = {handleNumberChange}
      handlePersonChange = {handlePersonChange} />
      
      
      <h2>Numbers</h2>
        <div>
            <MapPersons persons={persons} filteredNames={filteredNames} />
        </div>
    </div>
  )

}

export default App