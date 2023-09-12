/**
 * Add New User
 */
const addUser = `
  INSERT INTO users(
    firstname,
    lastname,
    username,
    email,
    password,
    role
  )
  VALUES ($1,$2,$3,$4) RETURNING id, firstname, lastname, username, email, role, created_at
`;

const findUserByEmail = `
 SELECT id, firstname, lastname, username, email, role, password FROM users WHERE email=$1
`
const findUserByUsername = `
 SELECT id, firstname, lastname, username, email, role, password FROM users WHERE username=$1
`
module.exports = {
    addUser,
    findUserByEmail,
    findUserByUsername
}
