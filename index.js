// index.js
import express from "express";

const app = express();

// 简单路由
app.get("/", (req, res) => {
  res.send("Hello, Render! 🚀");
});

// Render 会自动提供 PORT 环境变量
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
