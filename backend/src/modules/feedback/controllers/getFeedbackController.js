import { getList } from "../models/feedbackModel.js"

export default async function getFeedbackController(req, res) {

    const result = await getList();
    return res.json(result)
}