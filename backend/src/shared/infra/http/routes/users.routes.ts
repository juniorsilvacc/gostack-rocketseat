import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateUserService from '@modules/users/services/CreateUserService';
import UploadUserAvatarService from '@modules/users/services/UploadUserAvatarService';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({ name, email, password });
  delete user.password;

  return response.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const uploadUserAvatar = new UploadUserAvatarService();

    const user = await uploadUserAvatar.execute({
      user_id: request.user.id,
      avatarFilaname: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

export default usersRouter;
