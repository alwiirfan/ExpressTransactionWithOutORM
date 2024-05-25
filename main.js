import Express from "express";
import "dotenv/config";
import route from "./route.js";
import { initializePool } from "./db.js";

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use(route);

const port = process.env.PORT || 3000;

initializePool()
  .then(() => {
    console.log("Database pool initialized");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize database pool:", err);
    process.exit(1);
  });
