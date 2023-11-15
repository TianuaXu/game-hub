import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout"
import HomePage from "./pages/HomePage"
import GameDetailPage from "./pages/GameDetailPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // index: true means this is the default route
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/:id",
        element: <GameDetailPage />,
      },
    ],
  },
])

export default router
