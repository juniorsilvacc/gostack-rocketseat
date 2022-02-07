import { CreateAppointmentService } from '@modules/appointments/services/CreateAppointmentService';
import { parseISO } from 'date-fns';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateAppointmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointmentService = container.resolve(
      CreateAppointmentService,
    );

    const appointment = await createAppointmentService.execute({
      date: parsedDate,
      provider_id,
    });

    return response.status(201).json(appointment);
  }
}

export { CreateAppointmentController };
