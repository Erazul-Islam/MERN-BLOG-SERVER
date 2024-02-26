import express from "express";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://erazul89:Xj8xDO7tXJFq17Zc@taosif.sxba9qz.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=Taosif')
.then(() => {
    console.log('MongoDb is connected')
}).catch(err => {
    console.log(err)
})

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})