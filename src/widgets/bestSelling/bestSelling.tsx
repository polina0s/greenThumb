import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { BestSellCard } from '../../components/bestSellCard';
import { Loader } from '../../components/loader';
import { SectionHeader } from '../../components/sectionHeader';
import { getBestSellCategories } from '../../store/bestSellCategories';
import { allBestSellCategoriesSelector } from '../../store/bestSellCategories/bestSellCategories.selectors';
import { useAppDispatch } from '../../store/store';
import classes from './bestSelling.module.scss';

export function BestSelling({ isLoading }: { isLoading: boolean }) {
  const dispatch = useAppDispatch();
  const categories = useSelector(allBestSellCategoriesSelector);

  useEffect(() => {
    dispatch(getBestSellCategories());
  }, [dispatch]);

  return (
    <>
      <div className={classes.headerCont}>
        <SectionHeader
          firstWord="Best&nbsp;"
          secondWord="Selling"
          shopArticle={true}
        />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.cards}>
          {categories.map((category) => {
            return (
              <BestSellCard
                title={category.name}
                imgSrc={category.img}
                key={category.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
