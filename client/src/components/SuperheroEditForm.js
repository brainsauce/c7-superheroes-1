import {useState} from 'react'

import './SuperheroDetail.css'

const SuperheroEditForm = () => {
    const [superheroName, setSuperheroName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')
    const [homeCity, setHomeCity] = useState('')
    const [costume, setCostume] = useState('')
    const [nemesis, setNemesis] = useState('')

    function onInputUpdate(event, setter) {
        let newValue = event.target.value
        setter(newValue)
    }

    async function postData() {
        let newSuperhero = {
            superheroName, alterEgo, homeCity, costume, nemesis
        }
        console.log('Saving superhero', newSuperhero)
        await fetch('/api/superhero', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSuperhero)
        })
    }

    return (
        <div>
            <h2>Superhero Entry</h2>
            <div className="detail-fields">
                <label className="field-title">Name</label>
                <input value={superheroName} onChange={(event) => onInputUpdate(event, setSuperheroName) } />
                <label className="field-title">Alter Ego</label>
                <input value={alterEgo} onChange={(event) => onInputUpdate(event, setAlterEgo) } />
                <label className="field-title">Home City</label>
                <input value={homeCity} onChange={(event) => onInputUpdate(event, setHomeCity) } />
                <label className="field-title">Costume</label>
                <input value={costume} onChange={(event) => onInputUpdate(event, setCostume) } />
                <label className="field-title" >Nemesis</label>
                <input value={nemesis} onChange={(event) => onInputUpdate(event, setNemesis) }/>
            </div>
            <button onClick={postData} >Save Superhero</button>

        </div>
    )
}

export default SuperheroEditForm