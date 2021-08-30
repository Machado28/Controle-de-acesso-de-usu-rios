import { Response, Request } from 'express';
import { Router } from 'express';
import { data } from './datas.routes';
import { is } from './app/middlewares/permissions';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
      res.status(200).json({ message: 'it´s well 🎉🎉✔' });
});

data.map(item => {
      routes.post(`${item.url}`, is(['admin']), item.controller);
      routes.get(`${item.url}`, item.controller);
});
export { routes };
