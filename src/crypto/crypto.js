const crypto = require("crypto")

const algorithm = 'aes-256-ctr';

const getSecretKey = () => {
  return "defaultsecretkeydefaultsecretkey"
};

const encrypt = (payload, iv) => {
  const secretKey = getSecretKey()
  const cipher = crypto.createCipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));
  const encrypted = Buffer.concat([cipher.update(JSON.stringify(payload)), cipher.final()]);
  return encrypted.toString('hex')
};

const decrypt = (content, iv) => {
  const secretKey = getSecretKey()
  const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));

  const decrypted = Buffer.concat([decipher.update(Buffer.from(content, 'hex')), decipher.final()]);

  return decrypted.toString();
};

module.exports = {encrypt, decrypt};

