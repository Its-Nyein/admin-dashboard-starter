import { ProtectedRoute } from "@/components/protected-route";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { LoginPage } from "@/pages/auth/login";
import { DashboardPage } from "@/pages/dashboard";
import NotFound from "@/pages/not-found";
import StudentPage from "@/pages/students";
import { createBrowserRouter, Navigate } from "react-router-dom";

const ProtectedDashboard = () => (
  <ProtectedRoute>
    <DashboardLayout />
  </ProtectedRoute>
);

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <ProtectedDashboard />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "students",
        element: <StudentPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
