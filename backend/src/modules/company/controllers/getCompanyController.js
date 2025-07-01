import { getList } from "../models/companyModel.js"

export default async function getCompanyController(req, res) {

    const result = await getList();
    return res.json(result)
}