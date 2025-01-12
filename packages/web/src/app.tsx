/**
 * Entry point for the React application.
 *
 * This file sets up the root of the React application and renders it into the DOM.
 * It uses `StrictMode` to highlight potential problems in the application.
 *
 * The application is wrapped with `BrowserRouter` to enable client-side routing.
 * The `FileSystemRouter` component is used to handle routing based on the file system structure.
 *
 * Global styles are imported from `global.css`.
 *
 * The root element is obtained from the DOM using `getElementById`.
 * If the root element is found, the React application is rendered into it using `createRoot`.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import FileSystemRouter from '@/web/lib/router/FileSystemRouter';

import './global.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <FileSystemRouter />
      </BrowserRouter>
    </StrictMode>,
  );
}
