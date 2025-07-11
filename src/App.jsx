import React, { useState, useEffect } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJob from './pages/AddJob';
import JobsDetailPage from './pages/JobsDetailPage';
import NotFound from './pages/NotFound';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  const MOCKAPI_URL = "https://686bc6ba14219674dcc60efc.mockapi.io/jobs";
  const [jobs, setJobs] = useState([]);

  // Load initial data
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(MOCKAPI_URL);
        const data = await res.json();
        setJobs(data.map(job => reconstructJob(job)));
      } catch (error) {
        console.error("Failed to load jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  // Convert to MockAPI format
  const flattenJob = (job) => {
    return {
      ...job,
      companyName: job.company?.name || job.companyName || "",
      companyDescription: job.company?.description || job.companyDescription || "",
      companyEmail: job.company?.email || job.companyEmail || "",
      companyPhone: job.company?.phone || job.companyPhone || ""
    };
  };

  // Convert from MockAPI format
  const reconstructJob = (job) => {
    return {
      ...job,
      company: {
        name: job.companyName || job.company?.name || "",
        description: job.companyDescription || job.company?.description || "",
        email: job.companyEmail || job.company?.email || "",
        phone: job.companyPhone || job.company?.phone || ""
      }
    };
  };

  // Add new job
  const addJob = async (newJob) => {
    try {
      const flattenedJob = flattenJob(newJob);
      const res = await fetch(MOCKAPI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(flattenedJob)
      });
      const data = await res.json();
      setJobs(prev => [...prev, reconstructJob(data)]);
      return data;
    } catch (error) {
      console.error("Add job error:", error);
      throw error;
    }
  };

  // Delete job
  const deleteJob = async (id) => {
    try {
      await fetch(`${MOCKAPI_URL}/${id}`, {
        method: 'DELETE'
      });
      setJobs(prev => prev.filter(job => job.id !== id));
    } catch (error) {
      console.error("Delete job error:", error);
      throw error;
    }
  };

  // Update job
  const updateJob = async (job) => {
    try {
      const flattenedJob = flattenJob(job);
      const res = await fetch(`${MOCKAPI_URL}/${job.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(flattenedJob)
      });
      const data = await res.json();
      setJobs(prev => prev.map(j => 
        j.id === job.id ? reconstructJob(data) : j
      ));
      return data;
    } catch (error) {
      console.error("Update job error:", error);
      throw error;
    }
  };

  // Job loader for routes
  const jobLoader = async ({ params }) => {
    try {
      const res = await fetch(`${MOCKAPI_URL}/${params.id}`);
      const job = await res.json();
      return reconstructJob(job);
    } catch (error) {
      console.error("Loader error:", error);
      throw error;
    }
  };

  // Router configuration
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage jobs={jobs} />} />
        <Route path="/jobs" element={<JobsPage jobs={jobs} />} />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route
          path="/jobs/:id"
          element={<JobsDetailPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;