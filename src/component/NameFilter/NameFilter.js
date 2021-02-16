import React  from 'react'
import {Form} from 'react-bootstrap'
import './NameFilter.css'
function NameFilter({setName}) {
    return (
        <>
      <Form.Control className='filterName' type="text"
       placeholder="write a movie title ..." 
       onChange={(e)=>setName(e.target.value)}
       />
    </>)
}

export default NameFilter
