import { data } from './data';
import { useState } from 'react';
import './App.css';

function App() {

  const [ item, setItem ] = useState(data);

  const removeItem = (id) =>{
    let newList = item.filter(toDo =>
      toDo.id !== id);
      setItem(newList);

  }



  return ( <div>
    <div className="container">
      <h1>ПРЕДСВАДЕБНЫЕ ХЛОПОТЫ</h1>
    </div>

    <div className='list'>
      {item.map((thing =>{
        const{id, toDo} = thing;

        return(<div  key={id}>
          <div className='todo'>
          <h4>{id}. {toDo} </h4>
          <button onClick={()=>removeItem(id)}  className='heart'>V</button>
          </div>

        </div>)



      }))}



    </div>



    <div className="container">
      <button className='btn' onClick={()=>setItem([])}> Удалить весь список</button>
    </div>
    <div className="container"></div>
    <div className="container"></div>
    <div className="container"></div>





</div>
  );
}

export default App;
