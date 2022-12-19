import { getHash } from "../lib/getHash"
import { log as logger } from "../lib/logger"
import { user } from "../models/postgreSQL/userModel"

export async function authenticateUser(login: string, password: string) {
  const hashPassword = getHash(password)
  const response = await user.findOne({
    where: { login: login, password: hashPassword },
    raw: true,
  })
  logger.info(`${hashPassword} ${response}`)
  return Boolean(response)
}

export async function isAccountExist(login: string) {
  const response = await user.findOne({
    where: { login: login },
    raw: true,
  })

  return Boolean(response)
}

export async function getUser(login: string) {
  return await user.findOne({
    where: { login: login },
    raw: true,
  })
}

export async function createNewUser(
  login: string,
  password: string,
  fullName: string,
  country: string,
  phone: string,
  image: string
) {
  password = getHash(password)
  logger.info(`Create new user`)
  await user.create({
    login: login,
    password: password,
    full_name: fullName,
    country: country,
    phone: phone,
    image: image,
  })
}
