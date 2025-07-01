import { getList } from "../models/kartModel.js"

export default async function getKartController(req, res) {

    const result = await getList();
    return res.json(result)
}