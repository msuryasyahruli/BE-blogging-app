const Pool = require("../config/db");

const createUser = (data) => {
  const { id_user, username, email, passwordHash } = data;
  return Pool.query(`INSERT INTO users(id_user,username,email,password) VALUES('${id_user}','${username}','${email}','${passwordHash}')`);
};

const findEmail = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users WHERE email='${email}'`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = {
  createUser,
  findEmail,
};
