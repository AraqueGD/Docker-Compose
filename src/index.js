const express = require("express");

const app = express();

require("./db");

app.use(require("./routes/routes"));

async function main() {
  await app.listen(3000);
  console.log("Server Connected Port 3000");
}

main();
