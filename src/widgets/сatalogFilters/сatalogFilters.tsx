import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { DropdownFilter } from '../../components/dropdownFilter';
import { RadioFilter } from '../../components/radioFitler';
import { RangeFilter } from '../../components/rangeFilter';
import { allCategoriesSelector, getCategories } from '../../store/categories';
import { useAppDispatch } from '../../store/store';
import classes from './catalogFilters.module.scss';

export function CatalogFilters() {
  const dispatch = useAppDispatch();
  const categories = useSelector(allCategoriesSelector);

  const { control, watch } = useForm({
    defaultValues: {
      category: '',
      price: 250,
      type: '',
    },
  });

  const watchAll = watch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {}, [watchAll]);

  return (
    <div>
      <div className={classes.category}>
        <Controller
          render={({ field }) => (
            <DropdownFilter options={categories.categories} {...field} />
          )}
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
              min={250}
              max={1000}
              text={`from 250 to ${watch('price')}`}
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
