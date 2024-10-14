const mongoose = require('mongoose')

const connectDb = async () => {
try{
    console.log(process.env.MONGO_URL,":- process.env.MONGO_URL");
    
    let conn;
    if(!conn)
        conn = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
    return conn
} 
catch(error){
    console.log("error :",error);
    
}
}

module.exports = connectDb;