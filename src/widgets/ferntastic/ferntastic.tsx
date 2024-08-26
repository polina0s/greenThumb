import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { SaleCard } from '../../components/saleCard';
import { SectionHeader } from '../../components/sectionHeader';
import { getSaleItems } from '../../store/saleItems/saleItems.actions';
import { allSaleItemsSelector } from '../../store/saleItems/saleItems.selectors';
import { useAppDispatch } from '../../store/store';
import classes from './ferntastic.module.scss';

export function Ferntastic() {
  const dispatch = useAppDispatch();
  const saleItems = useSelector(allSaleItemsSelector);

  useEffect(() => {
    dispatch(getSaleItems());
  }, [dispatch]);

  return (
    <>
      <div className={classes.headerCont}>
        <SectionHeader
          firstWord="Ferntastic&nbsp;"
          secondWord="Deals"
          shopArticle={false}
        />
      </div>
      <div className={classes.cards}>
        {saleItems.map((item) => {
          return (
            <SaleCard
              saleValue={item.saleValue}
              title={item.name}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              imgSrc={item.img}
              key={item.id}
            />
          );
        })}
      </div>
    </>
  );
}
