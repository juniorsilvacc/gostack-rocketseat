import { Router } from 'express';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import { CreateAppointmentController } from '../controllers/CreateAppointmentController';

const appointmentsRouter = Router();

const createAppointmentController = new CreateAppointmentController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', createAppointmentController.handle);

export default appointmentsRouter;
