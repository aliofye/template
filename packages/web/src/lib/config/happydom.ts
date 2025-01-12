/**
 * @fileoverview This file registers HappyDom to enable testing components.
 *
 * @packageDocumentation
 */

/**
 * Registers the HappyDom global environment for testing purposes.
 *
 * This function sets up the HappyDom environment by registering the global
 * objects and functions provided by HappyDom. This is necessary for testing
 * components that rely on DOM manipulation and other browser-like features.
 *
 * @see {@link https://github.com/capricorn86/happy-dom}
 */

import { GlobalRegistrator } from '@happy-dom/global-registrator';

GlobalRegistrator.register();
