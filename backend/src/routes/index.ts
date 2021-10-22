import { Router } from 'express';

const router = Router();

router.post('/users', (request, response) => {
  const { name, email } = request.body;

  const users = {
    name,
    email,
  };

  return response.json({ users });
});

export default router;
