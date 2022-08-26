const jsforce = require("jsforce");
require("dotenv").config();

const { SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_TOKEN } = process.env;

const conn = new jsforce.Connection({
  loginUrl: SF_LOGIN_URL,
});

conn.login(SF_USERNAME, SF_PASSWORD + SF_TOKEN, (err, userInfo) => {
  if (err) {
    console.log(err);
  } else {
    console.log("user_id:  " + userInfo.id);
    console.log("organization_id:  " + userInfo.organizationId);
  }
});

module.exports = conn;
