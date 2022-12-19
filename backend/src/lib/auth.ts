import config from "config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { log } from "./logger";

const SECRETE: string = config.get("hash.secreteKey")

export interface CustomRequest extends Request {
  token: string;
}

export async function auth(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new Error();
    }
    const decoded = jwt.verify(token, SECRETE) as string;
    (req as CustomRequest).token = decoded;

    next();
  } catch (err) {
    res.status(401).send('Please authenticate');
  }
}
