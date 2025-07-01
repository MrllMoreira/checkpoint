import { update } from "../models/clientModel.js"

export default async function putClientController(req, res) {
      const { id } = req.params;
  const client = req.body;

  if (!id) {
    return res.status(400).json({ error: "ID do cliente não foi fornecido" });
  }

  try {
    const result = await update(id, client);
    res.json({ message: "Cliente atualizado com sucesso", data: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}