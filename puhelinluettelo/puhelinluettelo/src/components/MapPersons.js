import React from 'react'
import Person from './Persons'

export default function MapPersons({persons}) {
    const personsToShow = () => persons.map( persons => <Person
        key = {persons.name}
        person = {persons} /> )
    return (
      personsToShow()
    )
}
