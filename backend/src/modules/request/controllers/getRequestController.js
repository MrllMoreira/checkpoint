import { getList } from "../models/requestModel.js"

export default async function getRequestController(req, res) {

    const result = await getList();
    return res.json(result)
}