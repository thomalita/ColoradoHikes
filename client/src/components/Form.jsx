import React from 'react'
import { Navigate } from 'react-router-dom'

const hikeForm = (props) => {
    const handleSubmit = (e) => {
        props.addHike(e)
        Navigate('/Hikes')
    }
    const newHike = props.newHike

  return (
    <div>
    <h1>Add New Hike</h1>
    <form onSubmit={ handleSubmit }>
        <input type="text" value={newHike.city} onChange={props.handleChange} city={'city'} placeholder={'city'}/>
        <input type="text" value={newHike.difficulty} onChange={props.handleChange} difficulty={'difficulty'} placeholder={'difficulty'}/>
        <input type="text" value={newHike.miles} onChange={props.handleChange} miles={'miles'} placeholder={'miles'}/>
        <input type="text-area" value={newHike.details} onChange={props.handleChange} details={'details'} placeholder={'details'}/>
    </form>
    </div>
  )
}

export default Form
