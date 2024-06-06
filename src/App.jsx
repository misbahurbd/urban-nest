import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Toaster } from "sonner"
import RootLayout from "./layouts/root-layout"
import HomePage from "./pages/home"
import AuthProvider from "./providers/auth-provider"
import AuthLayout from "./layouts/auth-layout"
import RegisterPage from "./pages/register"
import LoginPage from "./pages/login"
import ProfilePage from "./pages/profile"
import PrivateLayout from "./layouts/private-layout"
import Property from "./pages/property"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          element: <PrivateLayout />,
          children: [
            {
              path: "/profile",
              element: <ProfilePage />,
            },
            {
              path: "/properties/:id",
              element: <Property />,
            },
          ],
        },
        {
          element: <AuthLayout />,
          children: [
            {
              path: "/register",
              element: <RegisterPage />,
            },
            {
              path: "/login",
              element: <LoginPage />,
            },
          ],
        },
      ],
    },
  ])

  return (
    <AuthProvider>
      <Toaster position="bottom-center" />
      <RouterProvider router={routes} />
    </AuthProvider>
  )
}

export default App
