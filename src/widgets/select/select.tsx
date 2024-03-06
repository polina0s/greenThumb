import Select, {
  components,
  ControlProps,
  DropdownIndicatorProps,
  SingleValueProps,
} from 'react-select';

import Arrow from '../../assets/images/arrow.svg';
import { Text } from '../../components/text';
import classes from './select.module.scss';

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

const Control = ({ children, ...props }: ControlProps) => {
  return (
    <components.Control {...props}>
      <Text variant="openSansRegularSM" className={classes.control}>
        Sort by
      </Text>
      {children}
    </components.Control>
  );
};

const IndicatorSeparator = () => {
  return <span />;
};

const SingleValue = ({ children, ...props }: SingleValueProps) => (
  <components.SingleValue {...props}>{children}</components.SingleValue>
);

export function SelectSort() {
  return (
    <Select
      options={options}
      className={classes.cont}
      defaultValue={options[0]}
      components={{
        DropdownIndicator,
        IndicatorSeparator,
        Control,
        SingleValue,
      }}
      classNamePrefix="react-select"
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
      styles={{
        control: (base) => ({
          ...base,
          padding: '0 12px',
        }),
        singleValue: (base) => ({
          ...base,
          padding: 0,
          margin: 0,
          width: 53,
          letterSpacing: '-0.3px',
          lineHeight: '26px',
        }),
        valueContainer: (base) => ({
          ...base,
          padding: 0,
          width: 53,
        }),
        dropdownIndicator: (base) => ({
          ...base,
          padding: 0,
          width: 24,
          height: 24,
        }),
        input: (base) => ({
          ...base,
          padding: 0,
          margin: 0,
          width: 53,
        }),
      }}
    />
  );
}
