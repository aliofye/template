/**
 * @fileoverview Workaround for a bug in Bun and react-dom where `react-dom/server.bun.js`
 * does not export `renderToPipeableStream`.
 *
 * This workaround is a temporary measure and will be removed once the bug is resolved.
 *
 * @version 1.0.0
 * @date 2025-01-16
 * @author Ali Morshid
 *
 */

import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  );
});
