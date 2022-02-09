import bcrypt from 'bcryptjs';

const users = [
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: bcrypt.hashSync('asw123456', 10),
      isAdmin: true,
    },
    {
      name: 'John Doe',
      email: 'john@example.com',
      password: bcrypt.hashSync('dedef123456', 10),
    },
    {
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: bcrypt.hashSync('efrff123456', 10),
    },
  ]
  
  export default users