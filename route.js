import Express from "express";
import userController from "./controllers/user-controller.js";

const route = Express.Router();

route.post("/api/v1/users", userController.createUser);

export default route;
