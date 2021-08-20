const app = require("./index");

const PORT = process.env.port || 4000;

app.listen(PORT, () => {
  console.log(`SERVER STARTED on port ${PORT}`);
});
