import express from "express"
import createProductController from "../controllers/createProductController.js"
import getProductController from "../controllers/getProductController.js"
import changeProductController from "../controllers/changeProductController.js"
import deleteProductController from "../controllers/deleteProductController.js"
import uptadeProductController from "../controllers/uptadeProductController.js"

const router = express.Router()


router.get('/', getProductController)
router.post('/', createProductController)
router.patch('/:id', changeProductController)
router.delete('/:id', deleteProductController)
router.put('/:id', uptadeProductController)

export default router