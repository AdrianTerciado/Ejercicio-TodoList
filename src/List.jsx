import React, { useState, useEffect } from 'react'
import Item from './Item'
import data from './data'

function List() {

  const [list, setList] = useState(data);
  const [values, setValues] = useState({
    title: ""
  });

  const paintItems = () =>
    list.map((item, index) =>
      <Item
        key={index}
        title={item.title}
        delete={() => deleteItem(index)}
      />
    );

  const createItem = (e) => {
    e.preventDefault();

    const title = e.target.title.value;

    const item = { title };

    setList([item, ...list]);

    e.target.title.value = "";
    values.title = "";
  }

  const clearItems = () => setList([]);

  const resetItems = () => setList(data);

  const deleteItem = (pos) => {
    alert("Borrar tarea");
    const remainingItems = list.filter((item, index) => index !== pos);
    setList(remainingItems);
  }


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValues({ title: "" });
      e.target.title.value = "";
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [values.title]);


  const inputChange = (e) => setValues({
    ...values,
    [e.target.name]: e.target.value
  });

  return (
    <section>
      <h2>Bienvenido a tu lista de tareas</h2>
      <button onClick={clearItems}>Borrar todo</button>
      <button onClick={resetItems}>Recargar</button>

      <form onSubmit={createItem}>
        <label htmlFor="name">Escribe la tarea</label>
        <br />
        <input type="text" name="title" onChange={inputChange} />
        <br />
        {values.title 
        ? <button type="submit">ADD</button> 
        : null
        }

      </form>

      {paintItems()}

    </section>
  )
}

export default List