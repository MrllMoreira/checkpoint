import express from "express"
import createCompanyController from "../controllers/createCompanyController.js"
import getCompanyController from "../controllers/getCompanyController.js"
import changeCompanyController from "../controllers/changeCompanyController.js"
import deleteCompanyController from "../controllers/deleteCompanyController.js"
import uptadeCompanyController from "../controllers/uptadeCompanyController.js"

const router = express.Router()


router.get('/', getCompanyController)
router.post('/', createCompanyController)
router.patch('/:id', changeCompanyController)
router.delete('/:id', deleteCompanyController)
router.put('/:id', uptadeCompanyController)

export default router