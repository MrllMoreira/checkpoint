import express from "express"
import createKartController from "../controllers/createKartController.js"
import getKartController from "../controllers/getKartController.js"
import changeKartController from "../controllers/changeKartController.js"
import deleteKartController from "../controllers/deleteKartController.js"
import uptadeKartController from "../controllers/uptadeKartController.js"

const router = express.Router()


router.get('/', getKartController)
router.post('/', createKartController)
router.patch('/:id', changeKartController)
router.delete('/:id', deleteKartController)
router.put('/:id', uptadeKartController)

export default router