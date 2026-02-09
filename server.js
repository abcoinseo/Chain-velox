const express = require("express");
const { spawn } = require("child_process");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static("public"));

/* ===== Start Hardhat Node ===== */
const hh = spawn("npx", ["hardhat", "node", "--hostname", "0.0.0.0"], {
  stdio: "inherit"
});

/* ===== RPC Proxy ===== */
app.post("/", async (req, res) => {
  const fetch = (await import("node-fetch")).default;
  const r = await fetch("http://127.0.0.1:8545", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(req.body)
  });
  res.json(await r.json());
});

/* ===== Routes ===== */
app.get("/", (_, r) => r.sendFile(path.join(__dirname,"public/index.html")));
app.get("/explorer", (_, r) => r.sendFile(path.join(__dirname,"public/explorer.html")));
app.get("/minter", (_, r) => r.sendFile(path.join(__dirname,"public/minter.html")));
app.get("/maker", (_, r) => r.sendFile(path.join(__dirname,"public/maker.html")));
app.get("/miner", (_, r) => r.sendFile(path.join(__dirname,"public/miner.html")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("VELOX LIVE on", PORT));
