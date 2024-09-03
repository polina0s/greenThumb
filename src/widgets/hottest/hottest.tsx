import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CatalogCard } from '../../components/catalogCard';
import { Loader } from '../../components/loader';
import { SectionHeader } from '../../components/sectionHeader';
import { getShopItems } from '../../store/shopItems/shopItems.actions';
import { allShopItemsSelector } from '../../store/shopItems/shopItems.selectors';
import { useAppDispatch } from '../../store/store';
import classes from './hottest.module.scss';

export function Hottest() {
  const dispatch = useAppDispatch();
  const { items, isLoading } = useSelector(allShopItemsSelector);

  useEffect(() => {
    dispatch(getShopItems({ limit: 8 }));
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
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.cards}>
          {items.map((item) => {
            return (
              <CatalogCard
                title={item.name}
                price={item.price}
                imgSrc={item.images[1].src}
                id={item.id}
                key={item.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
