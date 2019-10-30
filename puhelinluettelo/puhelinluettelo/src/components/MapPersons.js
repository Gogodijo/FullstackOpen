import React from 'react'
import Person from './Persons'

export default function MapPersons({persons, filteredNames}) {
      console.log(filteredNames.length)

      const personsToShow = () => (filteredNames.length === 0) ?
        persons.map( 
            persons => <Person
            key = {persons.name}
            person = {persons} /> ) :
        filteredNames.map(
          filteredNames => <Person
            key = {filteredNames.name}
            person = {filteredNames} />
        )
    return (
      personsToShow()
    )
}
