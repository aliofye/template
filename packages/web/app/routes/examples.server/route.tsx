import { useRouteError, isRouteErrorResponse } from 'react-router';
import type { Route } from './+types/route';
import Example from './components/Example';
import { getMessage } from './loaders';

/**
 * Asynchronously loads a message from the server and returns its text content.
 * Uses getMessage() to fetch data and handles any potential errors.
 *
 * @async
 * @function clientLoader
 * @returns {Promise<string|null>} The message text if successful, null if an error occurs
 * @throws {Error} Logs but does not throw errors from getMessage()
 */
export const clientLoader = async () => {
  try {
    const { text } = await getMessage();
    return text;
  } catch (err) {
    console.error('Error loading data:', err);
    return null;
  }
};

/**
 * Error boundary component that handles different types of route errors
 * and displays appropriate error messages.
 *
 * @component
 * @returns {JSX.Element} Error message UI based on the type of error:
 * - For RouteErrorResponse: Shows status, statusText and error data
 * - For Error instances: Shows error stack trace
 * - For unknown errors: Shows generic error message
 */
export const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="content">
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="content">
        <h1>Error</h1>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
};

const ServerExample = ({ loaderData }: Route.ComponentProps) => {
  const text = loaderData;

  return (
    <div className="content">
      <h1>Server Example Page</h1>
      <p>This is an example page.</p>
      <Example message={text} />
    </div>
  );
};

export default ServerExample;
