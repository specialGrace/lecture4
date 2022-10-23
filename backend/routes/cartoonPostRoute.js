import express from 'express'
import {
  getAllCartoons,
  createCartoonPost,
  getSingleCartoon,
  updateCartoonPost,
  deleteCartoonPost
} from '../controllers/cartoonPostController.js'
import {protect} from '../middleware/auth.js'
const router = express.Router()

router.route("/").get(getAllCartoons)
router.route("/postcartoon").post(protect, createCartoonPost)
router.route("/:id").get(getSingleCartoon).put(updateCartoonPost).delete(deleteCartoonPost)

export default router