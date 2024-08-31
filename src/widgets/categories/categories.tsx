import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CategoryCard } from '../../components/categoryCard';
import { Loader } from '../../components/loader';
import { SectionHeader } from '../../components/sectionHeader';
import { getCategories } from '../../store/categories';
import { allCategoriesSelector } from '../../store/categories/categories.selectors';
import { useAppDispatch } from '../../store/store';
import classes from './categories.module.scss';

export function Categories({ isLoading }: { isLoading: boolean }) {
  const dispatch = useAppDispatch();
  const categories = useSelector(allCategoriesSelector);

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
          {categories.map((categorie) => {
            return (
              <CategoryCard
                key={categorie.id}
                imgSrc={categorie.img}
                title={categorie.name}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
