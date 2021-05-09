const crypto = require("crypto")

const algorithm = 'aes-256-ctr';

const getSecretKey = (headers, defaultToken = false) => {
  if (defaultToken)
    return "defaultsecretkeydefaultsecretkey"
  return headers.authorization.slice(0, 32)
};

const encrypt = (text, {headers}, defaultToken) => {
  if (headers.encryption === "true") {
    const secretKey = getSecretKey(headers, defaultToken)
    const cipher = crypto.createCipheriv(algorithm, secretKey, Buffer.from(headers.iv, 'hex'));
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return encrypted.toString('hex')
  }
  return text
};

const decrypt = ({headers, body}, defaultToken) => {
  const secretKey = getSecretKey(headers, defaultToken)
  const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(headers.iv, 'hex'));
  const decrypted = Buffer.concat([decipher.update(Buffer.from(body.payload, 'hex')), decipher.final()]);
  return decrypted.toString();
};

module.exports = {encrypt, decrypt};

