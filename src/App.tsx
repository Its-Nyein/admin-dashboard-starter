import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { AuthProvider } from "./contexts/auth-context";
import { router } from "./lib/router/routes";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Toaster position="bottom-center" />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="admin-panel-theme">
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
