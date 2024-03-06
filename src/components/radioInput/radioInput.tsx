import classNames from 'classnames';

import classes from './radioInput.module.scss';

interface RadioInputProps {
  value: string;
  name: string;
  className?: string;
}

export function RadioInput({ value, name, className }: RadioInputProps) {
  const ContClass = classNames(classes.cont, className);

  return (
    <div className={ContClass}>
      <input className={classes.input} type="radio" value={value} id={value} />
      <label className={classes.name} htmlFor={value}>
        {name}
      </label>
    </div>
  );
}
