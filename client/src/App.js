import { Routes, Route, Link } from 'react-router-dom'

import SuperheroListPage from './pages/SuperheroListPage'
import CreateSuperheroPage from './pages/CreateSuperheroPage'
import SuperheroDetailPage from './pages/SuperheroDetailPage'

import './App.css'
import SuperheroEditPage from './pages/SuperheroEditPage'

function App() {
    return (
        <div className="App">
            <nav className="nav">
                <Link className="btn btn-primary" to="/">Home</Link>
                <Link className= "btn btn-primary" to="/new">New</Link>
            </nav>
            <Routes>
                <Route path="/" element={<SuperheroListPage />} />
                <Route path="/new" element={<CreateSuperheroPage />} />
                <Route
                    path="/superhero/:id"
                    element={<SuperheroDetailPage />}
                />
                <Route
                    path="/superhero/:id/edit"
                    element={<SuperheroEditPage />}
                />
            </Routes>
        </div>
    )
}

export default App
