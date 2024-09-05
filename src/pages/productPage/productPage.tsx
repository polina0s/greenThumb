import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CareSection } from '../../components/careSection/careSection';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { ProductCard } from '../../components/productCard';
import { ProductValues } from '../../components/productCard/productCard';
import { SectionBanner } from '../../components/sectionBanner';
import { addItemToCart } from '../../store/cart/cart.actions';
import { allShopItemSelector } from '../../store/shopItem';
import { getShopItemById } from '../../store/shopItem/shopItem.actions';
import { useAppDispatch } from '../../store/store';
import { SaleSection } from '../../widgets/saleSection';
import classes from './productPage.module.scss';

export function ProductPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { item, isItemLoading } = useSelector(allShopItemSelector);

  const handleAddItemToCart = (data: ProductValues) => {
    dispatch(addItemToCart(data.id));
  };

  useEffect(() => {
    dispatch(getShopItemById({ id: +id }));
  }, [dispatch, id]);

  return (
    <div id={id} className={classes.cont}>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <div className={classes.sectionBanner}>
        <SectionBanner title="Plant" description="Marble Queen Pothos" />
      </div>
      {isItemLoading ? (
        <div>loader</div>
      ) : (
        <>
          <div className={classes.card}>
            <ProductCard
              item={item}
              id={+id}
              handleAddItemToCart={handleAddItemToCart}
            />
          </div>
          <div className={classes.care}>
            <CareSection options={item.care} />
          </div>
          <div className={classes.sale}>
            <SaleSection
              firstWord="You’ll love&nbsp;"
              secondWord="these too..."
            />
          </div>
        </>
      )}
      <Footer variant="green" />
    </div>
  );
}
