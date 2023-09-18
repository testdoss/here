const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Phone = require("./models/Phone");
const cors = require("cors");

// middlewares
app.use(cors());
app.use(express.json());

// api calls
app.post("/get-phone", async (req, res) => {
    try {
        const phoneNumber = new Phone({
            phone:req.body.phone,
            name:req.body.name
        })
        await phoneNumber.save()
        res.json({ success:true })
    } catch (error) {
        console.log(error)
    }
})

// start the server + mongodb connection
mongoose.connect('mongodb+srv://rashileo:rashileo123@cluster0.ojjqs.mongodb.net/iamtrying?retryWrites=true&w=majority').then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log("server running & db connection succesful")
    });
})
  .catch((err) => {
    console.log(err);
  });