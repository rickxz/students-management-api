import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';

const router = Router();

router.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    
    if (await UserModel.findByUsername(username)) {
      return res.status(400).json({ message: '' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({ username, password: hashedPassword });

    res.status(201).json({ message: 'Usuário criado!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar usuário:', error });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findByUsername(username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Login Incorreto!' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '24h' });
    res.json({ 
      message: `Login efetuado pelo usuário ${user.username}`,
      jwt: token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro durante o login:', error });
  }
});

export default router;