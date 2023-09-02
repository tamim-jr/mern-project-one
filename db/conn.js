const mongoose = require('mongoose');

const DB = process.env.DATABASE; //database connect
// const DB = 'mongodb+srv://<DB:user>:<DB:password>@mernproone.tptqf8j.mongodb.net/<DB Name>?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
    console.log(`Connection Success`);
}).catch((err)=> console.log(`not connected`));