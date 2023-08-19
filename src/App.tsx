import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import { RootLayout } from './layouts'
import { Create, Dashboard, Profile } from './pages'
import { tasksLoader } from './pages/Dashboard.tsx'
import { createAction } from './pages/Create.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={tasksLoader} />
      <Route path="create" element={<Create />} action={createAction} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App
