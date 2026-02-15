const http = require("http");
const { spawn } = require("child_process");

// Run Hardhat node on 8545
const hh = spawn("npx", ["hardhat", "node", "--hostname", "0.0.0.0", "--port", "8545"], {
  stdio: "inherit",
});

hh.on("close", (code) => {
  console.log("Hardhat exited with code:", code);
  process.exit(code ?? 1);
});

// Simple health server on 3000 (for Render/Web service health checks)
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("OK");
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "running", rpc: "http://0.0.0.0:8545" }));
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Health server listening on 3000");
});
