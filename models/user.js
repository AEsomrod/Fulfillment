// use mongoose
const mongoose = require('mongoose')

// connect MongoDB
const dbUrl = "mongodb+srv://ffm:krJXZN5JwIoqrpvP@fullfillment.0pf3k.mongodb.net/mydb"
mongoose.connect(dbUrl,{
    useNewUrlparser:true,
    useUnifiedTopology:true
}).then(log => {
  console.log(log)
}).catch(err=>console.log(rr))

// design Schema
let userSchema = mongoose.Schema({
  username: String,
  email: String,
  phoneNumber: String,
  companyName: String,
  address: String,
  password: String,
  typeUser: String
});

// create model
let User = mongoose.model("users",userSchema)

// export model
module.exports = User

//for save data
module.exports.saveUser = function(model,data){
    model.save(data)
}