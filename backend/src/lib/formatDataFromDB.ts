type dataTypes = {
  code: string,
  value: number,
}

async function FormatDataFromDB(dataDB: dataTypes[]) {
  const dataJSON: any = {}
  for (const record of dataDB) {
    const codeCurrency = record.code
    const valueCurrency = record.value

    dataJSON[record.code] = { code: codeCurrency, value: valueCurrency }
  }

  return dataJSON
}

export default FormatDataFromDB
