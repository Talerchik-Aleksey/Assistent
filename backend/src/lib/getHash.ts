import config from "config"
import crypto from "crypto"

const secrete: string = config.get("hash.secreteKey")

export function getHash(stringData: string): string {
  return crypto.createHmac("sha256", secrete).update(stringData).digest("hex")
}
