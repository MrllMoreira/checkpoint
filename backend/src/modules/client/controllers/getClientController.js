import { getList } from "../models/clientModel.js"

export default async function getClientController(req, res) {

    const result = await getList();
    return res.json(result)
}