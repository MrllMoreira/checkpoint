import multer from "multer";
import express from "express"
import createProductController from "../controllers/createProductController.js"
import getProductController from "../controllers/getProductController.js"
import changeProductController from "../controllers/changeProductController.js"
import deleteProductController from "../controllers/deleteProductController.js"
import uptadeProductController from "../controllers/uptadeProductController.js"

const router = express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });

router.get('/', getProductController)
router.post('/', upload.single('photo'), createProductController)
router.patch('/:id', changeProductController)
router.delete('/:id', deleteProductController)
router.put('/:id', uptadeProductController)

export default router