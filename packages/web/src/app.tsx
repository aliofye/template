import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import FileSystemRouter from '@web/lib/router/FileSystemRouter';

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
