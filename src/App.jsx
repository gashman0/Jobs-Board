import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJob from './pages/AddJob';
import JobsDetailPage, { jobLoader } from './pages/JobsDetailPage';
import NotFound from './pages/NotFound';








const App = () => {

    const addJob = async ( newJob ) => { 
        const res = await fetch('/api/jobs', {
            method: 'POST', 
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob),

        });
        return;
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/jobs' element={<JobsPage />} />
                <Route path='/add-job' element={<AddJob addJobSubmit={addJob}/>} />
                <Route path='/jobs/:id' element={<JobsDetailPage />} loader={ jobLoader }/>
                <Route path='*' element={<NotFound />} />
            </Route>
        )
    );

  return <RouterProvider router={router} />;
};

export default App;