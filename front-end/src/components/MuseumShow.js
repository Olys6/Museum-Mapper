import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AddReviewForm from './AddReviewForm'
// import { Carousel } from 'react-carousel-minimal'
import ReviewsList from './ReviewsList'
import StarRatings from 'react-star-ratings'
import AddingDeletingToFavourites from './AddingDeletingToFavourites'
import Carousel from './Carousel'

const MuseumShow = () => {

  const [museum, setMuseum] = useState()
  const { id } = useParams()
  const [hasError, setHasError] = useState(false)

  // const [galleryData, setGalleryData] = useState([])

  const [avgRat, setAvgRat] = useState(0)

  // -------------

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/museums/${id}`)
        // console.log('data ->', data)
        setMuseum(data)
        // setGalleryData(data)
      } catch (err) {
        setHasError(true)
        // console.log(hasError)
      }
    }
    getData()
  }, [id])


  // -------------------- ADDING TO FAV

  

  // --------------------------
  
  // ------------------------ CAROUSEL

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/museums/${id}`)
  //       const multiImages = data.multiple_images
  //       const imagesJoined = multiImages.map(image => {
  //         return {
  //           image
  //         }
  //       })
  //       setGalleryData(imagesJoined)
  //     } catch (err) {
  //       setHasError(true)
  //       console.log(hasError)
  //     }
  //   }
  //   getData()
  // }, [id])

  // ------ STAR FIX <- if museum isn't rated the return in the back-end is 'not yet rated', 
  // ------------------ so this function says if a non-number is being returned, then return 0

  useEffect(() => {
    const getRating = async () => {
      try {
        if (isNaN(museum.averageRating)) setAvgRat(0)
        else setAvgRat(museum.averageRating)
      } catch (err) {
        console.log(err)
      }
    }
    getRating()
  }, [museum])

  // ---------------------------------------

  
  return (
    <>
      {museum ?
        <>
          <section className='hero is-small'>
            <div className='hero-body is-flex is-justify-content-space-between is-align-content-center singleMuseumHeroBody'>
              <div className='has-text-left'>
                <p className='title has-text-white is-size-6-mobile'>{museum.name}</p>
                <hr />
                <div className='is-flex is-justify-content-space-between'>
                  <a href={museum.website} className='has-text-white is-size-5 has-text-weight-bold is-size-7-mobile'>Official Website</a>
                  <StarRatings
                    rating={parseFloat(avgRat)}
                    numberOfStars={5}
                    starRatedColor='gold'
                    starDimension='18px'
                    starSpacing='3px'
                  />
                </div>
              </div>
              <p className='subtitle has-text-right has-text-white has-text-weight-semibold is-italic is-size-7-mobile'>
                {/* <a onClick={handleClick} className="bookmark far animate__animated animate__faster fa-bookmark" id={id}></a> */}
                <AddingDeletingToFavourites />
                <hr />
                Region: {museum.region}
                <br />
                Date Established: {museum.date_established}
              </p>
            </div>
          </section>
          <section className='section px-0 py-3'>
            <div className='is-marginless px-3 mainContainer'>
              <section className='columns is-flex is-align-items-center descAndPic'>
                <div className='column is-half-desktop is-half-tablet is-half-mobile'>
                  <Carousel />
                </div>
                <div className='column is-half-desktop is-half-tablet is-half-mobile'>
                  <div className='card p-3'>
                    <p className='is-italic is-size-6 is-size-7-mobile'>{museum.description}</p>
                    <hr />
                    <div>
                      <h3 className='has-text-weight-bold is-underlined is-size-7-mobile'>Collections:</h3>
                      <ul>
                        {museum.collection_types.map(type => {
                          return <li className='is-capitalized is-italic is-size-7-mobile' key={type}>{type}</li>
                        })}
                      </ul>
                    </div>
                    <div>
                      <hr />
                      <h3 className='has-text-weight-bold is-underlined is-size-7-mobile'>Address:</h3>
                      <p className='is-italic is-size-7-mobile'>{museum.address}</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className='columns reviewsAndForm has-background-black'>
                <div className='column is-half'>
                  <div className='card'>
                    <div className='card-header p-2 is-flex is-align-items-center'>
                      <p className='card-header-title is-size-7-mobile'>Reviews:</p>
                    </div>
                    <div className='card-content'>
                      <ul className='is-size-7-mobile'>
                        {museum.reviews.map(review => {
                          return (
                            <ReviewsList key={review._id} {...review} />
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='column'>
                  <AddReviewForm />
                </div>
              </section>
            </div>
          </section>
        </>
        :
        <h2>{hasError ? 'Something went wrong' : 'Page Loading...'}</h2>
      }
    </>
  )

}
export default MuseumShow