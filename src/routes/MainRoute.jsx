import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import React, { Suspense } from "react";

const Project = React.lazy(() => import("../pages/app/Project"));
const ProjectDetail = React.lazy(() => import("../pages/app/ProjectDetail"));

function MainRoute() {
  return (
    <>
      <Suspense
        fallback={
          <>
            <h1>Loading....</h1>
          </>
        }
      >
        <Toaster position="top-right" reverseOrder={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Project />} />
            <Route path="/project-detail/:id" element={<ProjectDetail />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default MainRoute;
