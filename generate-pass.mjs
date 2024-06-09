import bcrypt from "bcryptjs";

const pass = "sEnha004";

const salt = bcrypt.genSaltSync(10);

const hash = bcrypt.hashSync(pass, salt);

console.log('> Hash: ', hash)