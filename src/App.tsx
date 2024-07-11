import {  FC } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayout'
import { Podcasts } from './pages/Podcasts'
import { ToastContainer } from 'react-toastify'
import { Podcast } from './pages/Podcast'

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
  ]);

  return (
    <div className='flex h-full w-full'>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  )
}
