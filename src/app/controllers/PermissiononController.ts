import { getCustomRepository } from 'typeorm';
import { PermissionRepository } from '../../repositories/PermissionRepository';
import { Request, Response } from 'express';
import * as Yup from 'yup';

class PermissionControler {
      async store(req: Request, res: Response) {
            /*const shema = Yup.object().shape({
                  name: Yup.string().required(),
                  username: Yup.string().required(),
                  password: Yup.string().required(),
            });
            if (!(await shema.isValid(req.body))) {
                  return res.status(400).json({ message: 'invalid input!' });
            }*/
            try {
                  const { name, description } = req.body;
                  const permissionRepository =
                        getCustomRepository(PermissionRepository);
                  const existPermission = await permissionRepository.findOne({
                        name,
                  });

                  if (existPermission) {
                        return res.status(400).json({
                              message: 'permition already exist! 🙄',
                        });
                  }

                  const permission = permissionRepository.create({
                        name,
                        description,
                  });

                  const result = await permissionRepository.save(permission);
                  return res.status(201).json(result);
            } catch (error) {
                  return res.status(500).json({ err: '=>' + error });
            }
      }

      async index(req: Request, res: Response) {
            try {
                  const permissionRepository =
                        getCustomRepository(PermissionRepository);
                  const result = await permissionRepository.find();

                  return res.status(200).json(result);
            } catch (error) {
                  return res.status(500).json({ err: '=>' + error });
            }
      }
}
export default new PermissionControler();
