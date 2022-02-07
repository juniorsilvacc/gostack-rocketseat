import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

import { Request, Response } from 'express';

import { container } from 'tsyringe';

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserService = container.resolve(AuthenticateUserService);

    const authenticated = await authenticateUserService.execute({
      email,
      password,
    });

    return response.status(200).json(authenticated);
  }
}

export { AuthenticateUserController };
