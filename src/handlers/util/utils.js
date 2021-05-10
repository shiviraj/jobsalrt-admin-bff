import BackendAPI from "../../api/backendAPI";
import {encrypt} from "../../crypto/crypto";

const API = new BackendAPI(process.env.BACKEND_URL || "http://localhost:8080")

const sendData = (body, req, defaultToken) => {
  return {payload: encrypt(JSON.stringify(body), req, defaultToken)}
};

export {API, sendData}
