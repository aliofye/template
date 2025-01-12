/**
 * Combines multiple class names into a single string.
 *
 * @param {...(string | undefined)[]} classes - An array of class names, which can be strings or undefined.
 * @returns {string} A single string containing all the class names separated by a space.
 */

export default (...classes: (string | undefined)[]) => classes.join(' ');
