import axios from "axios";
import { toast } from "sonner";
import type {
  CreateStudentPayload,
  Student,
  StudentResponse,
  UpdateStudentPayload,
} from "../types/students.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// this is just a demo we should handle better for real application
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const fetchAllStudents = async (): Promise<StudentResponse> => {
  const res = await apiClient.get<StudentResponse>("/students");
  return res.data;
};

export const useFetchAllStudents = () => {
  return useQuery<StudentResponse, Error>({
    queryKey: ["students"],
    queryFn: fetchAllStudents,
  });
};

export const fetchStudentByID = async (id: number): Promise<Student> => {
  const res = await apiClient.get(`/students/${id}`);
  return res.data;
};

export const useFetchStudentByID = (id: number) => {
  return useQuery<Student, Error>({
    queryKey: ["student", id],
    queryFn: () => fetchStudentByID(id),
    enabled: !!id,
  });
};

export const createStudent = async (student: CreateStudentPayload): Promise<Student> => {
  const res = await apiClient.post<Student>("/students", student);
  return res.data;
};

export const useCreateStudent = () => {
  const queryClient = useQueryClient();

  return useMutation<Student, Error, CreateStudentPayload>({
    mutationFn: (newStudent: CreateStudentPayload) => createStudent(newStudent),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      toast.success("Student created successfully");
    },
    onError: error => {
      console.error("Error creating student:", error);
      toast.error("Failed to create student");
    },
  });
};

export const updateStudent = async (
  id: number,
  updatedStudent: UpdateStudentPayload
): Promise<Student> => {
  const res = await apiClient.put<Student>(`/students/${id}`, updatedStudent);
  return res.data;
};

export const useUpdateStudent = () => {
  const queryClient = useQueryClient();

  return useMutation<Student, Error, { id: number; updatedStudent: UpdateStudentPayload }>({
    mutationFn: ({ id, updatedStudent }: { id: number; updatedStudent: UpdateStudentPayload }) =>
      updateStudent(id, updatedStudent),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      queryClient.invalidateQueries({ queryKey: ["student", variables.id] });
      toast.success("Student updated successfully");
    },
    onError: error => {
      console.error("Error updating student:", error);
      toast.error("Failed to update student");
    },
  });
};

export const deleteStudent = async (id: number) => {
  const response = await apiClient.delete(`/students/${id}`);
  return response.data;
};

export const useDeleteStudent = () => {
  const queryClient = useQueryClient();
  return useMutation<unknown, Error, number>({
    mutationFn: (id: number) => deleteStudent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      toast.success("Student deleted successfully");
    },
    onError: error => {
      console.error("Error deleting student:", error);
      toast.error("Failed to delete student");
    },
  });
};
