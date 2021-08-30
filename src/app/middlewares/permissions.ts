import { Request, Response, NextFunction } from 'express';
import { decode } from 'jsonwebtoken';
import { UserRepository } from '../../repositories/UserRepository';
import { getCustomRepository } from 'typeorm';
import { User } from '../models/User';

async function decoder(req: Request): Promise<User> {
      const authHeader = req.headers.authorization || '';
      const [, token] = authHeader?.split(' ');
      const payload = decode(token);
      const userRepository = getCustomRepository(UserRepository);

      const user = await userRepository.findOne(payload?.substr, {
            relations: ['role'],
      });

      return user;
}

export function is(role: String[]) {
      const roleAuthorized = async (
            req: Request,
            res: Response,
            next: NextFunction,
      ) => {
            const user = await decoder(req);
            const userRole = user?.role.map(role => role.name);

            const existsRoles = userRole?.some(r => role.includes(r));

            if (existsRoles) {
                  return next();
            }
            return res.status(401).json({ message: 'not authorized!🚫' });
      };
      return roleAuthorized;
}
