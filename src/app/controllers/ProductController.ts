import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../../repositories/ProductRepository';
import { Request, Response } from 'express';
import * as Yup from 'yup';

class ProductControler {
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
                  const productRepository =
                        getCustomRepository(ProductRepository);
                  const existProduct = await productRepository.findOne({
                        name,
                  });

                  if (existProduct) {
                        return res.status(400).json({
                              message: 'product already exist! 🙄',
                        });
                  }

                  const product = productRepository.create({
                        name,
                        description,
                  });

                  const result = await productRepository.save(product);
                  return res.status(201).json(result);
            } catch (error) {
                  return res.status(500).json({ err: '=>' + error });
            }
      }

      async index(req: Request, res: Response) {
            try {
                  const productRepository =
                        getCustomRepository(ProductRepository);
                  const result = await productRepository.find();

                  return res.status(200).json(result);
            } catch (error) {
                  return res.status(500).json({ err: '=>' + error });
            }
      }
}
export default new ProductControler();
