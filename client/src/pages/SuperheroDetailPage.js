import { Link, useParams } from "react-router-dom";

import SuperheroDetail from '../components/SuperheroDetail'

const SuperheroDetailPage = () => {
  let params = useParams()
  return (
     <div>
       <SuperheroDetail superheroId={params.id}/>
       <Link to="edit"> EDIT </Link>
     </div>
   ) 
}

export default SuperheroDetailPage