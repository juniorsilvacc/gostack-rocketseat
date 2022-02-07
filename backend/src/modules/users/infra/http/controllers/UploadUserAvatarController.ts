import UploadUserAvatarService from '@modules/users/services/UploadUserAvatarService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UploadUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const uploadUserAvatar = container.resolve(UploadUserAvatarService);

    const user = await uploadUserAvatar.execute({
      user_id: request.user.id,
      avatarFilaname: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  }
}

export { UploadUserAvatarController };
