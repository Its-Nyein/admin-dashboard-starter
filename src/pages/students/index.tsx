"use client";
import { DataTable } from "@/components/data-table";
import { Card, CardContent } from "@/components/ui/card";
import type { Student } from "./types/students.type";
import { studentColumns } from "@/components/columns/student-columns";

const studentData: Student[] = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 14,
    grade: "8th",
    email: "alice@example.com",
    enrolledAt: "2024-06-15T09:00:00Z",
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 12,
    grade: "6th",
    email: "bob@example.com",
    enrolledAt: "2024-01-10T10:30:00Z",
  },
  {
    id: 3,
    name: "Clara Green",
    age: 17,
    grade: "11th",
    email: "clara@example.com",
    enrolledAt: "2023-09-01T08:45:00Z",
  },
  {
    id: 4,
    name: "Daniel Lee",
    age: 15,
    grade: "9th",
    email: "daniel@example.com",
    enrolledAt: "2023-07-20T11:15:00Z",
  },
  {
    id: 5,
    name: "Emma Brown",
    age: 13,
    grade: "7th",
    email: "emma@example.com",
    enrolledAt: "2024-03-18T14:00:00Z",
  },
];

export default function StudentPage() {
  return (
    <div className="container mx-auto py-7">
      <Card>
        <CardContent>
          <DataTable
            columns={studentColumns}
            data={studentData}
            pageSize={10}
            searchKey={["name"]}
            searchPlaceholder="Search students..."
            addButtonNavigatePath="/students/add-students"
          />
        </CardContent>
      </Card>
    </div>
  );
}
