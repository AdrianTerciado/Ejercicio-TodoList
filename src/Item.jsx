import React from 'react'

function Item(props) {
    return (
      <article>
        <h3>{props.title}</h3>
        <button onClick={()=>props.delete()}>Borrar</button> 
      </article>
    )
  }
  
  export default Item