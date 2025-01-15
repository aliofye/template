/**
 * @fileoverview This file registers HappyDom to enable testing components.
 *
 * This function sets up the HappyDom environment by registering the global
 * objects and functions provided by HappyDom. This is necessary for testing
 * components that rely on DOM manipulation and other browser-like features.
 *
 * @version 1.0.0
 * @date 2025-01-15
 * @author Ali Morshid
 * @see {@link https://github.com/capricorn86/happy-dom} HappyDom documentation.
 */

import { GlobalRegistrator } from '@happy-dom/global-registrator';

GlobalRegistrator.register();
