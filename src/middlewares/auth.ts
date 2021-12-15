import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ENV_VARS } from "../index";

interface JWToken {
  id?: string;
  exp?: string;
  iat?: string;
}

function authorize(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Não autorizado" });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    if (ENV_VARS.TOKEN_SECRET) {
      const data = jwt.verify(token, ENV_VARS.TOKEN_SECRET);
      console.log(data);
      const { id } = data as JWToken;
      if (!id) {
        return res.status(401).json({ error: "Usuario não autorizado" });
      }
      req.user = id;
      return next();
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error });
  }
}

export { authorize };
