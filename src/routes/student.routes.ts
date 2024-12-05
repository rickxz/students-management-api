import { Router, Request, Response } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import StudentModel from '../models/student.model';

const router = Router();

router.use('/alunos', authMiddleware);

router.get('/alunos', async (req: Request, res: Response) => {
  const students = await StudentModel.getAll();
  res.json(students);
});


router.post('/alunos', async (req: Request, res: Response) => {
  const { nome, ra, nota1, nota2 } = req.body;
  
  if (!nome || !ra || nota1 === undefined || nota2 === undefined) {
    return res.status(400).json({ message: 'Campos obrigatórios em falta' });
  }

  const student = await StudentModel.create({ nome, ra, nota1, nota2 });
  res.status(201).json({ message: 'Aluno criado com sucesso!' });
});


router.get('/alunos/medias', async (req: Request, res: Response) => {
  const averages = await StudentModel.getAverages();
  res.json(averages);
});


router.get('/alunos/aprovados', async (req: Request, res: Response) => {
  const approvalStatus = await StudentModel.getApprovalStatus();
  res.json(approvalStatus);
});


router.get('/alunos/:id', async (req: Request, res: Response) => {
  const student = await StudentModel.getById(parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ message: 'Aluno não encontrado!' });
  }
  res.json(student);
});


router.put('/alunos/:id', async (req: Request, res: Response) => {
  const student = await StudentModel.update(parseInt(req.params.id), req.body);
  if (!student) {
    return res.status(404).json({ message: 'Aluno não encontrado!' });
  }
  res.json(student);
});


router.delete('/alunos/:id', async (req: Request, res: Response) => {
  const success = await StudentModel.delete(parseInt(req.params.id));
  if (!success) {
    return res.status(404).json({ message: 'Aluno não encontrado!' });
  }
  res.status(200).json({ message: 'Aluno removido!' });
});


export default router;