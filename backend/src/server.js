import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Importando rotas a partir de modules/*
import userRoutes from "../src/modules/user/routes/userRoutes.js";
import clientRoutes from "./modules/client/routes/clientRoutes.js";
import companyRoutes from "./modules/company/routes/companyRoutes.js";
import feedbackRoutes from "./modules/feedback/routes/feedbackRoutes.js";
import kartRoutes from "./modules/kart/routes/kartRoutes.js";
import productRoutes from "./modules/product/routes/productRoutes.js";
import requestRoutes from "./modules/request/routes/requestRoutes.js";

// import gerarPdfRoutes from "./modules/gerarPdf/routes/gerarPdfRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Rotas
app.use('/user', userRoutes);
app.use("/client", clientRoutes);
app.use("/company", companyRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/kart", kartRoutes);
app.use("/product", productRoutes);
app.use("/request", requestRoutes);
// app.use("/gerar-pdf", gerarPdfRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
