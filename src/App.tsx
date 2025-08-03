import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { AuthProvider } from "./contexts/auth-context";
import { router } from "./lib/router/routes";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="admin-panel-theme">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
