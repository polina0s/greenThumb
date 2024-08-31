import { Controller, useForm } from 'react-hook-form';

import { DropdownFilter } from '../../components/dropdownFilter';
import { RadioFilter } from '../../components/radioFitler';
import { RangeFilter } from '../../components/rangeFilter';
import classes from './catalogFilters.module.scss';

export function CatalogFilters() {
  const { control, watch } = useForm({
    defaultValues: {
      category: '',
      price: 100,
      type: '',
    },
  });

  return (
    <div>
      <div className={classes.category}>
        <Controller
          render={({ field }) => <DropdownFilter {...field} />}
          control={control}
          name="category"
        />
      </div>
      <div className={classes.price}>
        <Controller
          render={({ field }) => (
            <RangeFilter
              {...field}
              title="Price"
              min={100}
              max={1000}
              text={`from 100 to ${watch('price')}`}
            />
          )}
          control={control}
          name="price"
        />
      </div>
      <Controller
        render={({ field }) => <RadioFilter {...field} title="Include" />}
        control={control}
        name="type"
      />
    </div>
  );
}
