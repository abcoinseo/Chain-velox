const http = require("http");
const { spawn } = require("child_process");

// Start Hardhat RPC on 8545
const hardhat = spawn("npx", ["hardhat", "node", "--hostname", "0.0.0.0", "--port", "8545"], {
  stdio: "inherit"
});

hardhat.on("close", (code) => {
  console.log(`Hardhat exited with code ${code}`);
  process.exit(code ?? 1);
});

// Health server on 3000
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("VELOX RPC running");
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Health server running on port 3000");
});
