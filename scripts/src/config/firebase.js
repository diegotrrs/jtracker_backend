let firestoreDB;
let firebaseAuth;

let key = {
  "type": "service_account",
  "project_id": "jtrackerj",
  "private_key_id": "d9b16440f67c5e78d54ce229dcde82fd63c3aeea",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCxNtIVADTyo3m3\nxXwv71pNy4nMPa1il7oZvmMMGyLbj1TOnBceiToPc7RZ4f6yZmxJSFLGmKakEZlR\nFaBnKkC6aHYSIMWf1VnkNmwe64zY5Jh3aeZ+b1ADDBzRxWFMX967DvgkGXPgYdBx\nHe1H/fHJ9UYJOZdq8PiHN5DkAIb37bUlMQac62rXwPDGTmIh6e6g4KGriftrSe4a\nlFU0dM7t+Zx5AMZ1P8lKOmY12IRUXVU5rctwTPKqMvrK7LG21e86QsoNVx24PUn2\njVQ3leGrCQxemr9MZPTP8t6Plpb8w1ssmhdau0EcooAXvw2pMnwBo3fKFlWXvaFk\nppSXhFyHAgMBAAECggEAEDZHLtOnhGEPNBA1hb8cYEyUDSLBV2kxBcTkk8lxvWtV\n41blSI5eSOaZY7WoktKK6oNayz9Q02amw4O6emWjqUoALzVfTvl6MUYHSybaakcz\naY0/IGb3h2fWxRwNBCsrGarLaaYIc0kPhCGsQO9K7OJq51Ik94wW+GvNbgZcUpb+\nBP+ZR/nQS10Y6QpD5N4sK5y9SjSH1k7PcnA7xn6ffH0qrIEpSPUoSdQNqntllvdq\nMcIdPqELOuWwkdf2cOVj/b2vpJWML5ubKGCa+B627DlpBh3GQ97Z6ZZIxFEwar6o\ngLwXIp8CppHi/k295TbdEvQEu8PMcksSClJoBG/XqQKBgQDahNo4pOP9TdF4kO2V\nC/oxMbjl0j3REelGxMasM02jCO5d18XxnlwMU/apwhOhKPLjPUHQaPPhTzvawXvf\nCjwjGGot48fYpxKk3L2D2ABaOEQBGzqyQm+Li+cEqLpuSxpa4m2KW8EYRMF2zuIb\nn08qlz/o6UnV7eGIo+jVO1/4LwKBgQDPnEcUWr6NEHDgqjyo1C17DANAfqJvst4i\nXF8KQytmQlAL8GvsK06wFsPakxt0tsNF5Gl2E3DQdLHZEfqkZRZwjysmyx+Ub/H4\n8L7pbYnpyThnv1aON7SPp5GMCVHZEFHoFYs9nDADKIOQ7iPAs8Du6uL8AP4FKDRX\nNE63Zz/zKQKBgQCcwg1h8Tf0sOyCF0W4VH1I6SiBBc9+ueCk+eikA7HAMVn+TBod\n+MKDvYAHy8gVJrEHPxyFi6TYjuSbS423NTpq2srg3LSywTfouMnjWQL3tcFjIct7\nsZkffF9fwkLreEkRxblbNfNRm5FFz6f4tNIv9YzNYv2q0Bmo0hznSs7P1QKBgQCi\nVfOqcc5f5UQuGE84QDiT52+/hYWkS7uwKIRUNPOBkUagH010LOTpgdOBXNfyKlqE\nkzb3kfn7tdO/BXT0COtD9l7qhZfa7LHLUwwk4HcfbC0DyrR2ng486e1AD6WFUmKJ\nVBc9hJxyS8Kcl+ky7BtndhkorenyxF4w9gC7Hiv+CQKBgFyFhgZq/8e7eM5Nl9Ux\nHuZH/Sy99rKQKhsFcz7uROiSEEwpJ5Uej3OPoTClk0D8seiU47cJUd4jyEsjQ+mT\nuTa/QrBng5+69FySMMrp2WLWT7LbQsc3xo5cttxsFeCPIHmDhGsvXA2PM9t3yEOo\nnbjlFOugOCfzohmK+fDtJGxO\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-y9h2u@jtrackerj.iam.gserviceaccount.com",
  "client_id": "103880751266682166424",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-y9h2u%40jtrackerj.iam.gserviceaccount.com"
}


function initFirestore() {
  var admin = require("firebase-admin");

  admin.initializeApp({
    credential: admin.credential.cert(key),
    databaseURL: "https://jtrackerj.firebaseio.com"
  });

  const settings = { timestampsInSnapshots: true };

  firestoreDB = admin.firestore();
  firestoreDB.settings(settings);
  firebaseAuth = admin.auth();
}

initFirestore();

module.exports = {
  firestoreDB: firestoreDB,
  firebaseAuth: firebaseAuth
};
