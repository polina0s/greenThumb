import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CategoryCard } from '../../components/categoryCard';
import { Loader } from '../../components/loader';
import { SectionHeader } from '../../components/sectionHeader';
import { allCategoriesSelector, getCategories } from '../../store/categories';
import { useAppDispatch } from '../../store/store';
import classes from './categories.module.scss';

export function Categories() {
  const dispatch = useAppDispatch();
  const { categories, isLoading } = useSelector(allCategoriesSelector);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <div className={classes.headerCont}>
        <SectionHeader
          firstWord="Shop&nbsp;"
          secondWord="by Categories"
          shopArticle={false}
        />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.cards}>
          {categories.map((category) => {
            return (
              <CategoryCard
                key={category.id}
                title={category.name}
                value={category.value}
                imgSrc={category.img}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
