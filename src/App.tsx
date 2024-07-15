import {  FC } from 'react'
import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { Podcasts } from './pages/Podcasts'
import { ToastContainer } from 'react-toastify'
import { Podcast } from './pages/Podcast'
import { Episode } from './pages/Episode'

export const App:FC = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppLayout Component={Podcasts} />
      ),
    },
    {
      path: "/podcast/:id",
      element: (
        <AppLayout Component={Podcast} />
      ),
    },
    {
      path: "/podcast/:id/episode/:id_episode",
      element: (
        <AppLayout Component={Episode} />
      ),
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    }
  ]);

  return (
    <div className='flex h-full w-full'>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  )
}
