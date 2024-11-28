import express from 'express';
import pkg from "body-parser";
import cors from "cors";
import association from "./models/Associations.js";
import router from "./routes/router.js";
import sequelize from "./util/database.js";

const app = express();
const PORT = 5000
const { json, urlencoded } = pkg;

app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(cors());
(async () => {
  try {
    association.associations();
    await sequelize.sync();
    app.listen(PORT, function () {
      console.log("server in http://localhost:5000");
    });
  } catch (error) {
    console.log(error);
  }
})();

app.use("/", router);
