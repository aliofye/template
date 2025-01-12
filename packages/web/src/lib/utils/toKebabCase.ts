/**
 * Converts a given string to kebab-case.
 *
 * This function transforms a string by inserting dashes before uppercase letters,
 * replacing spaces or underscores with dashes, and converting the entire string to lowercase.
 *
 * @param str - The input string to be converted to kebab-case.
 * @returns The kebab-case version of the input string.
 */

const toKebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};
export default toKebabCase;
