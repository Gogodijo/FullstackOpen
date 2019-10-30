import React from 'react'
import Persons from './Persons'

const Filer = (props) => {

    return (
        <div>
         Name: <form>
             <input
                value = {props.filterName}
                onChange = {props.handeFilter}/>
         </form>
        </div>
        
    )
}

export default Filer