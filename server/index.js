require("dotenv").config();
const express = require("express");
const cors = require("cors");
const conn = require("./src/configurations/sf_conn");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes

app.get("/", (req, res) => {
  res.send("Metaverse server");
});

app.post("/create", async (req, res) => {
  try {
    console.log("body: ", req.body);
    const ret = await conn.sobject("Metavserseuser__c").create(req.body);
    res.status(200).json({ ret });
  } catch (err) {
    res.status(500).json(err);
  }

  // conn
  //   .sobject("Account")
  //   .create({ Name: "My Account #1" }, function (err, ret) {
  //     if (err || !ret.success) {
  //       return res.status(500).json(err);
  //     }
  //     console.log("Created record id : " + ret.id);
  //     res.status(200).json(ret);
  //   });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is up & running at ${PORT}`);
});
