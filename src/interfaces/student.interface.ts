export interface IStudent {
  id: number;
  nome: string;
  ra: string;
  nota1: number;
  nota2: number;
}

export interface IStudentInput {
  nome: string;
  ra: string;
  nota1: number;
  nota2: number;
}

export interface IStudentAverage {
  nome: string;
  media: number;
}

export interface IStudentApproval {
  nome: string;
  status: 'aprovado' | 'reprovado';
}