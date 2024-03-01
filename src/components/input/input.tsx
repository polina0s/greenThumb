import classes from './input.module.scss';

interface InputProps {
  defaultValue: string;
  type: string;
}

export function Input({ defaultValue, type }: InputProps) {
  return (
    <input className={classes.input} type={type} defaultValue={defaultValue} />
  );
}
