import { IStudent, IStudentInput, IStudentAverage, IStudentApproval } from '../interfaces/student.interface';

class StudentModel {
  private static students: IStudent[] = [
    {
      id: 1,
      nome: 'Asdrubal',
      ra: '11111',
      nota1: 8.5,
      nota2: 9.5,
    },
    {
      id: 2,
      nome: "Lupita",
      ra: "22222",
      nota1: 7.5,
      nota2: 7,
    },
    {
      id: 3,
      nome: "Zoroastro",
      ra: "33333",
      nota1: 3,
      nota2: 4
    }
  ];

  static async getAll(): Promise<IStudent[]> {
    return this.students;
  }

  static async getById(id: number): Promise<IStudent | undefined> {
    return this.students.find(student => student.id === id);
  }

  static async create(studentData: IStudentInput): Promise<IStudent> {
    const student: IStudent = {
      id: this.students.length + 1,
      ...studentData
    };
    this.students.push(student);
    return student;
  }

  static async update(id: number, studentData: Partial<IStudentInput>): Promise<IStudent | null> {
    const index = this.students.findIndex(student => student.id === id);
    if (index === -1) return null;
    
    this.students[index] = { ...this.students[index], ...studentData };
    return this.students[index];
  }

  static async delete(id: number): Promise<boolean> {
    const index = this.students.findIndex(student => student.id === id);
    if (index === -1) return false;
    
    this.students.splice(index, 1);
    return true;
  }

  static async getAverages(): Promise<IStudentAverage[]> {
    return this.students.map(student => ({
      nome: student.nome,
      media: (student.nota1 + student.nota2) / 2
    }));
  }

  static async getApprovalStatus(): Promise<IStudentApproval[]> {
    return this.students.map(student => ({
      nome: student.nome,
      status: (student.nota1 + student.nota2) / 2 >= 6 ? 'aprovado' : 'reprovado'
    }));
  }
}

export default StudentModel;