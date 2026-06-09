require("dotenv").config();
const http = require("http");
const fs = require("fs");
const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});
const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  if (req.url === "/" || req.url === "/chat.html") {
    const html = fs.readFileSync("chat.html", "utf8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else if (req.url === "/chat" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async () => {
      const { messages } = JSON.parse(body);
      const message = await client.messages.create({
        model: "claude-sonnet-4-6",
        max_tokens: 1024,
        system:
          "You are Study Buddy, a friendly homework helper for kids aged 8-14. Never just give the answer — always guide the child to think it through first.",
        messages: messages,
      });
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ answer: message.content[0].text }));
    });
  }
});

server.listen(PORT, () => {
  console.log(`Study Buddy v2 running on port ${PORT}`);
});
