import { Text } from '../../components/text';
import classes from './select.module.scss';

interface SelectProps {
  title: string;
}

const options = [
  { value: 'Popular', id: 1 },
  { value: 'Price: High to low', id: 2 },
  { value: 'Price: Low to high', id: 3 },
];

export function Select({ title }: SelectProps) {
  return (
    <label className={classes.cont}>
      <Text className={classes.title}>{title}</Text>
      <select name="" id="">
        {options.map((opt) => {
          return (
            <option key={opt.id} value={opt.value}>
              {opt.value}
            </option>
          );
        })}
      </select>
    </label>
  );
}

{
  /* <label>
  <p></p>
  <select>
    <option value=""></option>
    <option value=""></option>
    <option value=""></option>
  </select>
</label> */
}
