import React from 'react'
import { Link } from 'react-router-dom'
import AddingDeletingToFavourites from './AddingDeletingToFavourites'

const MuseumCard = ({ _id, name, image, region }) => {

  return (

    <div className='card'>
      <div className='card-header is-flex is-align-items-center'>
        <div className='card-header-title cardTitle is-size-7'>{name}</div>
        <AddingDeletingToFavourites id={_id} />
      </div>
      <Link to={`/museums/${_id}`}>
        <div className='card-image'>
          <figure className='image is-1'>
            <img src={image} alt={`Picture of ${name}`} />
          </figure>
        </div>
        <div className='card-content p-2'>
          <h4 className='is-size-7 cardRegion'>{region}</h4>
        </div>
      </Link>
    </div>

  )

}
export default MuseumCard