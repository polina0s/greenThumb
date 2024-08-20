import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CatalogCard } from '../../components/catalogCard';
import { SectionHeader } from '../../components/sectionHeader';
import { getShopItems } from '../../components/store/shopItems/shopItems.actions';
import { allShopItemsSelector } from '../../components/store/shopItems/shopItems.selectors';
import { useAppDispatch } from '../../components/store/store';
import classes from './hottest.module.scss';

export function Hottest() {
  const dispatch = useAppDispatch();
  const plants = useSelector(allShopItemsSelector);

  useEffect(() => {
    dispatch(getShopItems());
  }, [dispatch]);

  return (
    <div className={classes.cont}>
      <div className={classes.headerCont}>
        <SectionHeader
          firstWord="Hottest&nbsp;"
          secondWord="Plants"
          shopArticle={true}
        />
      </div>
      <div className={classes.cards}>
        {plants.map((plant) => {
          return (
            <CatalogCard
              title={plant.name}
              price={plant.price}
              imgSrc={plant.images[1].src}
              key={plant.id}
            />
          );
        })}
      </div>
    </div>
  );
}
