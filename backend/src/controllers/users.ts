import { Request, Response } from "express"
import config from "config"
import {authenticateUser, isAccountExist, createNewUser as createNewUserInDB, getUser } from "../services/user-services"
import jwt from "jsonwebtoken";
import { log as logger } from "../lib/logger"

interface IuserData {
  login: string,
  password: string,

}

interface infromationForUserCreation extends IuserData {
  fullName: string, 
  country: string, 
  phone: string,
  image: string,
}


const secrete: string = config.get("hash.secreteKey")

async function checkUser(login:string, password:string) : Promise<undefined | {token: string}> {
    if (await authenticateUser(login, password)) {
      const token = jwt.sign(login, secrete)
      return { token: token }
    } else {
      logger.warn(`Account with login - ${login}, password - ${password} not found`)
      return undefined 
    }
}

export async function loginController(req: Request, res: Response) {
  try {
    const {login, password}: IuserData = req.body

    const resault = await checkUser(login, password);
    if (resault) {
      res.status(200).send(resault);
      return;
    }
    res.status(404).send({message: "Account with this data not found"})
  } catch (error) {
    logger.error(`Error in login path. ${(error as Error).name} | ${(error as Error).message}`)
    res.status(500).send({ errorMessage: error })
  }
}


function createJWToken(login: string) {
  return jwt.sign(login, secrete)
} 


export async function createNewUser(req: Request, res: Response) {
  try {
    const {login, password, fullName, country, phone, image}: infromationForUserCreation = req.body 

    if (await isAccountExist(login)) {
      logger.warn(`Account with login - ${login}, password - ${password} already exist`)
      res.status(406).json({ message: "Account already exist" })
      return;
    }
    logger.info("Account doesn't exist") 
    const token = createJWToken(req.body.login);
    await createNewUserInDB(login, password, fullName, country, phone, image);
    res.status(200).json({ token: token })
  } catch (error) {
    logger.error(`Error in sign up path. ${(error as Error).name} | ${(error as Error).message}`)
    res.status(500).send({ error })
  }
}


export interface CustomRequest extends Request {
  token: string;
}

export async function getInfo(req: Request, res: Response) {
  try {
       const login = (req as CustomRequest).token;
    if (await isAccountExist(login)) {
      logger.info(`Favorits record for token exist`)
      res.status(200).send(await getUser(login))
      return;
    } 
      logger.warn(`Account with token -  not found`)
      res.status(404).json({ errorMessage: "Not found account with this parameters" })
  } catch (error) {
    logger.error(`Error when systemt try get user infromation | ${(error as Error).name} | ${(error as Error).message}`)
    res.status(500).send({ error })
  }
}
