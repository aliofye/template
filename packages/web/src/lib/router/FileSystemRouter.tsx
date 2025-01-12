/**
 * This file sets up file-based routing using vite and react-router-dom.
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import toKebabCase from '../utils/toKebabCase';

const pages = import.meta.glob('../../pages/**/*.{ts,tsx}');

const getRoutes = () => {
  const routes = Object.keys(pages).map((path) => {
    const routePath = path
      .replace('../../pages', '') // Remove the "pages" prefix
      .replace(/\/index\.ts$/, '') // Remove "/index" for folder-based routing
      .replace(/\.tsx$/, '') // Remove ".tsx"
      .replace(/\[([^/]+)\]/g, ':$1'); // Convert dynamic segments

    // Lazy-load the component
    const Component = React.lazy(
      pages[path] as () => Promise<{ default: React.ComponentType }>,
    );

    return { path: toKebabCase(routePath) || '/', Component };
  });

  // Fallback route
  routes.push({
    path: '*',
    Component: React.lazy(() => import(`../../pages/404`)),
  });

  return routes;
};

const FileSystemRouter = () => {
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

export default FileSystemRouter;
