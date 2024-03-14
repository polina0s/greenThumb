import classNames from 'classnames';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

import classes from './radioInput.module.scss';

interface RadioInputProps {
  value: string;
  name: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export const RadioInput = React.forwardRef(function RadioInput({ className }) {
  const { control, reset } = useForm<RadioInputProps>({});
  const ContClass = classNames(classes.cont, className);

  return (
    <div className={ContClass}>
      <Controller />
      {/* <input
        className={classes.input}
        type="radio"
        value={value}
        id={value}
        onChange={onChange}
      />
      <label className={classes.name} htmlFor={value}>
        {name}
      </label> */}
    </div>
  );
});

// export function RadioInput({
//   value,
//   name,
//   className,
//   onChange,
// }: RadioInputProps) {
// const ContClass = classNames(classes.cont, className);

// return (
//   <div className={ContClass}>
//     <input
//       className={classes.input}
//       type="radio"
//       value={value}
//       id={value}
//       onChange={onChange}
//     />
//     <label className={classes.name} htmlFor={value}>
//       {name}
//     </label>
//   </div>
// );
// }
