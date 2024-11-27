import classes from './ExampleComponent.module.css'
import classNames from '../../helpers/classNames'

const ExampleComponent = () => {
  return (
    <div className={classNames(classes.red, classes.italic)}>
      <h1>Example Component</h1>
    </div>
  )
}

export default ExampleComponent;