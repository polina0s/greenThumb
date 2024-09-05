import queryString from 'query-string';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { DropdownFilter } from '../../components/dropdownFilter';
import { RadioFilter } from '../../components/radioFitler';
import { RangeFilter } from '../../components/rangeFilter';
import { allCategoriesSelector, getCategories } from '../../store/categories';
import { useAppDispatch } from '../../store/store';
import classes from './catalogFilters.module.scss';

export function CatalogFilters() {
  const dispatch = useAppDispatch();
  const categories = useSelector(allCategoriesSelector);
  const [searchParams, setSearchParams] = useSearchParams();

  const { control, watch } = useForm({
    defaultValues: {
      category: searchParams.get('category') || null,
      price: searchParams.get('price') || 1000,
      type: searchParams.get('type') || null,
    },
  });

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <div className={classes.category}>
        <Controller
          render={({ field }) => (
            <DropdownFilter
              options={categories.categories}
              {...field}
              value={searchParams.get('category')}
              onChange={(e) => {
                setSearchParams((prev) => {
                  return queryString.stringify({
                    ...Object.fromEntries(prev),
                    category: e.target.value,
                  });
                });
                field.onChange(e);
              }}
            />
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
              text={`from 250 to ${watch('price') || 1000}`}
              onChange={(e) => {
                setSearchParams((prev) => {
                  return queryString.stringify({
                    ...Object.fromEntries(prev),
                    price: e.target.value,
                  });
                });
                field.onChange(e);
              }}
            />
          )}
          control={control}
          name="price"
        />
      </div>
      <Controller
        render={({ field }) => (
          <RadioFilter
            {...field}
            title="Include"
            value={searchParams.get('type')}
            onChange={(e) => {
              setSearchParams((prev) => {
                return queryString.stringify({
                  ...Object.fromEntries(prev),
                  type: e.target.value,
                });
              });
              field.onChange(e);
            }}
          />
        )}
        control={control}
        name="type"
      />
    </div>
  );
}
