import { getList } from "../models/productModel.js"

export default async function getProductController(req, res) {

    const result = await getList();
    return res.json(result)
}