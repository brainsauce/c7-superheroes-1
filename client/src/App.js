import { useEffect, useState } from 'react'

import './App.css';
import './SuperheroDetail.css'

const SuperheroRow = ({ name, alterEgo, homeCity, onSuperheroSelected }) => (
  <tr onClick={() => onSuperheroSelected()}>
    <td>{name}</td>
    <td>{alterEgo}</td>
    <td>{homeCity}</td>
  </tr>
)

const SuperheroDetail = ({superheroId}) => {

  const [hero, setHero] = useState({ superpowers: [] })

  useEffect(() => {
    const fetchSuperhero = async () => {
      let fetchResult = await fetch('/api/superhero/'+superheroId)
      let fetchedHero = await fetchResult.json()
      setHero(fetchedHero)
    }
    fetchSuperhero()
  }, [superheroId])

  return (
    <div>
      <h2>Superhero Detail</h2>
      <div className="detail-fields">
        <div className="field-title">Name</div>
        <div className="field-value">{hero.superheroName}</div>
        <div className="field-title">Alter Ego</div>
        <div className="field-value">{hero.alterEgo}</div>
        <div className="field-title">Home City</div>
        <div className="field-value">{hero.homeCity}</div>
        <div className="field-title">Super Powers</div>
        <ul className="field-value">
          {
            hero.superpowers.map((power, index) => (
              <li key={index}>{power}</li>
            ))
          }
        </ul>
        <div className="field-title">Nemesis</div>
        <div className="field-value">{hero.nemesis}</div>
      </div>
    </div>
  )
}

function App() {

  const [selectedSuperheroId, setSelectedSuperheroId] = useState("61953f522431417224d245f2")

  const [superheroes, setSuperheroes] = useState([])
  useEffect(() => {
    async function fetchData() {
      console.log('Fetching superhero data!')
      let fetchResult = await fetch("/api/superhero")
      let superheroList = await fetchResult.json()
      setSuperheroes(superheroList)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Superhuman List</h1>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Alter Ego</th>
            <th>Home City</th>
          </tr>
        </thead>
        <tbody>
          {
            superheroes.map((hero, index) => {
              function selectSuperhero() {
                console.log('selectSuperhero called on', hero)
                setSelectedSuperheroId(hero._id)
              }
              return <SuperheroRow key={index} onSuperheroSelected={selectSuperhero} name={hero.superheroName} alterEgo={hero.alterEgo} homeCity={hero.homeCity} />
            })
          }
        </tbody>
      </table>
      <SuperheroDetail  superheroId={selectedSuperheroId}/>
    </div>
  );
}

export default App;
