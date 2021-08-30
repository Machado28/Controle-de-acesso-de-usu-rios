import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { RoleRepository } from '../../repositories/RoleRepository';
import { PermissionRepository } from '../../repositories/PermissionRepository';

class RoleController {
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
                  const { name, description, permission } = req.body;
                  const roleRepository = getCustomRepository(RoleRepository);
                  const permissionRepository =
                        getCustomRepository(PermissionRepository);
                  const existRole = await roleRepository.findOne({ name });
                  const existPermission = await permissionRepository.findByIds(
                        permission,
                  );

                  if (existRole) {
                        return res.status(400).json({
                              message: 'role already exist! 🙄',
                        });
                  }

                  if (!existPermission) {
                        return res.status(400).json({
                              message: 'permition does not exist! 🙄',
                        });
                  }

                  const role = roleRepository.create({
                        name,
                        description,
                        permission: existPermission,
                  });

                  const result = await roleRepository.save(role);
                  return res.status(201).json(result);
            } catch (error) {
                  res.status(500).json({ err: '=>' + error });
            }
      }
      async index(req: Request, res: Response) {
            try {
                  const roleRepository = getCustomRepository(RoleRepository);

                  const result = await roleRepository.find();

                  return res.status(200).json(result);
            } catch (error) {
                  return res.status(500).json({ err: '=>' + error });
            }
      }
}
export default new RoleController();
