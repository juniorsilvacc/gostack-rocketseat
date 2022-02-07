import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { CreateUserController } from '@modules/users/infra/http/controllers/CreateUserController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import { UploadUserAvatarController } from '../controllers/UploadUserAvatarController';

const usersRouter = Router();
const upload = multer(uploadConfig);

const createUserController = new CreateUserController();
const uploadUserAvatarController = new UploadUserAvatarController();

usersRouter.post('/', createUserController.handle);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  uploadUserAvatarController.handle,
);

export { usersRouter };
