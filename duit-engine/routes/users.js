import express from 'express';
const router = express.Router();

let users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com'
    },
];

router.get('/', (req, res) => {
  if (!users) {
    res.status(404).json({ message: 'Users not found' });
  }

  res.status(200).json(users);
});

export default router;