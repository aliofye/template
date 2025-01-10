const toKebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert a dash before uppercase letters
    .replace(/[\s_]+/g, '-') // Replace spaces or underscores with dashes
    .toLowerCase(); // Convert the entire string to lowercase
};
export default toKebabCase;
