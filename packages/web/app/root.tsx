import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import ExampleNavbar from '@/web/components/ExampleNavbar';
import type { Route } from './+types/root';
import stylesheet from './app.css?url';

export const links: Route.LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Template" />
        <meta name="description" content="Add Description" />
        <meta name="keywords" content="Add Keywords" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Add Your Name" />

        <meta property="og:title" content="Template" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://AddYourWebsite.com" />
        <meta property="og:description" content="Add Description" />
        <meta property="og:image" content="./app/assets/react.svg" />
        <title>Add Description</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The page you are looking for does not exist.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="content">
      <h1 className="gradient">{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
};

const Root = () => {
  return (
    <div>
      <ExampleNavbar />
      <Outlet />
    </div>
  );
};

export default Root;
