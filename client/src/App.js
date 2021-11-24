import { useState } from 'react'
import SuperheroDetail from './components/SuperheroDetail';
import SuperheroList from './components/SuperheroList';
import SuperheroEditForm from './components/SuperheroEditForm';

import './App.css';


function App() {

  const [selectedSuperheroId, setSelectedSuperheroId] = useState()

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
          <SuperheroEditForm />
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
