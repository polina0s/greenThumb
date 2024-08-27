import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CatalogCard } from '../../components/catalogCard';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { SectionBanner } from '../../components/sectionBanner';
import { getShopItems } from '../../store/shopItems/shopItems.actions';
import { allShopItemsSelector } from '../../store/shopItems/shopItems.selectors';
import { useAppDispatch } from '../../store/store';
import { SelectSort } from '../../widgets/select';
import { CatalogFilters } from '../../widgets/сatalogFilters/сatalogFilters';
import classes from './catalogPage.module.scss';

export function CatalogPage() {
  const dispatch = useAppDispatch();
  const shopItems = useSelector(allShopItemsSelector);

  useEffect(() => {
    dispatch(getShopItems({ limit: 9 }));
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <div className={classes.banner}>
        <SectionBanner
          title="Shop"
          description="Find the perfect plant for your space"
        />
      </div>
      <div className={classes.selectSort}>
        <SelectSort />
      </div>
      <div className={classes.catalog}>
        <div className={classes.filters}>
          <CatalogFilters />
        </div>
        <div className={classes.cards}>
          {shopItems.map((item) => {
            return (
              <CatalogCard
                title={item.name}
                price={item.price}
                imgSrc={item.images[1].src}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
      <Footer variant="green" />
    </div>
  );
}
