const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo/mydatabase")
  .then((db) => {
    console.log("DB Connected", db.connection.host);
  })
  .catch((err) => {
    console.log(err);
  });
