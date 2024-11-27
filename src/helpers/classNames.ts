/**
 * Sets multiple classes on an element.
 * This is needed because you can not set multiple classes with the `className` prop in React.
 *
 * @param classes - classes
 */

export default (...classes: string[]) => classes.join(" ");