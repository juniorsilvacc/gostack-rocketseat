import { CreateUserService } from '@modules/users/services/CreateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const createuser = await createUserService.execute({
      name,
      email,
      password,
    });

    delete createuser.password;

    return response.status(201).json(createuser);
  }
}

export { CreateUserController };
