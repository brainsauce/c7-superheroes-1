import { useState } from 'react'
import SuperheroDetail from './components/SuperheroDetail';
import SuperheroList from './components/SuperheroList';
import SuperheroEditForm from './components/SuperheroEditForm';

import './App.css';


function App() {

  const [selectedSuperheroId, setSelectedSuperheroId] = useState()

  async function createSuperhero(newSuperhero) {
    await fetch('/api/superhero', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSuperhero)
    })
  }

  return (
    <div className="App">
      {/* { selectedSuperheroId ? 
          <div>
            <button onClick={() => setSelectedSuperheroId(undefined)}>Go Back</button>
            <SuperheroDetail  superheroId={selectedSuperheroId}/> 
          </div>
        : 
        <SuperheroList setSelectedSuperheroId={setSelectedSuperheroId} />  
      } */}

      { !selectedSuperheroId && <div>
          <SuperheroList setSelectedSuperheroId={setSelectedSuperheroId} /> 
          <SuperheroEditForm onSave={createSuperhero} />
        </div> }
      { selectedSuperheroId && <div>
            <button onClick={() => setSelectedSuperheroId(undefined)}>Go Back</button>
            <SuperheroDetail  superheroId={selectedSuperheroId}/> 
          </div>
      }
    </div>
  );
}

export default App;
