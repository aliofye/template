/**
 * @fileoverview Converts a given string to kebab-case.
 *
 * This function transforms a string by inserting dashes before uppercase letters,
 * replacing spaces or underscores with dashes, and converting the entire string to lowercase.
 *
 * @version 1.0.0
 * @date 2025-01-15
 * @author Ali Morshid
 *
 * @param {string} str - The input string to be converted to kebab-case.
 * @returns {string} The kebab-case version of the input string.
 */

const toKebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};
export default toKebabCase;
