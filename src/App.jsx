import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJob from './pages/AddJob';
import JobsDetailPage, { jobLoader } from './pages/JobsDetailPage';
import NotFound from './pages/NotFound';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  // Replace with your actual MockAPI URL
  const MOCKAPI_URL = "https://686bc6ba14219674dcc60efc.mockapi.io/jobs";

  // Flatten job data before sending to MockAPI
  const flattenJob = (job) => {
    return {
      ...job,
      companyName: job.company?.name || "",
      companyDescription: job.company?.description || "",
      companyEmail: job.company?.email || job.company?.contactEmail || "",
      companyPhone: job.company?.phone || job.company?.contactPhone || ""
    };
  };

  // Reconstruct nested company object when receiving data
  const reconstructJob = (job) => {
    return {
      ...job,
      company: {
        name: job.companyName,
        description: job.companyDescription,
        email: job.companyEmail,
        phone: job.companyPhone
      }
    };
  };

  // Add new job
  const addJob = async (newJob) => {
    const flattenedJob = flattenJob(newJob);
    await fetch(MOCKAPI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(flattenedJob),
    });
  };

  // Delete job
  const deleteJob = async (id) => {
    await fetch(`${MOCKAPI_URL}/${id}`, {
      method: 'DELETE',
    });
  };

  // Update job
  const updateJob = async (job) => {
    const flattenedJob = flattenJob(job);
    await fetch(`${MOCKAPI_URL}/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(flattenedJob),
    });
  };

  // Updated jobLoader for MockAPI
  const mockApiJobLoader = async ({ params }) => {
    const response = await fetch(`${MOCKAPI_URL}/${params.id}`);
    const job = await response.json();
    return reconstructJob(job);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJob addJobSubmit={addJob} />} />
        <Route 
          path='/jobs/:id' 
          element={<JobsDetailPage deleteJob={deleteJob} />} 
          loader={mockApiJobLoader}
        />
        <Route 
          path='/edit-job/:id' 
          element={<EditJobPage updateJobSubmit={updateJob} />} 
          loader={mockApiJobLoader}
        />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;