/**
 * This file sets up file-based routing using vite and react-router-dom.
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Dynamically import all files in the "pages" directory
const pages = import.meta.glob(`../src/pages/**/*.tsx`);

// Transform file paths into routes
const getRoutes = () => {
  // Dynamic routes
  const routes = Object.keys(pages).map((path) => {
    const routePath = path
      .replace('../src/pages', '') // Remove the "pages" prefix
      .replace(/\/index\.tsx$/, '') // Remove "/index" for folder-based routing
      .replace(/\.tsx$/, '') // Remove ".tsx"
      .replace(/\[([^/]+)\]/g, ':$1'); // Convert dynamic segments

    // Lazy-load the component
    const Component = React.lazy(
      pages[path] as () => Promise<{ default: React.ComponentType }>,
    );

    return { path: routePath || '/', Component };
  });

  // Fallback route
  routes.push({
    path: '*',
    Component: React.lazy(() => import(`../src/pages/404`)),
  });

  return routes;
};

const AppRoutes = () => {
  const routes = getRoutes();

  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Component />
            </React.Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
