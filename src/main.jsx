import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Root from './Root'
import Home from './components/Home'
import PlacesToVisit from './components/PlacesToVisit'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Home/>}></Route>
      <Route path='PlacesToVisit' element={<PlacesToVisit/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
