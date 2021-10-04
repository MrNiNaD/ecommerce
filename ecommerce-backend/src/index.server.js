const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
app = express();

// enviroment variable
env.config();
//mongodb+srv://root:<password>@cluster0.scj7j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.scj7j.mongodb.net/ecommerce?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connection Successful");
  });

app.use(bodyParser());
app.use(authRoutes);
app.use(adminRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening to PORT ${process.env.PORT}`);
});
