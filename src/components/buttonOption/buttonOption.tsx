import classes from './buttonOption.module.scss';

interface ButtonOptionProps {
  name: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  disabled?: boolean;
}

export function ButtonOption({
  name,
  value,
  onChange,
  checked,
  disabled,
}: ButtonOptionProps) {
  return (
    <label>
      <input
        className={classes.buttonOption}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <div className={classes.optionButtonBox}>
        <span className={classes.optionButtonSize}>{value}</span>
      </div>
    </label>
  );
}
