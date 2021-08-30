import * as Yup from 'yup';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../../repositories/UserRepository';
import { Request, Response } from 'express';
import { hash } from 'bcrypt';
import { User_controller } from '.';

class UserController {
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
                  const userRepository = getCustomRepository(UserRepository);
                  const { name, username, password } = req.body;
                  const existUser = await userRepository.findOne({ username });

                  if (existUser) {
                        return res
                              .status(400)
                              .json({ message: 'user already exists☹' });
                  }
                  const passwordHashed = await hash(password, 8);
                  const newUser = userRepository.create({
                        name,
                        username,
                        password: passwordHashed,
                  });
                  const user = await userRepository.save(newUser);
                  delete user.password;

                  return res.status(201).json({ user });
            } catch (error) {
                  return res.status(500).json({ err: '=>' + error });
            }
      }
}

export default new UserController();
