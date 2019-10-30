import React from 'react'

const Filer = (props) => {

    return (
        <div>
        <form onSubmit= {props.filterShowNames}>
         Name: <input
                value = {props.filterName}
                onChange = {props.handleFilter}
                />  <button type="submit">Filter</button>
        </form>
        </div>
    )
}

export default Filer