// use mongoose
const mongoose = require("mongoose");

// connect MongoDB
const dbUrl = "mongodb+srv://ffm:krJXZN5JwIoqrpvP@fullfillment.0pf3k.mongodb.net/mydb";
mongoose.connect(dbUrl, {
  useNewUrlparser: true,
  useUnifiedTopology: true,
}).catch((err) => console.log(err));

// design Schema
let order_addressSchema = mongoose.Schema({
  OrderID: String,
  FirstName: String,
  LastName: String,
  Address: String,
  createdBy: String,
})

// create model
let OrderAddress = mongoose.model("order_address", order_addressSchema)

// export model
module.exports = OrderAddress

//for save data
module.exports.saveOrderAddress = function (model, data) {
  model.save(data);
};