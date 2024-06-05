import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/root-layout"
import HomePage from "./pages/home"

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
      ],
    },
  ])

  return <RouterProvider router={routes} />
}

export default App
