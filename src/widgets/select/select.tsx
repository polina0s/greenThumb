import Select, { components, DropdownIndicatorProps } from 'react-select';

import Arrow from '../../assets/images/arrow.svg';
import classes from './select.module.scss';

interface SelectProps {
  title: string;
}

const options = [
  { value: 'popular', label: 'Popular' },
  { value: 'priceToLow', label: 'Price ⇓' },
  { value: 'priceToHigh', label: 'Price ⇑' },
];

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <Arrow />
    </components.DropdownIndicator>
  );
};

const IndicatorSeparator = () => {
  return <span />;
};

export function SelectSort({ title }: SelectProps) {
  return (
    <Select
      options={options}
      className={classes.cont}
      defaultValue={options[0]}
      components={{ DropdownIndicator, IndicatorSeparator }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary50: 'white',
          neutral20: 'black',
          primary25: 'lightGray',
          primary: 'black',
        },
      })}
    />
  );
}
