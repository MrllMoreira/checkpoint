import express from "express"
import createFeedbackController from "../controllers/createFeedbackController.js"
import getFeedbackController from "../controllers/getFeedbackController.js"
import changeFeedbackController from "../controllers/changeFeedbackController.js"
import deleteFeedbackController from "../controllers/deleteFeedbackController.js"
import uptadeFeedbackController from "../controllers/uptadeFeedbackController.js"

const router = express.Router()


router.get('/', getFeedbackController)
router.post('/', createFeedbackController)
router.patch('/:id', changeFeedbackController)
router.delete('/:id', deleteFeedbackController)
router.put('/:id', uptadeFeedbackController)

export default router