import { Router } from "express";
import * as sessionController from "../controllers/session.controller";
import * as userController from "../controllers/user.controller";
import * as movieController from "../controllers/movie.controller";
import { authorize } from "../middlewares/auth";
import { paginate } from "../middlewares/paginate";

const apiRouter = Router();

//ROTAS GERAIS

apiRouter.get("", (req, res) => {
  return res.json({ message: "Nossa primeira rota api" });
});

//ROTAS DE USUARIOS

apiRouter.get("/users/id/:id", userController.view);
apiRouter.post("/users/new", userController.create);
apiRouter.post("/users/destroy/:id", userController.destroy);

//ROTAS DE SESSION
apiRouter.get("/session/", authorize, sessionController.index);
apiRouter.post("/session/new", sessionController.create);

/* ROTAS DE FILME */

apiRouter.get("/movies/id/:id", movieController.view);
apiRouter.get("/movies/search/:search", movieController.search);
apiRouter.post("/movies/new", movieController.create);

export { apiRouter };
