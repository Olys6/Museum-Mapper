import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const AddReviewForm = () => {

  const { id } = useParams()

  const [formData, setFormData] = useState({
    comment: '',
    rating: 0
  })

  const [errors, setErrors] = useState({
    comment: '',
    rating: ''
  })

  const [token, setToken] = useState()


  useEffect(() => {
    const getTokenFromLocalStorage = () => {
      setToken(window.localStorage.getItem('token'))
    }
    getTokenFromLocalStorage()
  }, [])

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async () => {
    // event.preventDefault() <- INTETIONALLY COMMENTED OUT
    try {
      await axios.post(
        `/api/museums/${id}/reviews`, 
        formData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
    } catch (err) {
      console.log(err)
      // setErrors(err.response.data.errors)
      setErrors(true)
    }
  }

  return (
    <form className='review-add' onSubmit={handleSubmit}>
      <div className='field'>
        <label className='label'>Comment:</label>
        <div className='control'>
          <input
            className={`input ${errors.comment ? 'is-danger' : ''}`}
            placeholder='Comment'
            name='comment'
            value={formData.comment}
            onChange={handleChange}
          />
        </div>
        {errors.comment && <p className='is-danger'>Comment is too long</p>}
      </div>
      <div className='field'>
        <label className='label'>Rating:</label>
        <div className='control'>
          <input
            className={`input ${errors.rating ? 'is-danger' : ''}`}
            placeholder='Rating'
            name='rating'
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        {errors.rating && <p className='is-danger'>Rating must be between 1 and 5</p>}
      </div>
      <div className='field'>
        <button type='submit' className='button'>Add Review</button>
      </div>
    </form>
  )

}
export default AddReviewForm