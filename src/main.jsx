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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
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
        path: 'review',
        element: <JobDetails> </JobDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
