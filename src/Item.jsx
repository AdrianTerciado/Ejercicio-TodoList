import React from 'react'
import './Item.css'

function Item(props) {
    return (
      <article className='tasks'>

        <div className='task-text'>
          <input type='checkbox' />
          <p>{props.title}</p>
        </div>
        
        <button className="button-task" onClick={()=>props.delete(props)}>Borrar</button> 

      </article>
    )
  }
  
  export default Item