const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://bliss:1738@cluster0.hbla0bp.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
  })
  .then(() => console.log("CONNECTION TO THE DB..."))
  .catch((err) => console.log(err));
