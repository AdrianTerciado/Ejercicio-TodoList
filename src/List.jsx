import React, { useState, useRef } from 'react'
import Item from './Item'
import data from './data'
import './List.css'
import { v4 as uuidv4 } from 'uuid';

function List() {

  const [list, setList] = useState(data);
  const [values, setValues] = useState({
    title: ""
  });
  const [contador, setContador] = useState(0);
  const [newData, setNewData] = useState("");

  const titleRef = useRef(null); // Referencia al input title

  const paintItems = () =>
    list.map((item, index) =>
   /*  const ID = uuidv4()  */ 
      <Item
        key={index}
        title={item.title}
        delete={() => deleteItem(index)}
      />
    );

  const clearItems = () => setList([]);

  const resetItems = () => setList(data);

  const deleteItem = (pos) => {
    const remainingItems = list.filter((item, index) => index !== pos);
    setList(remainingItems);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = event.target.title.value;

    const item = { title };

    setList([item, ...list]);

    setNewData(item);

    setTimeout(() => {
      setNewData("")
    }, 2000)

    event.target.title.value = "";
    setValues({
      /* ...values, */
      title: ""
    });
  }

  const handleChange = (event) => {
    setValues({
      /* ...values, */
      [event.target.name]: event.target.value
    });

    if (contador) {
      clearTimeout(contador)
    }

    setContador(setTimeout(() => {
      titleRef.current.value = "";
      setValues({
        /* ...values, */
        title: ""
      });
    }, 5000))
  };

  return (
    <section className='app'>
      <h2 className='title'>Bienvenido a tu lista de tareas</h2>
      
      <div>
        <button className="general-buttons" onClick={clearItems}>Borrar todo</button>
        <button className="general-buttons" onClick={resetItems}>Recargar</button>
      </div>

      <form className="form-tasks" onSubmit={handleSubmit}>

        <input className="input-task" type="text" name="title" onChange={handleChange} ref={titleRef} placeholder='Escribe la tarea a añadir' />
        
        {values.title
          ? <button type="submit">ADD</button>
          : null
        }

      </form>

      {newData
        ? <p className='add-task'>Tarea añadida</p>
        : <></>
      }

      {paintItems()}

    </section>
  )
}

export default List