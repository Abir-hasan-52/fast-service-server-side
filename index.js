const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 5000;
// local environment variable from .env file
// dotenv.config();
// middleware 
app.use(cors());
app.use(express.json());

// simple route

app.get("/",(req,res)=>{
    res.send("parcel server is running...")
})

// start the server


app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});