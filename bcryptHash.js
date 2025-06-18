const bcrypt = require('bcrypt');

bcrypt.hash("admin", 10)
  .then((hashed) => {
    console.log("Hashed password :", hashed);
  })
  .catch((err) => console.error(err));
