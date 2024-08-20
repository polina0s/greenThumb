import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import img from '../../assets/images/Rectangle 51.png';
import { CategoryCard } from '../../components/categoryCard';
import { SectionHeader } from '../../components/sectionHeader';
import { getShopItemsCategories } from '../../components/store/shopItemsCategories';
import { allShopItemsCategoriesSelector } from '../../components/store/shopItemsCategories/shopItemsCategories.selectors';
import { useAppDispatch } from '../../components/store/store';
import classes from './categories.module.scss';

const cards = [
  { imgSrc: img, title: 'bonsai', id: '1' },
  { imgSrc: img, title: 'bonsai', id: '2' },
  { imgSrc: img, title: 'bonsai', id: '3' },
  { imgSrc: img, title: 'bonsai', id: '4' },
  { imgSrc: img, title: 'bonsai', id: '5' },
  { imgSrc: img, title: 'bonsai', id: '6' },
];

export function Categories() {
  const dispatch = useAppDispatch();
  const categories = useSelector(allShopItemsCategoriesSelector);

  useEffect(() => {
    dispatch(getShopItemsCategories());
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
    </>
  );
}
