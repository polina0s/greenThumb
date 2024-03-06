import classes from './radioInput.module.scss';

interface RadioInputProps {
  value: string;
  id: string;
  name: string;
}

export function RadioInput({ value, id, name }: RadioInputProps) {
  return (
    <>
      <input className={classes.input} type="radio" value={value} id={id} />
      <label className={classes.name} htmlFor={value}>
        {name}
      </label>
    </>
  );
}
