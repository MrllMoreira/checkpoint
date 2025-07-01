import express from "express";
import multer from "multer";
import createUserController from "../controllers/createUser.js";
import getUserController from "../controllers/getUser.js";
import changeUserController from "../controllers/changeUser.js";
import deleteUserController from "../controllers/deleteUser.js";
import uptadeUserController from "../controllers/uptadeUser.js";

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // cria a pasta uploads/ automaticamente
 
router.get('/', getUserController);
router.post('/', upload.single('avatar'), createUserController); // usa o middleware upload
router.patch('/:id', changeUserController);
router.delete('/:id', deleteUserController);
router.put('/:id', uptadeUserController);

export default router;
