import config from "config"

const APIurl = config.get("server.APIurl")

const key = config.get("server.key")

const URL = APIurl + "?apikey=" + key

async function makeServiceCall() {
  const APIdata = await fetch(URL, {
    method: "GET",
  })

  const currency = APIdata.json()
  return currency
}

export default makeServiceCall
