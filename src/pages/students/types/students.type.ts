export type Student = {
  id: number;
  name: string;
  age: number;
  grade: string;
  email: string;
  enrolledAt: string;
};

export type StudentResponse = Student[];

export type CreateStudentPayload = {
  name: string;
  age: number;
  grade: string;
  email: string;
  enrolledAt: string;
};

export type UpdateStudentPayload = Partial<CreateStudentPayload>;
