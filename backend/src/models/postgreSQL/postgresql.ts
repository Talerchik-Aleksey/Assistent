import { Client } from "pg"
import config from "config"

const user: string = config.get("postgreSQL.user"),
  host: string = config.get("postgreSQL.host"),
  database: string = config.get("postgreSQL.database"),
  password: string = config.get("postgreSQL.password"),
  port: number = config.get("postgreSQL.port")

const client = new Client({
  user: user,
  host: host,
  database: database,
  password: password,
  port: port,
})

client.connect()

const returning = " RETURNING *"

async function insertPostgre(
  queryString: string,
  values?: Array<string | Date | number>
) {
  try {
    const res = await client.query(queryString + returning, values)

    return res.rows[0]
  } catch (err) {
    return new Error(`Error when script try insert data. Message ${err}`)
  }
}

async function selectPostgre(
  queryString: string,
  values?: Array<string | Date | number>
) {
  try {
    const res = await client.query(queryString, values)

    return res.rows
  } catch (err) {
    return `Error when script try select data. ${err}`
  }
}

async function updatePostgre(
  queryString: string,
  values?: Array<string | Date | number>
) {
  try {
    const res = await client.query(queryString + returning, values)

    return res.rows.length
  } catch (err) {
    return `Error when script try update data. ${err}`
  }
}

async function deletePostgre(
  queryString: string,
  values?: Array<string | Date | number>
) {
  try {
    const res = await client.query(queryString + returning, values)

    return res.rows.length
  } catch (err) {
    return `Error when script try delete data. ${err}`
  }
}

export { insertPostgre, deletePostgre, updatePostgre, selectPostgre }
