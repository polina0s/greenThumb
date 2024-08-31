import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { ProductCard } from '../../components/productCard';
import { SectionBanner } from '../../components/sectionBanner';
import { getShopItemById } from '../../store/shopItem/shopItem.actions';
import { RootState, useAppDispatch } from '../../store/store';
import classes from './productPage.module.scss';

export function ProductPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { isItemLoading, item } = useSelector((state: RootState) => ({
    item: state.shopItem.shopItem,
    isItemLoading: state.shopItem.isLoading,
  }));

  useEffect(() => {
    dispatch(getShopItemById({ id: +id }));
  }, [dispatch, id]);

  return (
    <div id={id} className={classes.cont}>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <div className={classes.sectionBanner}>
        <SectionBanner title="Plant" description="Marble Queen Pothos" />
      </div>
      <div className={classes.card}>
        {isItemLoading ? (
          <div>loader</div>
        ) : (
          <ProductCard item={item} id={+id} />
        )}
      </div>
      <Footer variant="green" />
    </div>
  );
}
