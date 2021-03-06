import express from 'express'
import { registerUser, loginUser } from '../controllers/auth.js'
import { addReview, deleteReview, getAllMuseums, getSingleMuseum } from '../controllers/museums.js'
import { addFavourite, deleteFavourite, getUserProfile } from '../controllers/users.js'
import { secureRoute } from './secureRoute.js'

const router = express.Router()
router.route('/museums')
  .get(getAllMuseums)

router.route('/museums/:id')
  .get(getSingleMuseum)

router.route('museums/:id/exhibits')
  .get()

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/museums/:id/reviews')
  .post(secureRoute, addReview)

router.route('/museums/:id/reviews/:reviewsId')
  .delete(secureRoute, deleteReview)

router.route('/profile')
  .get(secureRoute, getUserProfile)

router.route('/profile/:id/favourites')
  .post(secureRoute, addFavourite)

router.route('/profile/:id/favourites/:favouriteId')
  .delete(secureRoute, deleteFavourite)

export default router