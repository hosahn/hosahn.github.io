const app = require("./src/app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const PORT = process.env.PORT || 5001;
const URL = process.env.MONGODB_URL || "Error";
const db = mongoose.connection;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("connected", () =>
  console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + URL)
);
db.on("error", (error) =>
  console.error("MongoDB 연결에 실패하였습니다...\n" + URL + "\n" + error)
);

app.listen(PORT, () => {
  console.log(`서버를 정상적으로 시작하였습니다. http://localhost:${PORT}`);
});
