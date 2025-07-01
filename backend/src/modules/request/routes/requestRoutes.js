import express from "express"
import createRequestController from "../controllers/createRequestController.js"
import getRequestController from "../controllers/getRequestController.js"
import changeRequestController from "../controllers/changeRequestController.js"
import deleteRequestController from "../controllers/deleteRequestController.js"
import uptadeRequestController from "../controllers/uptadeRequestController.js"

const router = express.Router()


router.get('/', getRequestController)
router.post('/', createRequestController)
router.patch('/:id', changeRequestController)
router.delete('/:id', deleteRequestController)
router.put('/:id', uptadeRequestController)

export default router