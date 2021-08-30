import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/UserRepository';
import { getCustomRepository } from 'typeorm';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

class SessionController {
      async store(req: Request, res: Response) {
            const { username, password } = req.body;

            const userRepository = getCustomRepository(UserRepository);

            const existUser = await userRepository.findOne({ username });

            if (!existUser) {
                  return res.status(404).json({ message: 'user not found!' });
            }

            const matchPassword = await compare(password, existUser.password);
            if (!matchPassword) {
                  return res
                        .status(400)
                        .json({ err: 'incorrect password or username' });
            }

            const token = sign({}, '70ghh1n77d470ghh1n77d470ghh1n7', {
                  subject: existUser.id,
                  expiresIn: '1d',
            });

            return res.status(200).json({ token, existUser });
      }
}
export default new SessionController();
