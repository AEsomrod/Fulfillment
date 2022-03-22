// use mongoose
const mongoose = require("mongoose");

// connect MongoDB
const dbUrl = "mongodb+srv://ffm:krJXZN5JwIoqrpvP@fullfillment.0pf3k.mongodb.net/mydb";
mongoose
  .connect(dbUrl, {
    useNewUrlparser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

// design Schema
let orderSchema = mongoose.Schema({
  orderID: String,
  productID: String,
  productName: String,
  amount: Number,
  price: Number
});

// create model
let Order = mongoose.model("orders", orderSchema);

// export model
module.exports = Order;

//for save data
module.exports.saveOrder = function (model, data) {
  model.save(data);
};
