import { update } from "../models/feedbackModel.js";

export default async function putFeedbackController(req, res) {
  const { id } = req.params;
  const feedback = req.body;

  try {
    const updated = await update(id, feedback);
    return res.json({
      message: "Feedback alterado com sucesso",
      data: updated,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
