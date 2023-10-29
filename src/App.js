import logo from './logo.svg';
import './App.css';
import { List } from './Components/List.js';
import data from './Components/data.js';
import { useState } from 'react';

function App() {
  const [people ,setpeople]=useState(data);
  return (
   <main>
    <section className='container'>
    <h3>{people.length}Birthday Today</h3>
    <List people={people} />
    <button onClick={()=>setpeople([])}>Clear all</button>

    </section>
   </main>
  );
}

export default App;
