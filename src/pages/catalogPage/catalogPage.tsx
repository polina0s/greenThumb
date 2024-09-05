import queryString from 'query-string';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { CatalogCard } from '../../components/catalogCard';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Loader } from '../../components/loader';
import { SectionBanner } from '../../components/sectionBanner';
import { getShopItems } from '../../store/shopItems/shopItems.actions';
import { allShopItemsSelector } from '../../store/shopItems/shopItems.selectors';
import { useAppDispatch } from '../../store/store';
import { SelectSort } from '../../widgets/select';
import { CatalogFilters } from '../../widgets/сatalogFilters/сatalogFilters';
import classes from './catalogPage.module.scss';

export function CatalogPage() {
  const dispatch = useAppDispatch();
  const { items, isLoading } = useSelector(allShopItemsSelector);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const price = +searchParams.get('price');
  const type = searchParams.get('type');

  useEffect(() => {
    dispatch(
      getShopItems({ limit: 9, category: category, price: price, type: type }),
    );
  }, [dispatch, category, price, type]);

  return (
    <div className={classes.wrapper}>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <div className={classes.banner}>
        <SectionBanner
          title="Shop"
          description="Find the perfect plant for your space"
        />
      </div>
      <div className={classes.cardsCont}>
        <div className={classes.selectSort}>
          <SelectSort />
        </div>
        <div className={classes.catalog}>
          <div className={classes.filters}>
            <CatalogFilters />
          </div>
          <div className={classes.cards}>
            {isLoading ? (
              <Loader />
            ) : (
              items.map((item) => {
                return (
                  <CatalogCard
                    title={item.name}
                    price={item.price}
                    imgSrc={item.images[1].src}
                    id={item.id}
                    key={item.id}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
      <Footer variant="green" />
    </div>
  );
}
