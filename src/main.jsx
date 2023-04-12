import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import Main from './components/Layout/Main';
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
          const categoryResponse = await fetch('category.json');
          const categoryData = await categoryResponse.json();
          const jobsResponse = await fetch('jobs.json');
          const jobsData = await jobsResponse.json();
      
          return {
            category: categoryData,
            jobs: jobsData,
          };
        },
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        // loader: ({params}) => fetch(`job.json/${params.id}`)
        loader: async ({params}) => {
          const res = await fetch("/jobs.json");
          const data = await res.json();
          const JobDetails = data.find(job => job.id == params.id);
          return JobDetails;
        }
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs></AppliedJobs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
