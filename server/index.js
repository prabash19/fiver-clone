const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const connectDB = require("./utils/connectDB");
const errorMiddleware = require("./middlewares/error");

const auth = require("./routes/auth");
const conversation = require("./routes/conversation");
const gig = require("./routes/gig");
const message = require("./routes/message");
const order = require("./routes/order");
const reviews = require("./routes/reviews");
const user = require("./routes/user");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
connectDB(DB);

app.use("/auth", auth);
app.use("/conversation", conversation);
app.use("/gig", gig);
app.use("/message", message);
app.use("/order", order);
app.use("/reviews", reviews);
app.use("/user", user);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log("server starting on", process.env.PORT);
});
