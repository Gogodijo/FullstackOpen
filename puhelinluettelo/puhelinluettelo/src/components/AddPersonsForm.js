import React from 'react'

const AddPersonsForm = (props) =>  {
    console.log(props)
    return (
        <form on onSubmit= {props.addPerson}>
        <div>
            Name: <input
              value = {props.newName}
              onChange = {props.handlePersonChange}
             />
             <br />
             Number: <input
              value = {props.newNumber}
              onChange = {props.handleNumberChange}
             />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
}

export default AddPersonsForm