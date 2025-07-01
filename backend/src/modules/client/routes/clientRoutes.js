import express from "express"
import createClientController from "../controllers/createClientController.js"
import getClientController from "../controllers/getClientController.js"
import changeClientController from "../controllers/changeClientController.js"
import deleteClientController from "../controllers/deleteClientController.js"
import uptadeClientController from "../controllers/uptadeClientController.js"

const router = express.Router()


router.get('/', getClientController)
router.post('/', createClientController)
router.patch('/:id', changeClientController)
router.delete('/:id', deleteClientController)
router.put('/:id', uptadeClientController)

export default router