export async function createNewUser(login: string, password: string) {
  password = getHash(password)
  logger.info(`Create new user with login - ${login}, password - ${password}`)
  await user.create({
    login: login,
    password: password,
  })
}
