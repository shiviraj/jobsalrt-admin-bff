import BackendAPI from "../../api/backendAPI";
import {encrypt} from "../../crypto/crypto";

const API = new BackendAPI(process.env.BACKEND_URL || "http://localhost:8080")

const sendData = (body, req, defaultToken) => {
  return {payload: encrypt(JSON.stringify(body), req, defaultToken)}
};

const removeEmptyListFromObject = (obj) => {
  if (typeof obj !== "object") return obj
  return Object.keys(obj).reduce((object, key) => {
    if (!obj[key].toString()) return object
    object[key] = obj[key]
    return object
  }, {})
}

export {API, sendData, removeEmptyListFromObject}
