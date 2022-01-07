import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin:true
  },
  {
    name: 'Mogul',
    email: 'mogul@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Soma',
    email: 'soma@example.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users
