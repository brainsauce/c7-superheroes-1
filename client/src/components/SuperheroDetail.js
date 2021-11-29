import { useEffect, useState } from 'react'

import './SuperheroDetail.css'
import SuperheroEditForm from './SuperheroEditForm'

const SuperheroDetail = ({superheroId}) => {

    const [hero, setHero] = useState()
    
    useEffect(() => {
      const fetchSuperhero = async () => {
        let fetchResult = await fetch('/api/superhero/'+superheroId)
        let fetchedHero = await fetchResult.json()
        setHero(fetchedHero)
      }
      fetchSuperhero()
    }, [superheroId])
  
    async function updateSuperhero(updatedSuperhero) {
      console.log('Posting to superhero id', superheroId, 'with data', updatedSuperhero)
      await fetch('/api/superhero/'+superheroId, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedSuperhero)
      })
    }

    return (
      <div>
        <h2>Superhero Detail</h2>
        <div className="detail-fields">
          <div className="field-title">Name</div>
          <div className="field-value">{hero?.superheroName}</div>
          <div className="field-title">Alter Ego</div>
          <div className="field-value">{hero?.alterEgo}</div>
          <div className="field-title">Home City</div>
          <div className="field-value">{hero?.homeCity}</div>
          <div className="field-title">Super Powers</div>
          <ul className="field-value">
            {
              hero?.superpowers.map((power, index) => (
                <li key={index}>{power}</li>
              ))
            }
          </ul>
          <div className="field-title">Costume</div>
          <div className="field-value">{hero?.costume}</div>
          <div className="field-title">Nemesis</div>
          <div className="field-value">{hero?.nemesis}</div>
        </div>
        <SuperheroEditForm existingValues={hero} onSave={updateSuperhero} />
      </div>
    )
  }

  export default SuperheroDetail
  