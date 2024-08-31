import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Loader } from '../../components/loader';
import { SaleCard } from '../../components/saleCard';
import { SectionHeader } from '../../components/sectionHeader';
import { getSaleItems } from '../../store/saleItems/saleItems.actions';
import { allSaleItemsSelector } from '../../store/saleItems/saleItems.selectors';
import { useAppDispatch } from '../../store/store';
import classes from './saleSection.module.scss';

type SaleSectionProps = {
  firstWord: string;
  secondWord: string;
};

export function SaleSection({ firstWord, secondWord }: SaleSectionProps) {
  const dispatch = useAppDispatch();
  const { items, isLoading } = useSelector(allSaleItemsSelector);

  useEffect(() => {
    dispatch(getSaleItems());
  }, [dispatch]);

  return (
    <>
      <div className={classes.headerCont}>
        <SectionHeader
          firstWord={firstWord}
          secondWord={secondWord}
          shopArticle={false}
        />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.cards}>
          {items.map((item) => {
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
      )}
    </>
  );
}
