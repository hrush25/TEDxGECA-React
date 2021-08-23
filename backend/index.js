const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require(__dirname + "/routes/user");


const port = process.env.PORT || 3006;

//This is to allow our api for cross-origin resource sharing.
app.use(cors());

//This is to allow our api for parsing json
app.use(express.json());
//This is to allow our api to receive data from a client app
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/user", userRoute);



app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`);
});